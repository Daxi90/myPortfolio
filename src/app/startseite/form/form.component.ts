import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {

  isSending = false;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    agreedToPrivacyPolicy: false, // Initialwert auf false setzen
  };

  mailTest = false;

  post = {
    endPoint: 'https://david-hollerwoeger.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.isSending = true; // Vor dem Senden auf true setzen
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.isSending = false; // Nach Abschluss auf false setzen
          },
          error: (error) => {
            console.error(error);
            this.isSending = false; // Auch bei Fehler auf false setzen
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.isSending = false; // Zurücksetzen, falls mailTest aktiv ist
      ngForm.resetForm();
    }
  }
}
