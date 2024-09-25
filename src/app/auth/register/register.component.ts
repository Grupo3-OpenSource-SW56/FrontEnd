import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      account_type: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Login Data:', this.registerForm.value);
    }
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
