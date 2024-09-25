import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

  constructor(private fb: FormBuilder, private router: Router) {

  }

  goToRegister() {
    this.router.navigate(['/admin/summary']);
  }
}
