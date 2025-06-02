import { Component } from '@angular/core';
import {AnswerBoxComponent} from "../../shared/answer-box/answer-box.component";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level19',
    imports: [
        AnswerBoxComponent
    ],
  templateUrl: './level19.component.html',
  styleUrl: './level19.component.css'
})
export class Level19Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "fatemeh") {
      this.levelService.completeLevel(19);
      this.router.navigate(['/']);
    }
  }
}
