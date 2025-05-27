import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LevelService} from './services/level.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private levelService: LevelService) {
    // levels are initialized automatically in service
    console.log('Levels:', this.levelService.getLevels());
  }

}
