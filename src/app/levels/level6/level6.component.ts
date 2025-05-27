import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-level6',
  imports: [
    AnswerBoxComponent,
    MatTooltip
  ],
  templateUrl: './level6.component.html',
  styleUrl: './level6.component.css'
})
export class Level6Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {

    if (this.textFieldValue.toLowerCase().trim() == "iloveu") {
      this.levelService.completeLevel(6);
      this.router.navigate(['/']);
    }
  }
}
