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

            <!-- Description avec troncature -->
            <p class="description" [class.tronquee]="!projet.isExpanded">
              {{ projet.description }}
            </p>
            <button
              *ngIf="projet.description.length > 150"
              class="btn-lire-plus"
              (click)="projet.isExpanded = !projet.isExpanded"
            >
              {{ projet.isExpanded ? 'Lire moins' : 'Lire plus' }}
            </button>

            <!-- Stack technique -->
            <p class="stack-technique">
              <strong>Stack technique : </strong>{{ projet.stack }}
            </p>

            <!-- Lien vers le dépôt -->
            <a class="lire-plus" [href]="projet.lien" target="_blank">Lien GitHub</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projets {
      margin-left: 25px;
      margin-right: 25px;
    }
    .projets h2 {
      text-align: center;
    }

    .articles {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .article {
      background: #fff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-top: 6px solid #3f51b5;
    }

    .article:nth-child(2) {
      border-top-color: #4caf50;
    }
    .article:nth-child(3) {
      border-top-color: #ff9800;
    }

    .article:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.12);
    }

    .article video,
    .article img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .texte {
      padding: 1rem 1.2rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .nom {
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      color: #333;
      margin-bottom: 0.6rem;
    }

    .description {
      font-size: 0.95rem;
      color: #555;
      line-height: 1.4;
      margin-bottom: 0.5rem;
    }

    .description.tronquee {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .btn-lire-plus {
      background: none;
      border: none;
      color: #3f51b5;
      font-weight: bold;
      padding: 0;
      margin-bottom: 1rem;
      cursor: pointer;
      text-align: left;
      font-size: 0.9rem;
    }

    .btn-lire-plus:hover {
      text-decoration: underline;
    }

    .stack-technique {
      margin-top: auto;
      margin-bottom: 1rem;
      padding: 0.6rem 1rem;
      background: #f1f1f1;
      border-radius: 12px;
      font-size: 0.9rem;
      color: #333;
      text-align: center;
      align-self: stretch;
      line-height: 1.4;
    }

    .stack-technique strong {
      font-weight: 600;
      color: #222;
    }

    .lire-plus {
      display: block;
      width: 100%;
      padding: 0.8rem 1rem;
      background-color: #3f51b5;
      color: white;
      border: none;
      border-radius: 0 0 12px 12px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s ease;
      text-align: center;
    }

    .lire-plus:hover {
      background-color: #2c3aa3;
    }
  `]
})
export class ProjetsComponent {
  projets = [
    {
      nom: 'CRM',
      description: 'Application CRM en développement, visant à faciliter la gestion des opportunités avec une interface Kanban. Le frontend est en cours de développement avec Angular, tandis que le backend est déjà en place avec Spring Boot et PostgreSQL pour assurer une persistance des données fiable. Le projet intègre également un pipeline CI/CD avec GitLab CI et une analyse de code automatisée via SonarCloud, garantissant ainsi un développement de qualité.',
      stack: 'Frontend : Angular, RxJS, HTML, CSS · Backend : Spring Boot, Spring Data JPA · Tests : JUnit, Mockito · CI/CD : GitLab CI, SonarCloud · Base de données : PostgreSQL',
      image: 'designCRM.png',
      lien: 'https://gitlab.com/pigna-pro-tech/crm-kanban.git',
      isExpanded: false
    },
    {
      nom: 'Online Library Management',
      description: "Application de gestion de bibliothèque en temps réel, permettant une gestion fluide des livres, emprunts et utilisateurs. L'interface moderne et intuitive est développée en Angular, tandis que le backend performant est construit avec Spring Boot. L'authentification sécurisée est en cours d'intégration pour offrir une expérience utilisateur complète.",
      stack: 'Frontend : Angular, RxJS, HTML, CSS · Backend : Spring Boot, Spring Data JPA · Base de données : MySQL',
      video: 'presentation_libraryManagement.mp4',
      lien: 'https://github.com/Carole-PIGNA/librarymanagementFRONT',
      isExpanded: false
    },
    {
      nom: 'Portfolio',
      description: "Mon portfolio personnel interactif, conçu pour mettre en valeur mes projets, compétences et expériences. Il intègre des animations 3D captivantes grâce à Three.js, créant une expérience immersive et dynamique pour l'utilisateur. Le tout est construit en Angular, ce qui permet une navigation fluide et moderne.",
      stack: 'Frontend : Angular, TypeScript, HTML5, CSS3 · Animation : Three.js',
      image: 'portfolio.png',
      lien: 'https://github.com/Carole-PIGNA/portfolio',
      isExpanded: false
    }
  ];
}
