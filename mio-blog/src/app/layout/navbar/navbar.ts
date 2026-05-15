import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    RouterModule, 
    TranslateModule 
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  // Iniettiamo il servizio nel costruttore
  constructor(private translate: TranslateService) {}

  // Funzione per cambiare lingua
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}