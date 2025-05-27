import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';

@Component({
  selector: 'app-level2',
  imports: [
    FormsModule,
    AnswerBoxComponent
  ],
  templateUrl: './level2.component.html',
  styleUrl: './level2.component.css'
})
export class Level2Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "heart") {
      this.levelService.completeLevel(2);
      this.router.navigate(['/']);
    }
  }
}
