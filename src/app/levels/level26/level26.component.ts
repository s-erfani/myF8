import { Component } from '@angular/core';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level26',
  imports: [
    AnswerBoxComponent
  ],
  templateUrl: './level26.component.html',
  styleUrl: './level26.component.css'
})
export class Level26Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "thank you" || this.textFieldValue.toLowerCase().trim() == "thankyou") {
      this.levelService.completeLevel(26);
      this.router.navigate(['/']);
    }
  }
}
