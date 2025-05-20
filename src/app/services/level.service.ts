import {Injectable} from '@angular/core';
import {Level} from '../models/level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levels: Level[] = [
    {
      id: 1,
      title: "time",
      hint: " What time is it?",
      difficulty: 1,
      order: 1,
      description: "",
      assets: {
        background: "",
        icon: "",
      },
      isHidden: false,
      state: 'notCompleted'
    },
    {
      id: 2,
      title: "test",
      hint: " What time is it?",
      difficulty: 1,
      order: 1,
      description: "",
      assets: {
        background: "",
        icon: "",
      },
      isHidden: false,
      state: 'notCompleted'
    },
  ]

  constructor() {
  }

  getLevels() : Level[] {
    return this.levels;
  }
}
