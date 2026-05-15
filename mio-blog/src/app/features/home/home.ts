import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslateModule,CommonModule], // Aggiungi CommonModule se usi ngIf o ngFor
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  // Testi che verranno popolati dalle traduzioni
  private fullLine1 = '';
  private fullLine2 = 'let skills = ["Angular", "React", "TypeScript", "CSS"];'; // Questa può restare così (è codice)
  private fullLine3 = '';

  typedLine1 = '';
  typedLine2 = '';
  typedLine3 = '';

  showLine2 = false;
  showLine3 = false;
  showOutput = false;
  currentActiveLine = 1;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Recuperiamo le traduzioni prima di iniziare l'effetto typing
    // Usiamo get() per ottenere i testi attuali
    this.fullLine1 = `const developer = "Ilaria Taddei";`; // Invariato, è un nome
    this.fullLine3 = `let status = "${this.translate.instant('HOME.TERMINAL_STATUS')}";`;

    this.startTypingAnimation();
  }

  private startTypingAnimation() {
    this.typeText(this.fullLine1, 0, (text) => this.typedLine1 = text, () => {
      this.showLine2 = true;
      this.currentActiveLine = 2;
      this.typeText(this.fullLine2, 0, (text) => this.typedLine2 = text, () => {
        this.showLine3 = true;
        this.currentActiveLine = 3;
        this.typeText(this.fullLine3, 0, (text) => this.typedLine3 = text, () => {
          this.showOutput = true;
          this.currentActiveLine = 4;
        });
      });
    });
  }

  private typeText(fullText: string, index: number, updateFn: (t: string) => void, callback: () => void): void {
    if (index < fullText.length) {
      updateFn(fullText.substring(0, index + 1));
      setTimeout(() => this.typeText(fullText, index + 1, updateFn, callback), 40);
    } else {
      setTimeout(() => callback(), 300);
    }
  }
}