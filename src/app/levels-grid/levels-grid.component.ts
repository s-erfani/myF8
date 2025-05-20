import {Component, HostListener, OnInit} from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {LevelService} from '../services/level.service';
import { Level } from '../models/level';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-levels-grid',
  imports: [
    MatGridList,
    MatGridTile,
    RouterLink,

  ],
  templateUrl: './levels-grid.component.html',
  styleUrl: './levels-grid.component.css'
})
export class LevelsGridComponent implements OnInit {
  gridCols = 4;
  levels: Level[]= [];

  constructor(private readonly levelService: LevelService) {
  }

  ngOnInit() {
    this.levels = this.levelService.getLevels();
    this.updateGridCols(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridCols(event.target.innerWidth);
  }

  updateGridCols(width: number) {
    if (width <= 480) {
      this.gridCols = 2;
    } else if (width <= 768) {
      this.gridCols = 3;
    } else if (width <= 1024) {
      this.gridCols = 4;
    } else {
      this.gridCols = 5;
    }
  }
}
