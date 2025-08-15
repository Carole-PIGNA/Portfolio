import { Component } from '@angular/core';

@Component({
  selector: 'app-monhistoire',
  standalone: true,
  imports: [],
  template: `

            <div class="monhistoire-wrapper">
                <div class="photo-card animate-photo">
                      <img loading="lazy" src="photo_profil_bckgdremoved.png" alt="photo profil" />
                      <div class="image-bottom">
                        <p class="image-caption">Certifiée et passionnée </p>
                      </div>
                </div>

              <div class="texte-card animate-texte">
                <h2 class="titre-histoire">Mon histoire</h2>
                <p>Ingénieure biomédicale de formation, j’ai commencé ma carrière en accompagnant la mise en place de solutions techniques pour les professionnels de santé. Cette expérience m’a donné envie de passer de l’intégration à la création d’applications.</p>
                <p>Formée au développement Full-Stack Java/Angular et aux méthodes agiles, je combine expertise technique et sens du concret pour concevoir des solutions efficaces. Motivée et curieuse, je suis prête à relever de nouveaux défis pour contribuer à des projets innovants.</p>
              </div>


            </div>
            `,
  styles: `
    .monhistoire-wrapper {
      display: flex;
      gap: 2rem;
      align-items: stretch;
    }

    .photo-card {
      flex: 0 0 400px;
      display: flex;
      flex-direction: column;
      max-width: 400px; /* limite supplémentaire */
    }

    .photo-card img {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }

    .image-bottom {
      margin-top: 1rem;
      text-align: center;
    }

    .image-caption {
      font-style: italic;
      font-size: 0.95rem;
      color: #665e55;
    }

    .texte-card {
      flex: 1 1 300px;
      min-width: 0; /* Pour éviter débordement */
      padding: 1rem;
      border-radius: 16px;
      font-size: 1rem;
      line-height: 1.8;
      background-color: transparent;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      backdrop-filter: blur(3px);
      margin-right: 50px;
    }
    .texte-card p {
      text-align: justify;
    }

    h2.titre-histoire {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-60px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeInRight {
      from { opacity: 0; transform: translateX(60px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .animate-photo {
      animation: slideInLeft 1.2s ease-out forwards;
    }

    .animate-texte {
      animation: fadeInRight 1.2s ease-out forwards;
    }

    @media (max-width: 768px) {
      .monhistoire-wrapper {
        flex-direction: column;
      }

      .photo-card {
        width: 100%;
        max-width: none; /* pour prendre toute la largeur */
        margin-bottom: 1.5rem; /* espace entre image et texte */
        flex: none;
      }
        .photo-card img {
          display: block;
          max-width: 100%;
          height: auto;
        }

      .texte-card {
        padding: 1.5rem;
        min-width: auto; /* permet de réduire la largeur */
        margin-right: 0; /* supprimer la marge sur mobile */
        flex: none;
      }
      .photo-card, .texte-card {
        min-height: auto !important;
      }
      h2.titre-histoire {
          text-align: center;
        }
    }

  `
})
export class MonhistoireComponent {

}
