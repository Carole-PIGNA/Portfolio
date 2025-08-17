import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="blog">
      <h2>Mon blog</h2>
      <div class="articles">
        <div class="article" *ngFor="let post of posts">
          <img loading="lazy" [src]="post.image" [alt]="post.titre" />
          <div class="texte">
            <h3>{{ post.titre }}</h3>
            <p>{{ post.resume }}</p>
            <a class="lire-plus" [href]="post.lien">Lire la suite</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .blog {
      padding: 2rem;
      text-align: center;
    }
   h2 {
            text-align: center;
              font-size: 2.4rem;
                  margin-bottom: 1rem;
                  font-weight: 600;
                  text-shadow: none;
                  transition: transform 0.2s ease-in-out;
          }

    .articles {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .article {
      background: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .article img {
      width: 100%;
      height: auto;
      max-width: 100%;
      display: block;
      object-fit: cover;
    }


    .article:hover img {
      transform: scale(1.03);
    }

    .texte {
      padding: 1rem;
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
export class BlogComponent {
  posts = [
    {
      titre: 'Changer de cap : ma reconversion',
      resume: 'Comment j’ai quitté mon ancien métier pour plonger dans le web.',
      image: 'blog1.png',
      lien: ''
    },
    {
      titre: 'Mes bonnes pratiques en coding',
      resume: 'Structurer ses projets, nommer ses fichiers, commenter intelligemment.',
      image: 'blog2.png',
      lien: ''
    },
    {
      titre: 'Ma vision sur l’IA aujourd’hui',
      resume: 'Entre outils créatifs et automatisation : mon avis sur les usages de l’IA.',
      image: 'blog3.png',
      lien: ''
    }
  ];
}
