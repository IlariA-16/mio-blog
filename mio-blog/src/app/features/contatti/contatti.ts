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
      console.log('Dati ricevuti dal modulo contatti:', this.contactForm.value);
      
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
