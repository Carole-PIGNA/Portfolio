import { Component } from '@angular/core';
import { OrdiSceneComponent } from '../ordi-scene/ordi-scene.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OrdiSceneComponent],
  template: `
    <header class="header">
      <div class="background-3d">
        <app-ordi-scene></app-ordi-scene>
      </div>

      <div class="overlay-text">
        <div class="text-container">
          <h1 class="title_name">AIMEE CAROLE</h1>
          <p>Développeuse Fullstack Java/Angular</p>
          <p class="petit-paragraphe">Une développeuse, un clavier, des solutions.</p>
          <p class="localisation">📍 Ile-de-France</p>

          <div class="cta-container">
            <a
              href="CV_Carole_2025_certified.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="cta"
            >
              Voir mon CV
            </a>
            <a href="#projets" class="cta second-btn">Voir mes projets</a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: relative;
      width: 100%;
      height: 100dvh; /* hauteur dynamique viewport */
      overflow: hidden;
    }

    /* Le container 3D en fond plein écran */
    .background-3d {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .background-3d app-ordi-scene {
      width: 100%;
      height: 100%;
      display: block;
    }

    /* Texte par-dessus avec fond semi-transparent pour contraste */
    .overlay-text {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 5vw; /* padding horizontal symétrique */
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.15);
      color: #222121;
    }

    .text-container {
      max-width: 500px;
      width: 100%;
    }

    h1 {
      font-size: 3.5rem;
      line-height: 1.2;
      margin-bottom: 1rem;
      color: #B2301F;
    }

    p {
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 2rem;
      line-height: 2;
      color: inherit; /* hérite de la couleur overlay-text */
    }

    .localisation {
      font-size: 1rem;
    }

    .petit-paragraphe {
      font-size: 1rem;
    }

    .cta-container {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .cta {
      background-color: #B2301F;
      color: #F4F0ED;
      padding: 0.8rem 1.6rem;
      border-radius: 8px;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.8rem;
      transition: all 0.3s ease;
      cursor: pointer;
      display: inline-block;
    }

    .cta:hover,
    .cta:focus {
      background-color: #922417; /* un peu plus foncé au hover */
      outline: none;
    }

    .second-btn {
      background-color: #F4F0ED;
      border: 2px solid #B2301F;
      color: #B2301F;
    }

    .second-btn:hover,
    .second-btn:focus {
      background-color: #B2301F;
      color: #F4F0ED;
      outline: none;
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
      .overlay-text {
        justify-content: center;
        text-align: center;
        padding: 2rem;
        background: rgba(0, 0, 0, 0.4);
        color: #F4F0ED;
      }

      .text-container {
        max-width: 100%;
      }

      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 1.2rem;
      }

      .cta-container {
        flex-direction: column;
        align-items: center;
      }

      .cta {
        width: 100%;
        text-align: center;
      }

      .cta:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    @media (max-width: 400px) {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }
  `]
})
export class HeaderComponent {}
