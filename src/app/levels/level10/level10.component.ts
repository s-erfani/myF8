import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level10',
  imports: [
  ],
  templateUrl: './level10.component.html',
  styleUrl: './level10.component.css'
})
export class Level10Component implements OnDestroy {
  isClicked = false;
  private timeoutId: any;

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }

  onSubmit(): void {
    this.isClicked = !this.isClicked;
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      if (this.isClicked) {
        this.levelService.completeLevel(10);
        this.router.navigate(['/']);
      }
    }, 3000)
  }
}
