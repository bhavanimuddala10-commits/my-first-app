import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSample]',
})
export class Sample {

  constructor(private element:ElementRef) { 
    console.log(element)
  }

}
