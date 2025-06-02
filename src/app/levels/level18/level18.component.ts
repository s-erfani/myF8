import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LevelService} from '../../services/level.service';
import {AnswerBoxComponent} from '../../shared/answer-box/answer-box.component';

@Component({
  selector: 'app-level18',
  imports: [
    AnswerBoxComponent
  ],
  templateUrl: './level18.component.html',
  styleUrl: './level18.component.css'
})
export class Level18Component {
  textFieldValue: string = "";

  constructor(private router: Router, private readonly levelService: LevelService) {
  }

  calculateAge(): number {
    const birthDate = new Date('1997-02-14');
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    return age;
  }

  onSubmit(): void {
    console.log(this.calculateAge().toString())
    if (this.textFieldValue.toLowerCase().trim() == this.calculateAge().toString()) {
      this.levelService.completeLevel(18);
      this.router.navigate(['/']);
    }
  }

  copyToClipboard() {
    const text = "Your age is the answer!";
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied!');
    });
  }}
