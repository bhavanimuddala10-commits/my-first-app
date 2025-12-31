import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../Services/service-demo';

@Component({
  selector: 'app-crud-http-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud-http-demo.html',
  styleUrls: ['./crud-http-demo.css']
})
export class CrudHttpDemo implements OnInit {

  constructor(private us:UserService){}

  ngOnInit(): void {
  this.us.loaduser().subscribe(data => {
    this.users = data;
  });
}
  users: any[] = [];  
}
