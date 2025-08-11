import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projets">
      <h2>Mes projets</h2>
      <div class="articles">
        <div class="article" *ngFor="let projet of projets">
          <!-- Vidéo ou Image du projet -->
          <video *ngIf="projet.video" loading="lazy" [src]="projet.video" controls>
            <p>Vidéo non disponible pour {{ projet.nom }}.</p>
          </video>
          <img *ngIf="!projet.video" loading="lazy" [src]="projet.image" [alt]="projet.nom" />

          <div class="texte">
            <!-- Nom du projet -->
            <h3 class="nom">{{ projet.nom }}</h3>

            <!-- Description du projet -->
            <p class="description">{{ projet.description }}</p>

            <!-- Stack technique -->
            <p class="stack-technique">
              <strong>Stack technique : </strong>{{ projet.stack }}
            </p>

            <a class="lire-plus" [href]="projet.lien" target="_blank">Lien GitHub</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projets {
      padding: 2rem;
      text-align: center;
      overflow-x: hidden;
    }

    h2 {
      font-size: 2.4rem;
      font-weight: 600;
      color: #8B0000;
    }

    .articles {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .article {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .article video, .article img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      object-position: top;
      transition: transform 0.3s ease;
    }

    .article:hover video, .article:hover img {
      transform: scale(1.03);
    }

    .texte {
      padding: 1rem;
      flex-grow: 1;
    }

    .nom {
      font-size: 1.5rem;
      font-weight: 600;
      color: #3f51b5;
      margin-bottom: 0.5rem;
    }

    .description {
      font-size: 1rem;
      color: #555;
      margin-bottom: 1rem;
    }

    .stack-technique {
      font-size: 0.95rem;
      color: #333;
      font-style: italic;
      margin-bottom: 1rem;
    }

    .lire-plus {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #3f51b5;
      color: white;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.3s ease;
    }

    .lire-plus:hover {
      background-color: #2c3aa3;
    }
  `]
})
export class ProjetsComponent {
  projets = [
    {
      nom: 'Portfolio',
      description: 'Un portfolio personnel qui présente mes projets et compétences.',
      stack: 'Html5, CSS3, Typescript, Angular, Three.js',
      image: 'portfolio.png',
      lien: 'https://github.com/Carole-PIGNA/portfolio'
    },
    {
      nom: 'Online Library Management',
      description: 'Application de bibliothèque en ligne pour gérer les livres et les utilisateurs.',
      stack: 'Frontend : Angular, RxJS, HTML, CSS; Backend : Spring Boot, Spring Data JPA, MySQL',
      video: 'presentation_libraryManagement.mp4',
      lien: 'https://github.com/Carole-PIGNA/librarymanagementFRONT'
    },
    {
      nom: 'La Chouette Agence',
      description: 'Optimisation SEO d’un site vitrine pour une agence de communication.',
      stack: 'SEO, Google Analytics, Performance Web',
      image: 'chouette.png',
      lien: 'https://lien-vers-chouette.com'
    }
  ];
}
