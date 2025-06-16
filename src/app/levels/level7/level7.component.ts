import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {LevelService} from '../../services/level.service';
import {Router} from '@angular/router';
import {NgStyle} from '@angular/common';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-level7',
  imports: [
    NgStyle
  ],
  templateUrl: './level7.component.html',
  styleUrl: './level7.component.css'
})
export class Level7Component implements OnInit, OnDestroy {
  private timeoutId: any;
  private scaleInterval: any;
  scale: number = 1;
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  ngOnInit(): void {
    this.startTimer();
    this.startScaleInterval();
  }

  ngOnDestroy(): void {
    if (this.scaleInterval) {
      clearInterval(this.scaleInterval);
    }
    if(this.timeoutId){
      clearTimeout(this.timeoutId);
    }
  }

  startScaleInterval(): void {
    this.scaleInterval = setInterval(() => {
      this.scale += 0.2;
    }, 5000);
  }

  startTimer(): void {
    this.timeoutId = setTimeout(() => {
      alert("congratulations!");
      this.levelService.completeLevel(7);
      this.router.navigate(['/']);
    }, 60000);
  }

  onButtonClick(): void {
    clearTimeout(this.timeoutId);
    clearInterval(this.scaleInterval)
    this.scale = 1;
    this._snackBar.open(("You did Something!"), "Ok", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
    // alert("You did Something!");
    this.startScaleInterval();
    this.startTimer();
  }
}
