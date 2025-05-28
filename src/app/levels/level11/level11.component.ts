import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';

@Component({
  selector: 'app-level11',
  imports: [
    CdkDrag,
    AnswerBoxComponent
  ],
  templateUrl: './level11.component.html',
  styleUrl: './level11.component.css'
})
export class Level11Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {

    if (this.textFieldValue.toLowerCase().trim() == "2310") {
      this.levelService.completeLevel(11);
      this.router.navigate(['/']);
    }
  }
}
