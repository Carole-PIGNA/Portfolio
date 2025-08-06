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
          <img [src]="projet.image" [alt]="projet.nom" />
          <div class="texte">
            <h3>{{ projet.nom }}</h3>
            <p>{{ projet.description }}</p>
            <a class="lire-plus" [href]="projet.lien" target="_blank">Voir le projet</a>
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
      text-align: center;
      font-size: 2.4rem;
      margin-bottom: 1rem;
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

    .article img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      object-position: top;
      transition: transform 0.3s ease;
    }

    .article:hover img {
      transform: scale(1.03);
    }

    .texte {
      padding: 1rem;
      flex-grow: 1;
    }

    .texte h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #3f51b5;
    }

    .texte p {
      font-size: 0.95rem;
      margin: 0.5rem 0 1rem;
      color: #555;
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
      nom: 'Reservia',
      description: 'Site de réservation d’hébergements et d’activités dans différentes villes.',
      image: 'reservia.png',
      lien: 'https://lien-vers-reservia.com'
    },
    {
      nom: 'OhMyFood',
      description: 'Application mobile de présentation de restaurants gastronomiques avec animations.',
      image: 'ohmyfood.png',
      lien: 'https://lien-vers-ohmyfood.com'
    },
    {
      nom: 'La Chouette Agence',
      description: 'Optimisation SEO d’un site vitrine pour une agence de communication.',
      image: 'chouette.png',
      lien: 'https://lien-vers-chouette.com'
    }
  ];
}
