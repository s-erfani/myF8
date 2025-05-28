import { Component } from '@angular/core';
import {AnswerBoxComponent} from "../../shared/answer-box/answer-box.component";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level12',
    imports: [
        AnswerBoxComponent
    ],
  templateUrl: './level12.component.html',
  styleUrl: './level12.component.css'
})
export class Level12Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {

    if (this.textFieldValue.trim() == "Hw4Y%11111gH&34GFV5HLs865g") {
      this.levelService.completeLevel(12);
      this.router.navigate(['/']);
    }
  }
}
