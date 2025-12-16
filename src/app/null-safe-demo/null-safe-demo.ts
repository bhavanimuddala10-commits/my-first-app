import { Component } from '@angular/core';

@Component({
  selector: 'app-null-safe-demo',
  standalone:true,
  templateUrl: './null-safe-demo.html',
  styleUrl: './null-safe-demo.css',
})
export class NullSafeDemo {

  user?:{
    name: string,
    age: number
  }
  loadUser(){
    this.user={
      name: "bhavani",
      age:23
    }
  }
  clearUser() {
    this.user = undefined;
  }
}
