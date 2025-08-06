import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MonhistoireComponent } from './monhistoire/monhistoire.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { ProjetsComponent } from './projets/projets.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    NavbarComponent,
    HeaderComponent,
    MonhistoireComponent,
    ParcoursComponent,
    ProjetsComponent,
    BlogComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
