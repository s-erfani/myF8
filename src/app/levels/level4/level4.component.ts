import { Component } from '@angular/core';
import {AnswerBoxComponent} from "../../shared/answer-box/answer-box.component";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level4',
    imports: [
        AnswerBoxComponent
    ],
  templateUrl: './level4.component.html',
  styleUrl: './level4.component.css'
})
export class Level4Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {

    if (this.textFieldValue.toLowerCase().trim() == "fatemeh" ||this.textFieldValue.toLowerCase().trim() == "فاطمه") {
      this.levelService.completeLevel(4);
      this.router.navigate(['/']);
    }
  }
}
