import {Component, inject} from '@angular/core';
import {AnswerBoxComponent} from "../../shared/answer-box/answer-box.component";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-level4',
    imports: [
        AnswerBoxComponent
    ],
  templateUrl: './level4.component.html',
  styleUrl: './level4.component.css'
})
export class Level4Component {
  textFieldValue: string = "";
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "fateme") {
      // alert("Where is the 'H'??");
      this._snackBar.open("Where is the 'H'??", "Ok", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    if (this.textFieldValue.toLowerCase().trim() == "fatemeh" ||this.textFieldValue.toLowerCase().trim() == "فاطمه") {
      this.levelService.completeLevel(4);
      this.router.navigate(['/']);
    }
  }
}
