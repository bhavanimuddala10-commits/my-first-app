import { Component,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-interpolation-component',
  standalone:true,
  templateUrl: './interpolation-component.html',
  styleUrl: './interpolation-component.css',
})
export class InterpolationComponent implements OnDestroy {
  name = "Bhavani"
  count =5
  isLoogedIn= true
  getGreeting(){
    return "welcome to Angular 21"
  }

  ngOnDestroy(): void {
    console.log('ngon destroy called')
  }
}
