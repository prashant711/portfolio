import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class ABoutComponent {
  ngOnInit() {
    AOS.init({
      duration: 0.1,  // Animation duration
      offset: 200,     // Scroll offset for triggering the animation
      once: true,      // Ensure animation runs once when it enters the viewport
    });
  }
}
