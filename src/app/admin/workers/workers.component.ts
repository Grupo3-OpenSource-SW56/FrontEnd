import { Component } from '@angular/core';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.css',
})
export class WorkersComponent {
  workers = [
    { name: 'John Doe', position: 'Manager' },
    { name: 'Jane Smith', position: 'Developer' },
    { name: 'Alice Johnson', position: 'Designer' },
  ];
}
