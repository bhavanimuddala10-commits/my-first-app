import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet,RouterModule,RouterLink  } from '@angular/router';
import { MyLifecycyleHooks } from "./my-lifecycyle-hooks/my-lifecycyle-hooks";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterModule,RouterLink ],
  // imports: [MyLifecycyleHooks],
  templateUrl:'./app.html'
})
export class App {
  constructor(private http:HttpClient){}
  wishdata ="hello"
  count=0
  increaseCount(){
    this.count++
  }
  getdata(){
    this.http.get('https://fakestoreapi.com/products')
    .subscribe((data)=>{
      console.log(data)
    })
  }
}
