import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref-demo',
  imports: [],
  templateUrl: './template-ref-demo.html',
  styleUrl: './template-ref-demo.css',
})
export class TemplateRefDemo {
   save(value: string) {
    console.log('Saved value:', value);
  }
}
