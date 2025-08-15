import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from './contact.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <section class="contact">
      <h2>Me contacter</h2>
      <div class="container">
        <form class="formulaire" #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
          <label>
            Prénom :
            <input
              type="text"
              name="prenom"
              [(ngModel)]="form.prenom"
              required
              #prenom="ngModel"
            />
          </label>

          <label>
            Email :
            <input
              type="email"
              name="email"
              [(ngModel)]="form.email"
              required
              email
              #email="ngModel"
            />
          </label>

          <label>
            Message :
            <textarea
              name="message"
              rows="5"
              [(ngModel)]="form.message"
              required
              #message="ngModel"
            ></textarea>
          </label>

          <!-- Messages d'erreur sous le textarea -->
          <div class="erreurs" *ngIf="contactForm.submitted && contactForm.invalid">
            <p *ngIf="prenom.invalid">Le prénom est requis.</p>
            <p *ngIf="email.invalid">
              {{ email.errors?.['required'] ? 'L’email est requis.' : 'L’email est invalide.' }}
            </p>
            <p *ngIf="message.invalid">Le message ne peut pas être vide.</p>
          </div>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>

    <!-- Modal de confirmation -->
    <div
      class="modal-backdrop"
      *ngIf="showModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
    >
      <div class="modal" tabindex="0">
        <h3 id="modal-title">Message envoyé avec succès</h3>
        <p id="modal-desc">
          Merci pour votre prise de contact. Je reviendrai vers vous dans les plus brefs délais.
        </p>
        <button (click)="closeModal()">Quitter</button>
      </div>
    </div>
  `,
  styles: [`
    .contact {
      padding: 2rem;
      text-align: center;
      background-color: #F4F0ED;
      border-radius: 16px;
      margin: 4rem 60px;
      color: #222121;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .contact h2 {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      font-weight: 600;
      color: #B2301F;
    }

    .container {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
    }

    .formulaire {
      background-color: #fff;
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
      color: #222121;
      max-width: 600px;
      width: 100%;
      transition: transform 0.3s ease;
    }

    @media (hover: hover) {
      .formulaire:hover {
        transform: scale(1.02);
      }
    }

    .formulaire label {
      display: block;
      margin-bottom: 1rem;
      font-weight: 500;
      color: #222121;
      text-align: left;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.8rem;
      border-radius: 12px;
      background-color: #F4F0ED;
      color: #222121;
      font-size: 1rem;
      margin-top: 0.4rem;
      border: 1px solid #ccc;
      transition: all 0.3s ease;
      font-family: inherit;
      resize: vertical;
    }

    input:focus,
    textarea:focus {
      outline: none;
      border-color: #B2301F;
      box-shadow: 0 0 0 2px rgba(178, 48, 31, 0.2);
    }

    .erreurs {
      color: #b2301f;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      text-align: left;
    }

    button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(to right, #B2301F, #a12718);
      color: #F4F0ED;
      font-weight: 600;
      border-radius: 20px;
      border: none;
      transition: all 0.3s ease;
      cursor: pointer;
      margin-top: 1rem;
      font-family: inherit;
    }

    button:hover,
    button:focus {
      background: linear-gradient(to right, #a12718, #B2301F);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
      outline: none;
    }

    .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      padding: 1rem;
    }

    .modal {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 6px 20px rgba(0,0,0,0.2);
      max-width: 400px;
      width: 100%;
      outline: none;
    }

    .modal h3 {
      margin-bottom: 1rem;
      color: #B2301F;
    }

    .modal button {
      margin-top: 1.5rem;
    }

    @media (max-width: 768px) {
      .contact {
        margin: 2rem 1rem;
      }

      .formulaire {
        max-width: 100%;
      }
    }
  `]
})
export class ContactComponent {
  form = {
    prenom: '',
    email: '',
    message: ''
  };

  showModal = false;

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.contactService.sendMessage(this.form).subscribe({
      next: () => {
        this.showModal = true;
        this.form = { prenom: '', email: '', message: '' };
        form.resetForm();
      },
      error: err => {
        console.error('Erreur lors de l’envoi :', err);
        alert('Une erreur est survenue.');
      }
    });
  }

  closeModal() {
    this.showModal = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
