import { Component } from '@angular/core';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level29',
  imports: [
    AnswerBoxComponent
  ],
  templateUrl: './level29.component.html',
  styleUrl: './level29.component.css'
})
export class Level29Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "pizza") {
      this.levelService.completeLevel(29);
      this.router.navigate(['/']);
    }
  }
}
