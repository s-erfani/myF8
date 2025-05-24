import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Level} from '../../models/level';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  level  = input<Level>();

  showHint() {
    alert(this.level()?.hint)
  }
}
