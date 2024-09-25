import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private fb: FormBuilder, private router: Router) {

  }

  goToRegister() {
    this.router.navigate(['/admin/dashboard']);
  }
}


