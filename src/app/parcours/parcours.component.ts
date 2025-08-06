import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="parcours" id="top">
      <div class="card formations animate-texte">
        <div class="formation-wrapper">

          <!-- Bloc 1 : Liste formations -->
          <div class="formation-liste">
            <h2 class="titre-formations">Parcours</h2>
            <div class="liste-formations">
              <div
                *ngFor="let formation of formations"
                class="card formation-item"
                [class.active]="formation.afficher"
                (click)="formation.afficher = !formation.afficher"
              >
                <div class="formation-header">
                  <span>{{ formation.intitule }} </span>
                  <button>{{ formation.afficher ? '−' : '+' }}</button>
                </div>
                <div class="formation-details">
                  <p><strong>📍 Établissement :</strong> <span class="text">{{ formation.etablissement }}</span></p>
                  <p><strong>📆 Période :</strong> <span class="text">{{ formation.periode }}</span></p>
                  <p><strong>📘 Description :</strong> <span class="text">{{ formation.description }}</span></p>
                </div>
              </div>
            </div>
          </div>

      <!-- Bloc 2 : Compétences -->
      <div class="formation-image">
        <h2>Compétences</h2>
        <div class="competence-list">
          <div class="competence-column">
            <div class="competence" *ngFor="let c of competences.slice(0, competences.length / 2)">
              <img [src]="'/' + c.logo" [alt]="c.nom" class="competence-logo" />
              <div class="competence-info">
                <span class="competence-nom">{{ c.nom }}</span>
                <div class="competence-barre">
                  <div class="barre-remplie" [style.width.%]="c.niveau"></div>
                </div>
                <span class="competence-niveau">{{ c.niveau }}%</span>
              </div>
            </div>
          </div>
          <div class="competence-column">
            <div class="competence" *ngFor="let c of competences.slice(competences.length / 2)">
              <img [src]="'/' + c.logo" [alt]="c.nom" class="competence-logo" />
              <div class="competence-info">
                <span class="competence-nom">{{ c.nom }}</span>
                <div class="competence-barre">
                  <div class="barre-remplie" [style.width.%]="c.niveau"></div>
                </div>
                <span class="competence-niveau">{{ c.niveau }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>


        </div>
      </div>
    </section>
  `,
  styles: `
    .parcours {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .formation-wrapper {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .formation-liste {
      flex: 1 1 55%;
      display: flex;
      flex-direction: column;
    }

    .formation-image {
      flex: 1 1 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem;
      text-align: left;
    }

    .formation-image h2 {
      margin-top: 20px;
      margin-bottom: 1rem;
    }





    .formation-item {
      margin-bottom: 1.5rem;
      border-radius: 12px;
      padding: 1rem;
      cursor: pointer;
      background-color: #F4F0ED;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      color: #B2301F;
      max-width: 600px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
    }

    .formation-item:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
      z-index: 1;
      background-color:#FAF9F8;
    }

    .formation-header {
      color: #B2301F;
      font-weight: 600;
      font-size: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .formation-details {
      margin-top: 1rem;
      font-size: 1rem;
      color: #222121;
      display: none;
    }

    .formation-item:hover .formation-details,
    .formation-item.active .formation-details {
      display: block;
    }

    button {
      color: #B2301F;
      font-size: 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
    }


    .competence-list {
       display: flex;
       justify-content: space-between;
       width: 100%;
       gap: 2rem;
    }

    .competence-column {
      flex:1;
      display:flex;
      flex-direction: column;
      gap: 1rem;
    }

    .competence-logo {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }

    .competence-info {
      flex: 1;
    }

    .competence-nom {
      font-weight: light;
      color: #222121;
    }

    .competence-barre {
      background-color: #e0e0e0;
      border-radius: 8px;
      height: 10px;
      margin-top: 4px;
      overflow: hidden;
    }

    .barre-remplie {
      background-color: #B2301F;
      height: 100%;
      transition: width 0.6s ease;
    }

    .competence-niveau {
      margin-left: 0.5rem;
      font-size: 0.9rem;
      color: #444;
    }

    @media (max-width: 768px) {
      .monhistoire {
        flex-direction: column;
      }

      .photo-card img {
        margin-bottom: 1rem;
      }

      .texte-card {
        padding: 1.5rem;
      }
    }


  `,
})
export class ParcoursComponent {
  formations = [
    {
      intitule: 'Oracle Certified Java SE 8',
      etablissement: 'Oracle University',
      periode: '05/2025 à 07/2025',
      description: 'Certification officielle de programmation Java, démontrant la maîtrise des bases et de la syntaxe avancée.',
      afficher: false
    },
    {
      intitule: 'Concepteur Développeur POEI',
      etablissement: 'FITEC',
      periode: '05/2024 à 09/2024',
      description: 'Formation intensive en développement Java/Spring et Angular avec accompagnement en projet professionnel.',
      afficher: false
    },
    {
      intitule: 'DevOps POEC',
      etablissement: 'M2i Formation',
      periode: '11/2023 à 02/2024',
      description: 'Formation aux outils DevOps (Docker, Kubernetes, Jenkins, etc.) avec certification DevOps Foundation.',
      afficher: false
    },
    {
      intitule: 'Développeur Web',
      etablissement: 'OpenClassRooms',
      periode: '2021',
      description: 'Autoformation aux fondamentaux du développement web : HTML, CSS, JavaScript, gestion de projet agile.',
      afficher: false
    },
    {
      intitule: 'Master 2 Ingénierie Biomédicale',
      etablissement: 'Université de Lorraine',
      periode: '2014 à 2016',
      description: 'Application du numérique dans le domaine médical, projets techniques en traitement d’image et modélisation.',
      afficher: false
    },
    {
      intitule: 'Master 1 Systèmes Complexes',
      etablissement: 'Université de Lorraine',
      periode: '2013 à 2014',
      description: 'Approche multidisciplinaire des systèmes complexes, algorithmique et modélisation.',
      afficher: false
    },
    {
      intitule: 'Licence Sciences pour l’Ingénieur',
      etablissement: 'Université de Lorraine',
      periode: '2010 à 2013',
      description: 'Formation de base en physique, mathématiques et technologie, avec orientation ingénierie.',
      afficher: false
    }
  ];

  competences = [
    { nom: 'HTML5, CSS3, JavaScript', niveau: 70, logo: 'html_js_css.png' },
    { nom: 'Angular', niveau: 70, logo: 'angular.png' },
    { nom: 'Git / GitHub', niveau: 70, logo: 'git.png' },
    { nom: 'Java', niveau: 70, logo: 'java.png' },
    { nom: 'Spring Boot', niveau: 70, logo: 'springboot.png' },
    { nom: 'PostgreSQL', niveau: 70, logo: 'postgreSQL.png' },
    { nom: 'Docker', niveau: 60, logo: 'docker.png' },
    { nom: 'Kubernetes', niveau: 60, logo: 'kubernetes.png' },
    { nom: 'Python', niveau: 60, logo: 'python.png' },
    { nom: 'AWS', niveau: 60, logo: 'aws.png' }
  ];
}
