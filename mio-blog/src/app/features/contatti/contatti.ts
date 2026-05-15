import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core'; // <--- Aggiunto TranslateService

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule], 
  templateUrl: './contatti.html', 
  styleUrl: './contatti.css',    
})
export class Contatti implements OnInit {
  contactForm!: FormGroup;
  isSubmitted = false;
  formSuccess = false;

  constructor(
    private fb: FormBuilder,
    private translate: TranslateService // <--- Iniettato qui
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      messaggio: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
      const { nome, email, messaggio } = this.contactForm.value;
      const tuaEmail = 'ilariataddei@hotmail.com'; 
      
      // Recuperiamo le traduzioni per l'email (facoltativo, ma professionale)
      const mailSubjectPrefix = this.translate.instant('CONTACTS.MAIL_SUBJECT');
      const mailDetails = this.translate.instant('CONTACTS.MAIL_DETAILS');

      const oggetto = encodeURIComponent(`${mailSubjectPrefix} ${nome}`);
      const corpoEmail = encodeURIComponent(
        `${mailDetails}:\n\n` +
        `👤 Name: ${nome}\n` +
        `📧 Email: ${email}\n\n` +
        `💬 Message:\n${messaggio}`
      );
      
      window.location.href = `mailto:${tuaEmail}?subject=${oggetto}&body=${corpoEmail}`;
      
      this.formSuccess = true;
      this.contactForm.reset();
      this.isSubmitted = false;

      setTimeout(() => {
        this.formSuccess = false;
      }, 5000);
    }
  }
}