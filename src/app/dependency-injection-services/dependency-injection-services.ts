import { Component } from '@angular/core';
import {User} from "../user"

@Component({
  selector: 'app-dependency-injection-services',
  imports: [],
  templateUrl: './dependency-injection-services.html',
  styleUrl: './dependency-injection-services.css',
})
export class DependencyInjectionServices {
  user: any;

  constructor(private userService:User){
    this.user = this.userService.getUser();

  }

}
