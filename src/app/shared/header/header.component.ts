import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Level} from '../../models/level';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
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
