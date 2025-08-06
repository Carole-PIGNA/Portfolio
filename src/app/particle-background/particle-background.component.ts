import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [],
  template: `
   <div class="canvas-container">
     <canvas id="bg-canvas"></canvas>
   </div>

  `,
  styles: `
  .canvas-container {
    width: 100%;
    height: 100vh;
    background-color:  #F4F0ED;
    position: relative;
    overflow: hidden;
  }

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  `
})
export class ParticleBackgroundComponent implements AfterViewInit{
@ViewChild('bgCanvas', { static: false }) canvasRef!: ElementRef;
  private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;
    private renderer!: THREE.WebGLRenderer;
    private particles!: THREE.Points;
    private animationFrameId: any;

    ngAfterViewInit(): void {
      this.initScene();
      this.animate();
    }

    private initScene(): void {
      this.scene = new THREE.Scene();

      const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
      this.renderer = new THREE.WebGLRenderer({ canvas, alpha: false });
      this.renderer.setClearColor(0xF4F0ED, 1);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio <= 1.5 ? 1 : 1.5);

      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;

      const geometry = new THREE.BufferGeometry();
      const particleCount = 500;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.05,
      });

      this.particles = new THREE.Points(geometry, material);
      this.scene.add(this.particles);
    }

    private animate = (): void => {
      this.particles.rotation.y += 0.002;
      this.particles.rotation.x += 0.001;

      this.renderer.render(this.scene, this.camera);
      this.animationFrameId = requestAnimationFrame(this.animate);
    };
}
