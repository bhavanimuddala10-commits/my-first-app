import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-demo',
  imports: [],
  templateUrl: './property-binding-demo.html',
  styleUrl: './property-binding-demo.css',
})
export class PropertyBindingDemo {
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled = false;
  isActive = true;
  fontSize = 28
}
