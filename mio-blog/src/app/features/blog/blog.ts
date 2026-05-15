import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface LogProgetto {
  id: number;
  key: string; // Useremo questa chiave per le traduzioni nel JSON
  tecnologie: string[];
  linkGithub?: string;
  dataAggiornamento: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit {
  logs: LogProgetto[] = [
    {
      id: 1,
      key: 'HOMES',
      tecnologie: ['Angular 17+', 'TypeScript', 'Reactive Logic'],
      linkGithub: 'https://github.com/IlariA-16/Progetto.Adiacent.git',
      dataAggiornamento: 'Maggio 2026'
    },
    {
      id: 2,
      key: 'PORTFOLIO',
      tecnologie: ['Angular Router', 'CSS Standalone', 'Bento Layout'],
      linkGithub: 'https://github.com/IlariA-16/mio-blog.git',
      dataAggiornamento: 'Maggio 2026'
    },
    {
      id: 3,
      key: 'CHECKLIST',
      tecnologie: ['JavaScript', 'DOM-Manipulation', 'LocalData'],
      linkGithub: 'https://github.com/IlariA-16/travel-packing-checklist.git',
      dataAggiornamento: 'Maggio 2026'
    },
    {
      id: 4,
      key: 'HPQUIZ',
      tecnologie: ['JavaScript', 'GameLogic', 'WebApps'],
      linkGithub: 'https://github.com/IlariA-16/harry-potter-quiz.git',
      dataAggiornamento: 'Maggio 2026'
    }
  ];

  constructor() {}
  ngOnInit(): void {}
}
