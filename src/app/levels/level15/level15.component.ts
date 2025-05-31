import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule} from '@angular/forms';
import {LevelService} from '../../services/level.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-level15',
  imports: [
    MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule
  ],
  templateUrl: './level15.component.html',
  styleUrl: './level15.component.css'
})
export class Level15Component {
  selectedDate: Date | null = null;

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onDateChange(event: any): void {
    const pickedDate = new Date(event.value);
    const targetDate = new Date('2026-03-12');

    if (
      pickedDate.getFullYear() === targetDate.getFullYear() &&
      pickedDate.getMonth() === targetDate.getMonth() &&
      pickedDate.getDate() === targetDate.getDate()
    ) {
      this.levelService.completeLevel(15);
      this.router.navigate(['/']);    }
    }

  highlightSpecialDate = (d: Date): string => {
    const target = new Date('2026-03-12');
    if (
      d.getDate() === target.getDate() &&
      d.getMonth() === target.getMonth() &&
      d.getFullYear() === target.getFullYear()
    ) {
      return 'custom-highlight'; // CSS class name
    }
    return '';
  };
}
