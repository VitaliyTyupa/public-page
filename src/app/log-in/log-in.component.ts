import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

interface LoginForm {
  userName: FormControl<string>;
  password: FormControl<string>;
}

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
  error: string | null = null;
  form: FormGroup<LoginForm> = new FormGroup({
    userName: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
    password: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
  });

  router = inject(Router);

  submit() {
    if (this.form.valid && this.form.touched) {
      this.error = '';
      this.router.navigate(['/gallery']);
      this.form.reset();
    } else {
      this.error = 'Username or password invalid';
    }
  }
}
