import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';

@Component({
  selector: 'app-level22',
  imports: [
    AnswerBoxComponent
  ],
  templateUrl: './level22.component.html',
  styleUrl: './level22.component.css'
})
export class Level22Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "test") {
      this.levelService.completeLevel(22);
      this.router.navigate(['/']);
    }
  }
}
