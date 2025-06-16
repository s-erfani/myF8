import {Component, inject, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Level} from '../../models/level';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  level = input<Level>();
  isOneMin: boolean = false;
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor() {
    setTimeout(() => {
      this.isOneMin = true;
    }, 60000)
  }

  showHint() {
    if (this.isOneMin) {
      // alert(this.level()?.hint)
      this._snackBar.open(this.level()?.hint ?? "", "Ok", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }
}
