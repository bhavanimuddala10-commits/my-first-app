import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  getUser() {
    return {
      name: 'Bhavani',
      role: 'Angular Developer'
    };
  }
  
}
