import { Component ,OnChanges, SimpleChanges,Input, OnInit,DoCheck,AfterViewInit,AfterViewChecked, AfterContentInit,AfterContentChecked, OnDestroy} from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-my-lifecycyle-hooks',
  templateUrl: './my-lifecycyle-hooks.html',
  styleUrl: './my-lifecycyle-hooks.css',
})
export class MyLifecycyleHooks implements OnChanges, OnInit,DoCheck,AfterViewInit,AfterViewChecked, AfterContentInit,AfterContentChecked, OnDestroy{
  // @Input() data:any
  @Input() count:any
  constructor(){
    console.log("constructor called")
  }
  ngOnInit(): void {
    console.log("OnInit called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges called")
    console.log("the previousvalue is ",changes['count']['previousValue'])
  }

  ngDoCheck(): void {
    console.log('DoCheck called')
  }

  ngAfterViewInit(): void {
    console.log("ng after view init called")
  }
  ngAfterViewChecked(): void {
    console.log("ng after view checked called")
  }

  ngAfterContentInit(): void {
    console.log("ng after content init is called")
  }

  ngAfterContentChecked(): void {
    console.log('ng after content checked is called')
  }

  ngOnDestroy(): void {
    console.log("ng on destroy is called")
  }
}
