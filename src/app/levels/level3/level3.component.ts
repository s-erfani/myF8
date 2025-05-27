import {Component} from '@angular/core';
import {AnswerBoxComponent} from "../../shared/answer-box/answer-box.component";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level3',
  imports: [
    AnswerBoxComponent
  ],
  templateUrl: './level3.component.html',
  styleUrl: './level3.component.css'
})
export class Level3Component {
  textFieldValue: string = "";
  showHint: boolean = false;

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "help") {
      this.showHint = true;
      }
    if (this.textFieldValue.toLowerCase().trim() == "test") {
      this.levelService.completeLevel(3);
      this.router.navigate(['/']);
    }
  }
}
