import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-answer-box',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    Button
  ],
  templateUrl: './answer-box.component.html',
  styleUrl: './answer-box.component.css'
})
export class AnswerBoxComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  @Output() onSubmit = new EventEmitter<void>();

  submit() {
    this.valueChange.emit(this.value);
    this.onSubmit.emit();
  }
}
