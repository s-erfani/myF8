import {Injectable} from '@angular/core';
import {Level} from '../models/level';
import {SVG_PATHS} from '../shared/svg-paths';

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

  halfCompleteLevel(id: number): void {
    const level = this.levels.find(l => l.id === id);
    if (level) {
      level.state = 'halfCompleted';
      this.saveLevels();
    }
  }

  updateDescription(id: number, text : string): void {
    const level = this.levels.find(l => l.id === id);
    if (level) {
      level.description = text;
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
      {
        id: 4,
        title: "QR Code",
        hint: "Scan it!",
        difficulty: 1,
        order: 4,
        color: "#9a7b00",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.qr_code,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 5,
        title: "Ghost",
        hint: "Invisible text",
        difficulty: 2,
        order: 5,
        color: "#700000",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.ghost,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 6,
        title: "Inspector",
        hint: "inspect element with laptop",
        difficulty: 3,
        order: 6,
        color: "#001d7e",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.detective,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 7,
        title: "Do Nothing!",
        hint: "do nothing",
        difficulty: 3,
        order: 7,
        color: "#9c0086",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.hourglass,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 8,
        title: "Table",
        hint: "Search on Table",
        difficulty: 3,
        order: 8,
        color: "#0a8500",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.table,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 9,
        title: "Hashtag",
        hint: "Search hashtag in telegram chat",
        difficulty: 2,
        order: 9,
        color: "#1bf4ff",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.telegram,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 10,
        title: "Deep",
        hint: "Scroll down",
        difficulty: 1,
        order: 10,
        color: "#b36802",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.scroll,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 11,
        title: "Move It",
        hint: "Drag the card",
        difficulty: 3,
        order: 11,
        color: "#b36802",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.drag,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 12,
        title: "Easy",
        hint: "just write the answer",
        difficulty: 2,
        order: 12,
        color: "#da0101",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.write,
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 13,
        title: "Click Me",
        hint: "click the title",
        difficulty: 2,
        order: 13,
        color: "#d04dff",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.click
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 14,
        title: "Math",
        hint: "angle = number",
        difficulty: 2,
        order: 13,
        color: "#00ec0c",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.math
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 15,
        title: "First Anniversary",
        hint: "Imamzadeh Saleh",
        difficulty: 1,
        order: 15,
        color: "#ca99f3",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.anniversary
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 16,
        title: "Email",
        hint: "check your email",
        difficulty: 3,
        order: 16,
        color: "#0043ec",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.mail
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 17,
        title: "Flashlight",
        hint: "Find the hidden text",
        difficulty: 3,
        order: 17,
        color: "#456e3d",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.flashlight
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 18,
        title: "Clipboard",
        hint: "check your clipboard",
        difficulty: 1,
        order: 18,
        color: "#ff1aa5",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.clipboard
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 19,
        title: "Binary",
        hint: "It's just binary",
        difficulty: 2,
        order: 19,
        color: "#ff1aa5",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.binary
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 20,
        title: "Don't Blink",
        hint: "Be fast!",
        difficulty: 2,
        order: 20,
        color: "#d5cb00",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.flash
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 21,
        title: "Order",
        hint: "click circles in order",
        difficulty: 2,
        order: 21,
        color: "#ef7317",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.order
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 22,
        title: "Origami",
        hint: "open your origami",
        difficulty: 2,
        order: 22,
        color: "#71f33d",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.origami
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 23,
        title: "Feel It!",
        hint: "answer is in the lyrics",
        difficulty: 2,
        order: 23,
        color: "#f33d58",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.youtube
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 24,
        title: "Weather",
        hint: "check temp of the cities",
        difficulty: 3,
        order: 24,
        color: "#1890e1",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.weather
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 25,
        title: "Map",
        hint: "select the location of first 3 dates",
        difficulty: 4,
        order: 25,
        color: "#504c03",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.marker
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 26,
        title: "Morse",
        hint: "search morse code",
        difficulty: 2,
        order: 26,
        color: "#3a0350",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.heart
        },
        isHidden: false,
        state: 'notCompleted'
      },
      {
        id: 27,
        title: "My Sun, My Moon",
        hint: "check level on specific time",
        difficulty: 4,
        order: 27,
        color: "#3a0350",
        description: "",
        assets: {
          background: "",
          icon: this.svgPaths.heart
        },
        isHidden: false,
        state: 'notCompleted'
      },
    ];
  }
}
