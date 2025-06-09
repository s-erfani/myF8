import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level27',
  imports: [
    NgClass
  ],
  templateUrl: './level27.component.html',
  styleUrl: './level27.component.css'
})
export class Level27Component implements OnInit {
  isMoonTime = false;
  isSunTime = false;
  currentState!: any;

  constructor(private router: Router, private readonly levelService: LevelService) {
    this.currentState = this.levelService.getLevels().find(l => l.id === 27)?.state;
  }

  ngOnInit(): void {
    this.checkTime();
    setInterval(() => this.checkTime(), 60 * 1000);
  }

  private checkTime(): void {
    const now = new Date();
    const hour = now.getHours()

    this.isMoonTime = hour === 20;
    this.isSunTime = hour === 12;
  }

  onSunSubmit(): void {
    let currentDesc = this.levelService.getLevels().find(l => l.id === 27)?.description;
    if (this.currentState == "notCompleted") {
      this.levelService.updateDescription(27, "sun")
      this.levelService.halfCompleteLevel(27);
      this.router.navigate(['/']);
    } else if (this.currentState == "halfCompleted" && currentDesc == "moon") {
      this.levelService.updateDescription(27, "sun moon")
      this.levelService.completeLevel(27);
      this.router.navigate(['/']);
    } else if ((this.currentState == "halfCompleted" && currentDesc == "sun") || this.currentState == "completed") {
      this.router.navigate(['/']);
    }
  }

  onMoonSubmit(): void {
    let currentDesc = this.levelService.getLevels().find(l => l.id === 27)?.description;
    if (this.currentState == "notCompleted") {
      this.levelService.updateDescription(27, "moon")
      this.levelService.halfCompleteLevel(27);
      this.router.navigate(['/']);
    } else if (this.currentState == "halfCompleted" && currentDesc == "sun") {
      this.levelService.updateDescription(27, "sun moon")
      this.levelService.completeLevel(27);
      this.router.navigate(['/']);
    } else if ((this.currentState == "halfCompleted" && currentDesc == "moon") || this.currentState == "completed") {
      this.router.navigate(['/']);
    }
  }

}
