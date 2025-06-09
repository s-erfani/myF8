import { Component } from '@angular/core';
import {AnswerBoxComponent} from "../../shared/answer-box/answer-box.component";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level23',
    imports: [
        AnswerBoxComponent
    ],
  templateUrl: './level23.component.html',
  styleUrl: './level23.component.css'
})
export class Level23Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() =='heart'|| this.textFieldValue.toLowerCase().trim() =='my heart' ||this.textFieldValue.toLowerCase().trim() =='your heart') {
      this.levelService.completeLevel(23);
      this.router.navigate(['/']);
    }
  }
}
