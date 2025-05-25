import {Injectable} from '@angular/core';
import {Level} from '../models/level';
import {SVG_PATHS} from '../shared/svg-paths';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  svgPaths = SVG_PATHS;
  levels: Level[] = [
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
  ]

  constructor() {
  }

  getLevels(): Level[] {
    return this.levels;
  }

  completeLevel(id: number): void {
    const level = this.levels.find(l => l.id === id);
    if (level) {
      level.state = 'completed';
    }
  }
}
