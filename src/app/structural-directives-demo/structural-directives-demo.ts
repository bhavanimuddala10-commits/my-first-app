import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-structural-demo',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './structural-directives-demo.html'
})
export class StructuralDirectivesDemo {

  isLoggedIn = false;

  items = ['Angular', 'TypeScript', 'CLI'];

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  
}
