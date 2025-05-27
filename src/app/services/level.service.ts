import { Injectable } from '@angular/core';
import { Level } from '../models/level';
import { SVG_PATHS } from '../shared/svg-paths';

const LEVELS_STORAGE_KEY = 'game_levels';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  svgPaths = SVG_PATHS;
  private levels: Level[] = [];

  constructor() {
    this.levels = this.getDefaultLevels();

    // this.loadLevels();
  }

  private loadLevels(): void {
    const stored = localStorage.getItem(LEVELS_STORAGE_KEY);
    if (stored) {
      this.levels = JSON.parse(stored);
    } else {
      this.levels = this.getDefaultLevels();
      localStorage.setItem(LEVELS_STORAGE_KEY, JSON.stringify(this.levels));
    }
  }

  private saveLevels(): void {
    localStorage.setItem(LEVELS_STORAGE_KEY, JSON.stringify(this.levels));
  }

  getLevels(): Level[] {
    return this.levels;
  }

  completeLevel(id: number): void {
    const level = this.levels.find(l => l.id === id);
    if (level) {
      level.state = 'completed';
      this.saveLevels();
    }
  }

  private getDefaultLevels(): Level[] {
    return [
      {
        id: 1,
        title: "Tick-Tock",
        hint: " What time is it?",
        difficulty: 1,
        order: 1,
        color: "#008177",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.clock,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 2,
        title: "Location",
        hint: "Satellite View",
        difficulty: 1,
        order: 2,
        color: "#5a0287",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.marker_question,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 3,
        title: "Pigpen",
        hint: "type help in the box",
        difficulty: 2,
        order: 3,
        color: "#04c1ab",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.lock,
        },
        isHidden: false,
        state: 'notCompleted'
      },
    ];
  }
}
