import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="nav">
      <div class="nav-background">
        <div class="nav-container">
          <!-- Bouton burger -->
          <div class="burger" (click)="toggleMenu()">
            <div class="line" *ngFor="let line of burgerLines"></div>
          </div>

          <!-- Liens de navigation -->
          <div class="nav-links" [class.open]="menuOpen">
            <a href="#accueil" class="home-icon" (click)="handleLinkClick('accueil', $event)">
              <i class="fas fa-home"></i>
            </a>
            <a href="#monhistoire" (click)="handleLinkClick('monhistoire', $event)">Mon histoire</a>
            <a href="#parcours" (click)="handleLinkClick('parcours', $event)">Parcours</a>
            <a href="#projets" (click)="handleLinkClick('projets', $event)">Projets</a>
       <!--      <a href="#blog" (click)="handleLinkClick('blog', $event)">Blog</a>   -->
            <a href="#contact" (click)="handleLinkClick('contact', $event)">Contact</a>
            <a href="https://www.linkedin.com/in/aim%C3%A9e-carole-pigna-fullstackdev/" target="_blank" rel="noopener" class="linkedin-icon">
                <i class="fab fa-linkedin"></i></a>

          </div>
        </div>
      </div>
    </nav>
  `,
  styles: `
    .nav {
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-background {
      width: 100%;
      display: flex;
      justify-content: center;
      backdrop-filter: blur(10px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
      padding: 1rem 0;
    }

    .nav-container {
      max-width: 800px;
      width: 100%;
      padding: 0 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav a {
      color: #222121;
      text-decoration: none;
      font-weight: 300;
      font-size: 1rem;
      transition: color 0.3s ease;
    }

    .nav a:hover {
      color: #B2301F;
    }
  /* Styles pour l'icône LinkedIn */
  .nav-links .linkedin-icon i {
    font-size: 1.6rem; /* Taille de l'icône */
    color: #0077b5; /* Couleur bleue LinkedIn par défaut */
    transition: color 0.3s ease;
  }

  .nav-links .linkedin-icon i:hover {
    color: #B2301F; /* Couleur au survol */
  }

    /* Burger icon */
    .burger {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 25px;
      height: 18px;
      cursor: pointer;
    }

    .burger .line {
      width: 100%;
      height: 3px;
      background-color: #222121;
    }

    /* Responsive styles */
    @media screen and (max-width: 768px) {
      .burger {
        display: flex;
        z-index: 1002;
      }

      .nav-links {
        position: fixed;
        top: 0;
        left: 0;
        width: 250px;
        height: 100vh;
        background-color: #f0f0f0;
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem 1.5rem;
        gap: 1.5rem;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        z-index: 1001;
        padding-top: 5rem;
      }

      .nav-links.open {
        transform: translateX(0);
      }

      .nav a {
        font-size: 1.2rem;
        width: 100%;
      }

      .nav-links .linkedin-icon i {
        font-size: 1.6rem; /* Taille de l'icône */
        color: #0077b5; /* Couleur bleue LinkedIn par défaut */
        transition: color 0.3s ease;
      }


      .nav-container {
        justify-content: space-between;
      }
    }
  `
})
export class NavbarComponent {
  menuOpen = false;
  burgerLines = [1, 2, 3];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  handleLinkClick(id: string, event: Event) {
    event.preventDefault();
    this.scrollTo(id);
    this.menuOpen = false;
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
