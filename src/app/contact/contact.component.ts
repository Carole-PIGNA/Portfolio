import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact">
      <h2>Me contacter</h2>
      <div class="container">
        <form class="formulaire">
          <label>
            Prénom :
            <input type="text" name="prenom" [(ngModel)]="form.prenom" />
          </label>
          <label>
            Email :
            <input type="email" name="email" [(ngModel)]="form.email" />
          </label>
          <label>
            Message :
            <textarea name="message" rows="5" [(ngModel)]="form.message"></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>

       </div>
    </section>
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
      color: #B2301F;  /* Rouge pour accent */
    }

    .container {
      display: grid;
      grid-template-columns: 2fr;
      gap: 2rem;
      margin-top: 2rem;
    }

    @media (max-width: 768px) {
      .container {
        grid-template-columns: 1fr;
      }
    }

    .formulaire {
      background-color: #fff;  /* Fond blanc */
      border-radius: 16px;
      padding: 2rem;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
      color: #222121;
      transition: transform 0.3s ease;
    }

    .formulaire:hover {
      transform: scale(1.02);
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
      background-color: #F4F0ED; /* Couleur claire */
      color: #222121;
      font-size: 1rem;
      margin-top: 0.4rem;
      border: 1px solid #ccc;  /* Bordure neutre */
      transition: all 0.3s ease;
    }

    input:focus,
    textarea:focus {
      outline: none;
      border-color: #B2301F;  /* Rouge pour focus */
      box-shadow: 0 0 0 2px rgba(178, 48, 31, 0.2);
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
    }

    button:hover {
      background: linear-gradient(to right, #a12718, #B2301F);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }


  `]
})
export class ContactComponent {
  form = {
    prenom: '',
    email: '',
    message: ''
  };
}
