import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  emails: string[] = [
    'gururajchoudri55@gmail.com',
    'rajuchoudri5@gmail.com'
  ];

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(): void {
    // console.log('Form submitted:', this.formData);
    // alert('Thank you for reaching out!');
    Swal.fire(
      'Thank you for reaching out!')
    // Reset form
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
