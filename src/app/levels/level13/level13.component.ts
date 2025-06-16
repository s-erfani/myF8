import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {LevelService} from '../../services/level.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-level13',
  imports: [
    RouterLink,
  ],
  templateUrl: './level13.component.html',
  styleUrl: './level13.component.css'
})
export class Level13Component {
  text = 'Click Me';
  letters = this.text.split('');
  colors = this.letters.map(() => 'black');
  isOneMin: boolean = false
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  colorPalette = ['red', 'green', 'blue', 'orange', 'purple', 'teal', 'pink', 'yellow'];
  currentIndex = 0;

  constructor(private router: Router, private readonly levelService: LevelService) {
    setTimeout(() => {
      this.isOneMin = true;
    }, 60000)
  }

  changeNextLetterColor() {
    if (this.currentIndex < this.letters.length) {
      const color = this.colorPalette[this.currentIndex % this.colorPalette.length];
      this.colors[this.currentIndex] = color;
      this.currentIndex++;
    } else if (this.currentIndex == this.letters.length) {
      this.levelService.completeLevel(13);
      this.router.navigate(['/']);    }
  }

  showHint() {
    if (this.isOneMin) {
      // alert('Click title 9 times')
      this._snackBar.open('Click title 9 times', "Ok", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }
}
