import { Component } from '@angular/core';
import {AnswerBoxComponent} from "../../shared/answer-box/answer-box.component";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level28',
    imports: [
        AnswerBoxComponent
    ],
  templateUrl: './level28.component.html',
  styleUrl: './level28.component.css'
})
export class Level28Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "be cute forever" || this.textFieldValue.toLowerCase().trim() == "becuteforever") {
      this.levelService.completeLevel(28);
      this.router.navigate(['/']);
    }
  }
}
