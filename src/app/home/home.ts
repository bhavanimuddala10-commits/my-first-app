import { Component, OnDestroy ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css',],
})


export class Home implements OnDestroy,OnInit {
  ngOnInit() {
  console.log('Home init');
}
  username="Bhavani"
  count=0
  increaseCount(){
    this.count++
  }
  user?: { name: string; role: string };
  loaduser(){
    this.user={
    name: "bhavani",
    role:"python develoeper"
  }
  }
  items = ['Angular', 'TypeScript', 'CLI'];
  today = new Date();
  name = 'Ada Lovelace';
  ratio = 0.756;

  userb = {
  name: 'bhavani muddala',
  salary: 75000,
  joined: new Date()
};
ngOnDestroy(): void {
    console.log('ngon destroy called')
  }
}
