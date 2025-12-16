import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-prop-demo',
  standalone: true,
  templateUrl: './attribute-vs-property-demo.html'
})
export class AttributeVsPropertyDemo {

  isDisabled = true;
  colCount = 2;
  label = 'Submit Button';

  toggle() {
    this.isDisabled = !this.isDisabled;
  }
}

