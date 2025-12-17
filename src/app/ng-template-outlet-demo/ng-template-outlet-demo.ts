import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-ng-template-outlet-demo',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './ng-template-outlet-demo.html'
})
export class NgTemplateOutletDemo {

  user1 = { name: 'Bhavani', role: 'Admin' };
  user2 = { name: 'Divya', role: 'User' };
}
