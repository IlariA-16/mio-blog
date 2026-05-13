import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  // Testi completi che verranno visualizzati nel terminale
  private fullLine1 = 'const developer = "Ilaria Taddei";';
  private fullLine2 = 'let skills = ["Angular", "React", "TypeScript", "CSS"];';
  private fullLine3 = 'let status = "Looking for junior frontend opportunities";';

  // Variabili collegate al template HTML
  typedLine1 = '';
  typedLine2 = '';
  typedLine3 = '';

  // Variabili di controllo dello stato di visibilità dei blocchi
  showLine2 = false;
  showLine3 = false;
  showOutput = false;
  currentActiveLine = 1;

  ngOnInit(): void {
    // Avvia la digitazione della prima riga
    this.typeText(this.fullLine1, 0, (text) => this.typedLine1 = text, () => {
      // Passa alla seconda riga
      this.showLine2 = true;
      this.currentActiveLine = 2;
      
      this.typeText(this.fullLine2, 0, (text) => this.typedLine2 = text, () => {
        // Passa alla terza riga
        this.showLine3 = true;
        this.currentActiveLine = 3;
        
        this.typeText(this.fullLine3, 0, (text) => this.typedLine3 = text, () => {
          // Mostra il log di successo finale
          this.showOutput = true;
          this.currentActiveLine = 4;
        });
      });
    });
  }

  /**
   * Gestisce l'effetto di digitazione una lettera alla volta
   */
  private typeText(fullText: string, index: number, updateFn: (t: string) => void, callback: () => void): void {
    if (index < fullText.length) {
      updateFn(fullText.substring(0, index + 1));
      // Velocità di scrittura: 40 millisecondi a lettera
      setTimeout(() => this.typeText(fullText, index + 1, updateFn, callback), 40);
    } else {
      // Pausa di 300 millisecondi alla fine di ogni riga prima della successiva
      setTimeout(() => callback(), 300);
    }
  }
}
