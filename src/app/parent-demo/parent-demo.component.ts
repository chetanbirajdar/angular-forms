import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ChildDemoComponent } from './child-demo/child-demo.component';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.scss']
})
export class ParentDemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  welcomeToParent: string;

  @ViewChild('myDiv', { static: false }) myDiv: ElementRef;
  @ViewChild(ChildDemoComponent, { static: true }) childview: ChildDemoComponent;
  @ViewChildren(ChildDemoComponent) childList: QueryList<ChildDemoComponent>;

  constructor() {
    console.log("parent constructor")
  }
  someMethod(event: string) {
    this.welcomeToParent = event;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent onchanges")
  }
  ngOnInit(): void {
    console.log("parent ngOnInit");
    this.myDiv.nativeElement.style.color = 'green';
    this.childview.childProperty = 'hello';

    this.childList.forEach(x => {
      x.childProperty = 'hello';
    })
  }
  ngDoCheck(): void {
    console.log("parent ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("parent ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("parent ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("parent ngAfterViewInit");
    this.myDiv.nativeElement.style.color = 'blue';
  }
  ngAfterViewChecked(): void {
    console.log("parent ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("parent ngOnDestroy")
  }

}
