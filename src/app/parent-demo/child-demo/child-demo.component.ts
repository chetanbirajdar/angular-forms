import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.scss']
})
export class ChildDemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("child constructor")
  }
  @Input() childProperty: string;
  @Output() childClick: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log("---------child ngOnInit")
    // event emit here
    // this.childClick.emit('Hello from Child component')
  }

  childMethod() {
    this.childClick.emit('---------Hello from Child component')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("---------child onchanges")
  }

  ngDoCheck(): void {
    console.log("---------child ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("---------child ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("---------child ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("---------child ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("---------child ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("---------child ngOnDestroy")
  }


}
