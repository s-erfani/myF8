import {Component, HostListener, OnInit} from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {LevelService} from '../services/level.service';
import {Level} from '../models/level';
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
  rowHeight = "1:1";
  levels: Level[] = [];
  clickCount = 0;
  title = "4MyF8";

  constructor(private readonly levelService: LevelService) {
  }

  ngOnInit() {
    this.levels = this.levelService.getLevels();
    this.updateGridCols(window.innerWidth);
  }

  updateText() {
    this.clickCount++
    if (this.clickCount == 2) {
      this.title = "ForMyF8";
    } else if (this.clickCount == 3) {
      this.title = "ForMyFate";
    } else if (this.clickCount == 4) {
      this.title = "For MyFate";
    } else if (this.clickCount == 5) {
      this.title = "For My Fate";
    } else if (this.clickCount == 6) {
      this.title = "For My Fatemeh";
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridCols(event.target.innerWidth);
  }

  updateGridCols(width: number) {
    if (width <= 480) {
      this.gridCols = 3;
      this.rowHeight = "1:1"
    } else if (width <= 768) {
      this.rowHeight = "1:1"
      this.gridCols = 4;
    } else if (width <= 1024) {
      this.rowHeight = "1:1"
      this.gridCols = 5;
    } else {
      this.rowHeight = "2:1"
      this.gridCols = 5;
    }
  }

  getRgb(hex: string): string {
    if (!hex) return '0,0,0';
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
  }

}
