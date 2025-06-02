import {Component, OnInit} from '@angular/core';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';

@Component({
  selector: 'app-level17',
  imports: [
    AnswerBoxComponent
  ],
  templateUrl: './level17.component.html',
  styleUrl: './level17.component.css'
})
export class Level17Component implements OnInit {
  showAnswerBox: boolean = false;
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  ngOnInit(): void {
    const flashlight = document.getElementById('flashlight');
    const secret = document.getElementById('secret');
    const secretCode = document.getElementById('secret-code');


    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (flashlight) {
        flashlight.style.left = `${x}px`;
        flashlight.style.top = `${y}px`;
      }

      if (secret) {
        const rect = secret.getBoundingClientRect();
        const inside =
          x > rect.left &&
          x < rect.right &&
          y > rect.top &&
          y < rect.bottom;

        secret.style.opacity = inside ? '1' : '0';
      }
      if (secretCode) {
        const rect = secretCode.getBoundingClientRect();
        const inside =
          x > rect.left &&
          x < rect.right &&
          y > rect.top &&
          y < rect.bottom;

        secretCode.style.opacity = inside ? '1' : '0';
      }
    });
  }

  onSubmit(): void {
    if (this.textFieldValue.toLowerCase().trim() == "1404") {
      this.levelService.completeLevel(17);
      this.router.navigate(['/']);
    }
  }

}
