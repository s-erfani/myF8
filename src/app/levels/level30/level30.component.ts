import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';

@Component({
  selector: 'app-level30',
  imports: [
    AnswerBoxComponent
  ],
  templateUrl: './level30.component.html',
  styleUrl: './level30.component.css'
})
export class Level30Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "5178802") {
      this.levelService.completeLevel(30);
      this.router.navigate(['/']);
    }
  }
}
