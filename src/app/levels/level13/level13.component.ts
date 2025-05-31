import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level13',
  imports: [
    RouterLink,
  ],
  templateUrl: './level13.component.html',
  styleUrl: './level13.component.css'
})
export class Level13Component {
  text = 'Click Me';
  letters = this.text.split('');
  colors = this.letters.map(() => 'black');

  colorPalette = ['red', 'green', 'blue', 'orange', 'purple', 'teal', 'pink', 'yellow'];
  currentIndex = 0;

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  changeNextLetterColor() {
    if (this.currentIndex < this.letters.length) {
      const color = this.colorPalette[this.currentIndex % this.colorPalette.length];
      this.colors[this.currentIndex] = color;
      this.currentIndex++;
    } else if (this.currentIndex == this.letters.length) {
      this.levelService.completeLevel(13);
      this.router.navigate(['/']);    }
  }

  showHint() {
    alert('Click title 9 times')
  }
}
