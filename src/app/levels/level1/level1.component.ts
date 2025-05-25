import {Component} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';

@Component({
  selector: 'app-level1',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    Button,
    AnswerBoxComponent,
  ],
  templateUrl: './level1.component.html',
  styleUrl: './level1.component.css'
})
export class Level1Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onSubmit(): void {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    const normalizedHour12 = (currentHours % 12 || 12).toString();
    const paddedHour24 = currentHours.toString().padStart(2, '0');
    const paddedHour12 = normalizedHour12.padStart(2, '0');
    const paddedMinutes = currentMinutes.toString().padStart(2, '0');

    const validFormats = new Set([
      `${normalizedHour12}:${paddedMinutes}`,
      `${paddedHour12}:${paddedMinutes}`,
      `${paddedHour24}:${paddedMinutes}`,
    ]);
    if (validFormats.has(this.textFieldValue.trim())) {
      this.levelService.completeLevel(1);
      this.router.navigate(['/']);
    }
  }
}
