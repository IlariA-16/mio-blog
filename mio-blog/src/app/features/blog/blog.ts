import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LogProgetto {
  id: number;
  nomeProgetto: string;
  sfidaTecnica: string;
  soluzioneAdottata: string;
  stato: string;
  dataAggiornamento: string;
  tecnologie: string[];
  linkGithub?: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit {
  // Array di log tecnici dei tuoi progetti reali
  logs: LogProgetto[] = [
    {
      id: 1,
      nomeProgetto: 'Angular Homes App',
      sfidaTecnica: 'Gestione dei filtri di ricerca in tempo reale senza rallentare l\'interfaccia utente durante la digitazione.',
      soluzioneAdottata: 'Implementazione di funzioni di filtro basate su TypeScript ed eventi di input nativi di Angular, ottimizzando la stabilità della Single Page Application.',
      stato: 'Completato & Ottimizzato',
      dataAggiornamento: 'Maggio 2026',
      tecnologie: ['Angular 17+', 'TypeScript', 'Reactive Logic'],
      linkGithub: 'https://github.com/IlariA-16/Progetto.Adiacent.git'
    },
    {
      id: 2,
      nomeProgetto: 'Personal Portfolio (Questo Sito)',
      sfidaTecnica: 'Sincronizzare lo stile visivo tra rotte diverse eliminando gli stacchi netti di colore e i blocchi grafici ripetitivi.',
      soluzioneAdottata: 'Sviluppo di un layout a gradiente continuo sui toni del rosa e centralizzazione del CSS, combinando un design Bento Grid per le competenze e finestre software per i contenuti.',
      stato: 'In Fase di Rifinitura',
      dataAggiornamento: 'Maggio 2026',
      tecnologie: ['Angular Router', 'CSS Standalone', 'Bento Layout'],
      linkGithub: 'https://github.com/IlariA-16/mio-blog.git'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
