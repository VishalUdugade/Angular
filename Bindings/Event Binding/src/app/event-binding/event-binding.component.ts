import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public str = "";

  //It is consider as event handler.
  public EventBinding()
  {
    console.log("Button Pressed");
  }

  public EventBindingStr()
  {
    this.str = "Button Clicked";
  }

  public EventBindingInfo(value:any)
  {
    console.log(value);
  }

}
