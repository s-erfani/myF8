import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level21',
  imports: [
    NgClass
  ],
  templateUrl: './level21.component.html',
  styleUrl: './level21.component.css'
})
export class Level21Component {
  totalCircles = 10;
  correctOrder = [9, 5, 8, 1, 10, 3, 6, 7, 4, 2]; // Customize as needed
  currentStep = 0;
  clicked: number[] = [];

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  onClick(index: number) {
    const expected = this.correctOrder[this.currentStep];
    if (index === expected) {
      this.clicked.push(index);
      this.currentStep++;

      if (this.currentStep === this.correctOrder.length) {
        this.levelService.completeLevel(21);
        this.router.navigate(['/']);      }
    } else {
      this.resetLevel();
    }
  }

  isCorrect(index: number): boolean {
    return this.clicked.includes(index);
  }

  resetLevel() {
    this.currentStep = 0;
    this.clicked = [];
  }
}
