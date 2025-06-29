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
import {Level6Component} from '../level6/level6.component';
import {Level7Component} from '../level7/level7.component';
import {Level8Component} from '../level8/level8.component';
import {Level9Component} from '../level9/level9.component';
import {Level10Component} from '../level10/level10.component';
import {Level11Component} from '../level11/level11.component';
import {Level12Component} from '../level12/level12.component';
import {Level13Component} from '../level13/level13.component';
import {Level14Component} from '../level14/level14.component';
import {Level15Component} from '../level15/level15.component';
import {Level16Component} from '../level16/level16.component';
import {Level17Component} from '../level17/level17.component';
import {Level18Component} from '../level18/level18.component';
import {Level19Component} from '../level19/level19.component';
import {Level20Component} from '../level20/level20.component';
import {Level21Component} from '../level21/level21.component';
import {Level22Component} from '../level22/level22.component';
import {Level23Component} from '../level23/level23.component';
import {Level24Component} from '../level24/level24.component';
import {Level25Component} from '../level25/level25.component';
import {Level26Component} from '../level26/level26.component';
import {Level27Component} from '../level27/level27.component';
import {Level28Component} from '../level28/level28.component';
import {Level29Component} from '../level29/level29.component';
import {Level30Component} from '../level30/level30.component';

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
    6: Level6Component,
    7: Level7Component,
    8: Level8Component,
    9: Level9Component,
    10: Level10Component,
    11: Level11Component,
    12: Level12Component,
    13: Level13Component,
    14: Level14Component,
    15: Level15Component,
    16: Level16Component,
    17: Level17Component,
    18: Level18Component,
    19: Level19Component,
    20: Level20Component,
    21: Level21Component,
    22: Level22Component,
    23: Level23Component,
    24: Level24Component,
    25: Level25Component,
    26: Level26Component,
    27: Level27Component,
    28: Level28Component,
    29: Level29Component,
    30: Level30Component,
  };

  constructor(protected route: ActivatedRoute, private readonly levelService: LevelService) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.componentToRender = this.levelMap[id];
    this.level = this.levelService.getLevels().find((lvl: Level) => lvl.id === id)!;

  }
}
