import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './contatti.html', 
  styleUrl: './contatti.css',    
})
export class Contatti implements OnInit {
  contactForm!: FormGroup;
  isSubmitted = false;
  formSuccess = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Specifica i campi del form e le regole di validazione in tempo reale
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      messaggio: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Azione che scatta al click del pulsante Invia
  onSubmit(): void {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
      const { nome, email, messaggio } = this.contactForm.value;
      
      const tuaEmail = 'ilariataddei@hotmail.com'; 
      
      // Prepara l'oggetto e il corpo del testo formattati per l'URL
      const oggetto = encodeURIComponent(`Nuovo contatto dal sito da parte di ${nome}`);
      const corpoEmail = encodeURIComponent(
        `Dettagli del contatto:\n\n` +
        `👤 Nome: ${nome}\n` +
        `📧 Email: ${email}\n\n` +
        `💬 Messaggio:\n${messaggio}`
      );
      
      // Avvia l'applicazione di posta predefinita dell'utente
      window.location.href = `mailto:${tuaEmail}?subject=${oggetto}&body=${corpoEmail}`;
      
      this.formSuccess = true;
      this.contactForm.reset();
      this.isSubmitted = false;

      // Nasconde il banner verde di successo dopo 5 secondi
      setTimeout(() => {
        this.formSuccess = false;
      }, 5000);
    }
  }
}
