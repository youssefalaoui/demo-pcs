import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  message = 'Hello world (default parrent message)';

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event;
  }

}
