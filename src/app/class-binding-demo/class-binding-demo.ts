import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding-demo',
  imports: [],
  templateUrl: './class-binding-demo.html',
  styleUrl: './class-binding-demo.css',
})
export class ClassBindingDemo {
  isactive=true
  canSave=true
  isUnchanged=false
  isSpecial=true
  classesObject = {
  'is-saveable': this.canSave,
  'is-modified': !this.isUnchanged,
  'is-special': this.isSpecial
};
classesString: string = 'class1 class2 class3';

  classesArray: string[] = ['class-a', 'class-b'];

}
