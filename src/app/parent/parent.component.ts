import { ChildComponent } from './../child/child.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent, {static: false}) child;

  constructor() { }

  message = 'Hello world (default parrent message)';

  ngAfterViewInit() {
    this.message = this.child.message;
  }

  receiveMessage($event) {
    this.message = $event;
  }

}
