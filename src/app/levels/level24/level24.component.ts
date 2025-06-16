import {Component, inject, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {FormsModule} from '@angular/forms';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-level24',
  imports: [
    FormsModule,
    AnswerBoxComponent
  ],
  templateUrl: './level24.component.html',
  styleUrl: './level24.component.css'
})
export class Level24Component implements OnInit {
  city = '';
  temp: number | null = null;
  parisTemp!: number;
  berlinTemp!: number;
  sydneyTemp!: number;
  textFieldValue: string = "";
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private readonly weatherService: WeatherService,private router: Router, private readonly levelService: LevelService) {
  }

  ngOnInit(): void {
    this.weatherService.getTemperature('paris').subscribe(temp => {
      this.parisTemp = Number(temp.toFixed(0))
    })
    this.weatherService.getTemperature('berlin').subscribe(temp => {
      this.berlinTemp = Number(temp.toFixed(0))
    })
    this.weatherService.getTemperature('sydney').subscribe(temp => {
      this.sydneyTemp = Number(temp.toFixed(0))
    })
  }

  getTemp() {
    this.weatherService.getTemperature(this.city).subscribe({
      next: (t) => (this.temp = t),
      error: () =>{
        // alert('City not found')
        this._snackBar.open('City not found', "Ok", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      } ,
    });
  }

  openFullScreen(event: MouseEvent) {
    const img = event.target as HTMLImageElement;

    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if ((img as any).webkitRequestFullscreen) {
      (img as any).webkitRequestFullscreen(); // Safari
    } else if ((img as any).msRequestFullscreen) {
      (img as any).msRequestFullscreen(); // IE11
    }
  }
  onSubmit(): void {
    let answer = this.parisTemp +this.berlinTemp-this.sydneyTemp;
    if (this.textFieldValue.toLowerCase().trim() ==answer.toString()) {
      this.levelService.completeLevel(24);
      this.router.navigate(['/']);
    }
  }
}
