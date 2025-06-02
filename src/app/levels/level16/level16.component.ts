import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-level16',
  imports: [
    MatFormFieldModule,
    MatInput,
    MatButton,
    FormsModule,
  ],
  templateUrl: './level16.component.html',
  styleUrl: './level16.component.css'
})
export class Level16Component {
  userEmail: string = '';

  sendEmail() {
    emailjs
      .send(
        'service_shsdke3',
        'template_3s1b4hf',
        {user_email: this.userEmail},
        'user_pgrV64b0NVgzJEa6WRKmh'
      )
      .then(() => {
        alert('Email sent!');
      })
      .catch(() => {
        alert('Failed to send email.');
      });
  }
}
