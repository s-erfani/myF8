import { Component } from '@angular/core';
import {AnswerBoxComponent} from "../../shared/answer-box/answer-box.component";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level14',
    imports: [
        AnswerBoxComponent
    ],
  templateUrl: './level14.component.html',
  styleUrl: './level14.component.css'
})
export class Level14Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "25") {
      this.levelService.completeLevel(14);
      this.router.navigate(['/']);
    }
  }
}
