import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgIf
  ],
  standalone: true
})
export class LogInComponent {
  @Output() submitEM = new EventEmitter();
  error: string | null = null;
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  submit() {
    if (this.form.valid && this.form.touched) {
      this.error = '';
      this.submitEM.emit(this.form.value);
      this.form.reset();
    } else {
      this.error = 'Username or password invalid';
    }
  }
}
