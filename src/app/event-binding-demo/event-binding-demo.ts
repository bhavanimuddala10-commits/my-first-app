import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-demo',
  standalone:true,
  templateUrl: './event-binding-demo.html',
  styleUrl: './event-binding-demo.css',
})
export class EventBindingDemo {
  
  // Variables
  clickCount = 0;
  inputValue = '';
  hoverMessage = 'Hover over the box';
  keyPressValue = '';

  // Event methods
  onClick() {
    this.clickCount++;
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  onHover() {
    this.hoverMessage = 'Mouse is over!';
  }

  onLeave() {
    this.hoverMessage = 'Hover over the box';
  }

  onKeyPress(event: KeyboardEvent) {
    this.keyPressValue = `Last key pressed: ${event.key}`;
  }
  greet(name:string){
    console.log('Hello', name);
  }
}
