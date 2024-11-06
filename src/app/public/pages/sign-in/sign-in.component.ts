import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

const baseUrl = "https://fastlearners.azurewebsites.net"
@Component({
  selector: 'app-sign-in',

  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',

})
export class SignInComponent {

  loginForm: FormGroup;
  message: Error | string = ''
  private router = inject(Router)
  private http = inject(HttpClient)

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })

  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value
      this.http.post(baseUrl + '/api/v1/authentication/sign-in', {
        email,
        password
      }).subscribe({
        next: (res:any) => {
          const token = res.token
          if(token){
            localStorage.setItem('authToken',token)
          }
          this.router.navigate(['/'])
        },
        error: (err) => {
          this.message = err.error?.message || 'Login failed. Please try again.';
        }
      }
      )
    } else {
      this.message = 'Por favor, completa todos los campos correctamente.';
    }

  }
}
