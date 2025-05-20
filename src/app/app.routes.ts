import {Routes} from '@angular/router';
import {LevelsGridComponent} from './levels-grid/levels-grid.component';
import {LevelLayoutComponent} from './levels/level-layout/level-layout.component';

export const routes: Routes = [
  {path: '', component: LevelsGridComponent},
  {path: 'level/:id', component: LevelLayoutComponent},
  {path: '**', component: LevelsGridComponent}
];
