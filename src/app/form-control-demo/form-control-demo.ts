import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-form-control-demo',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './form-control-demo.html',
  styleUrl: './form-control-demo.css',
})
export class FormControlDemo {
  show(fc:any,p:any,gr:any){
    console.log(fc)
    console.log(p)
    console.log(gr)
  }


}
