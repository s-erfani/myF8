import {Component, inject} from '@angular/core';
import emailjs from 'emailjs-com';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

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
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  sendEmail() {
    emailjs
      .send(
        'service_shsdke3',
        'template_3s1b4hf',
        {user_email: this.userEmail},
        'user_pgrV64b0NVgzJEa6WRKmh'
      )
      .then(() => {
        // alert('Email sent!');
        this._snackBar.open('Email sent!', "Ok", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      })
      .catch(() => {
        // alert('Failed to send email.');
        this._snackBar.open('Failed to send email.', "Ok", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
  }
}
