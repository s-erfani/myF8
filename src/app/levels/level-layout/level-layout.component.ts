import {Component, OnInit, Type} from '@angular/core';
import {HeaderComponent} from '../../shared/header/header.component';
import {ActivatedRoute} from '@angular/router';
import {Level1Component} from '../level1/level1.component';
import {Level2Component} from '../level2/level2.component';
import {NgComponentOutlet} from '@angular/common';
import {Level} from '../../models/level';
import {LevelService} from '../../services/level.service';
import {Level3Component} from '../level3/level3.component';
import {Level4Component} from '../level4/level4.component';
import {Level5Component} from '../level5/level5.component';

@Component({
  selector: 'app-level-layout',
  imports: [
    HeaderComponent,
    NgComponentOutlet
  ],
  templateUrl: './level-layout.component.html',
  styleUrl: './level-layout.component.css'
})
export class LevelLayoutComponent implements OnInit {
  componentToRender!: Type<any>;
  level!: Level;

  private levelMap: Record<number, Type<any>> = {
    1: Level1Component,
    2: Level2Component,
    3: Level3Component,
    4: Level4Component,
    5: Level5Component,
  };

  constructor(protected route: ActivatedRoute, private readonly levelService: LevelService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.componentToRender = this.levelMap[id];
    this.level = this.levelService.getLevels().find((lvl: Level) => lvl.id === id)!;

  }
}
