import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-communication',
  templateUrl: './child-to-parent-communication.component.html',
  styleUrls: ['./child-to-parent-communication.component.css']
})
export class ChildToParentCommunicationComponent implements OnInit {

   //create object of event class
   @Output() public MyEvent = new EventEmitter();

   //Action Listener for button
   public SendEvent()
   {
     //send the event to parent
     this.MyEvent.emit('Hello form child');
   }
   
  constructor() { }

  ngOnInit(): void {
  }

}
