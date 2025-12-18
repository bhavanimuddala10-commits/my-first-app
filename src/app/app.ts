import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet,RouterModule  } from '@angular/router';
import { MyLifecycyleHooks } from "./my-lifecycyle-hooks/my-lifecycyle-hooks";
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterModule ],
  // imports: [MyLifecycyleHooks],
  templateUrl:'./app.html'
})
export class App {
  wishdata ="hello"
  count=0
  increaseCount(){
    this.count++
  }
}
