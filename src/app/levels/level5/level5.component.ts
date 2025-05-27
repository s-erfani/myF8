import { Component } from '@angular/core';
import {AnswerBoxComponent} from "../../shared/answer-box/answer-box.component";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level5',
    imports: [
        AnswerBoxComponent
    ],
  templateUrl: './level5.component.html',
  styleUrl: './level5.component.css'
})
export class Level5Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {

    if (this.textFieldValue.toLowerCase().trim() == "phantasma") {
      this.levelService.completeLevel(5);
      this.router.navigate(['/']);
    }
  }
}
