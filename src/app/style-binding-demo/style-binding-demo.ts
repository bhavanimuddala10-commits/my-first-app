import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding-demo',
  imports: [],
  templateUrl: './style-binding-demo.html',
  styleUrl: './style-binding-demo.css',
})
export class StyleBindingDemo {
  isError: boolean = true;
  
  currentStyles = {
  'font-style': 'italic',
  'font-weight': 'bold',
  'font-size': '24px'
};



}
