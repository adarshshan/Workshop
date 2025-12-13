import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<number | null>(null),
  });

  constructor() {}

  submit() {
    console.log(this.form.value);
    // You can add further logic here, e.g., send data to a service
  }
}
