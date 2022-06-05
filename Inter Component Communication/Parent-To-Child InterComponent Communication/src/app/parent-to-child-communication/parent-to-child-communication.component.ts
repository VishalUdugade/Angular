import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-communication',
  templateUrl: './parent-to-child-communication.component.html',
  styleUrls: ['./parent-to-child-communication.component.css']
})
export class ParentToChildCommunicationComponent implements OnInit {

  // Add input decorator as it will receve the data from parent
  @Input() public parentData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
