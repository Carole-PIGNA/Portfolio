import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  NgZone,
} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';

@Component({
  standalone: true,
  selector: 'app-ordi-scene',
  template: `<div #canvasContainer class="canvas-container"></div>`,
  styles: [`
    .canvas-container {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border-radius: 0;
      overflow: hidden;
      position: relative;
      z-index: 2;
    }
  `],
})
export class OrdiSceneComponent implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true }) canvasRef!: ElementRef;

  private scene = new THREE.Scene();
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private loader = new GLTFLoader();
  private computer: THREE.Object3D | null = null;
  private clock = new THREE.Clock();
  private targetRotation = 0;
  private currentRotation = 0;
  private controls!: OrbitControls;
  private mixer!: THREE.AnimationMixer;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const container = this.canvasRef.nativeElement as HTMLDivElement;
    this.initScene(container);
    this.animate();

    // Adjust the camera on window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.adjustCameraForScreenSize(container.clientWidth);
    });

    // Initial camera adjustment for the screen size
    this.adjustCameraForScreenSize(container.clientWidth);
  }

private adjustCameraForScreenSize(width: number): void {
  // Si l'écran est plus petit que 768px (par exemple, un mobile), éloigner la caméra
  if (width <= 768) {
    this.camera.position.set(0, 5, 10);  // Position de la caméra éloignée pour les mobiles
    this.camera.fov = 45;  // Champ de vision adapté pour un meilleur rendu mobile
  } else {
    this.camera.position.set(2, 5, 6);  // Position par défaut pour les écrans plus grands
    this.camera.fov = 45;  // Champ de vision pour les grands écrans
  }
  this.camera.updateProjectionMatrix();
}

  private initScene(container: HTMLDivElement): void {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setClearColor('#F4F0ED');
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    this.adjustCameraForScreenSize(container.clientWidth);  // Adjust for screen size on load
    this.camera.lookAt(0, 1.5, 0);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(3, 5, 2);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    hemiLight.position.set(0, 20, 0);
    this.scene.add(hemiLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(ambientLight);

    const rectLight = new THREE.RectAreaLight(0xffffff, 3, 2, 1);
    rectLight.position.set(0, 1.6, 2);
    rectLight.lookAt(0, 1, 0);
    this.scene.add(rectLight);

    const screenLight = new THREE.PointLight(0x99ccff, 1.5, 3);
    screenLight.position.set(0, 1.6, -0.5);
    this.scene.add(screenLight);

    const tableLight = new THREE.SpotLight(0xffffff, 1.5, 5, Math.PI / 6, 0.3);
    tableLight.position.set(0, 2.2, 2);
    tableLight.target.position.set(0, 1, 0);
    this.scene.add(tableLight);
    this.scene.add(tableLight.target);

    const textureLoader = new THREE.TextureLoader();
    const floorTexture = textureLoader.load('/models/WoodFloor036_4K-JPG_Color.jpg');
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(4, 4);

    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTexture,
      color: 0xaaaaaa,
    });

    const width = container.clientWidth;
    const height = 50;

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(width, height), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    this.scene.add(floor);

    const wall = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 10),
      new THREE.MeshStandardMaterial({ color: 0xf5f5f5 })
    );
    wall.position.set(0, 5, -10);
    this.scene.add(wall);

    this.scene.fog = new THREE.Fog(0xf4f0ed, 15, 25);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enableZoom = true;
    this.controls.zoomSpeed = 1.2;
    this.controls.minDistance = 5;
    this.controls.maxDistance = 13;

    this.loader.load(
      '/models/office_worker_6_animated.glb',
      (gltf) => {
        const model = gltf.scene;
        const animations = gltf.animations;

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = (2 / maxDim) * 10;

        const pivot = new THREE.Group();
        model.position.sub(center);
        model.position.x += 2;
        model.scale.set(scale, scale, scale);
        pivot.add(model);
        pivot.rotation.y = -0.6;

        this.scene.add(pivot);
        this.computer = pivot;

        this.mixer = new THREE.AnimationMixer(model);
        if (animations && animations.length > 0) {
          this.mixer.clipAction(animations[0]).play();
        }
      },
      undefined,
      (error) => {
        console.error('❌ Erreur lors du chargement du modèle :', error);
      }
    );

    container.addEventListener('mousemove', (event: MouseEvent) => {
      const x = event.offsetX / container.clientWidth - 0.5;
      this.targetRotation = x * 0.5;
    });
  }

  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const loop = () => {
        requestAnimationFrame(loop);
        const delta = this.clock.getDelta();

        if (this.computer) {
          this.currentRotation += (this.targetRotation - this.currentRotation) * 0.05;
          this.computer.rotation.y = this.currentRotation;
        }

        if (this.mixer) {
          this.mixer.update(delta);
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      };
      loop();
    });
  }
}
