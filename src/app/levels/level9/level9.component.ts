import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';

@Component({
  selector: 'app-level9',
  imports: [
    AnswerBoxComponent
  ],
  templateUrl: './level9.component.html',
  styleUrl: './level9.component.css'
})
export class Level9Component{
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "asheghetam") {
      this.levelService.completeLevel(9);
      this.router.navigate(['/']);
    }
  }
}
