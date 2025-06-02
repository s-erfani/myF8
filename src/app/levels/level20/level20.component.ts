import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level20',
  imports: [],
  templateUrl: './level20.component.html',
  styleUrl: './level20.component.css'
})
export class Level20Component implements OnInit, OnDestroy {
  boxes = new Array(9).fill(null);
  activeBox: number | null = null;

  private intervalId: any;
  private timeoutId: any;

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  ngOnInit() {
    this.startHighlighting();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }

  startHighlighting() {
    this.intervalId = setInterval(() => {
      this.activeBox = Math.floor(Math.random() * this.boxes.length);
      this.timeoutId = setTimeout(() => {
        this.activeBox = null;
      }, 400);
    }, 8000);
  }

  handleClick(index: number) {
    if (index === this.activeBox) {
      this.levelService.completeLevel(20);
      this.router.navigate(['/']);
      clearInterval(this.intervalId);
      clearTimeout(this.timeoutId);
      this.activeBox = null;
    }
  }
}
