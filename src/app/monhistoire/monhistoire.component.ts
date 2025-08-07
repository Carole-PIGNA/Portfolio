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
                  <p> J’ai découvert le code à l’université, au cours d’une licence Sciences pour l’ingénieur, entre algorithmes et projets techniques.</p>
                   <p>En Master 2, je me suis orientée vers l’ingénierie biomédicale, convaincue par le potentiel du numérique dans le domaine médical. Mais le développement web ne m’a jamais vraiment quittée : je continuais à me former en autodidacte, à expérimenter, à créer.</p>
                    <p>Quelques années plus tard, j’ai fait le choix de tout quitter pour me reconvertir pleinement. </p>
                    <p>Aujourd’hui, développeuse full stack certifiée, je mobilise mon esprit d’ingénieure, ma rigueur et ma curiosité pour concevoir des applications robustes, durables et centrées sur l’utilisateur.
                  </p>
                </div>

            </div>
            `,
  styles: `
    .monhistoire-wrapper {
        display: flex;
        gap: 2rem;
        align-items:  stretch;
          }

      .photo-card {
        flex: 0 0 400px;
        display: flex;
        flex-direction: column;

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
          min-width: 400px;
          padding: 1rem;
          border-radius: 16px;
          font-size: 1rem;
          line-height: 1.8;
          background-color: transparent;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          backdrop-filter: blur(3px);
          margin-right: 50px;



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
          }

          .texte-card {
            padding: 1.5rem;
          }
        }


  `
})
export class MonhistoireComponent {

}
