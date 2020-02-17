import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.scss']
})
export class MyChildComponent implements OnInit {

  @Input('parentData') public name;
  @Input('isCheckedParent') public isCheckedChild: boolean;
  
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  fireEvent(event: MatCheckboxChange) {
    const message = {
      name: "",
      checkedState: false
    };

    message.name = event.source.id;
    if(event.checked) {
      message.checkedState = true;
    } else {
      message.checkedState = false;
    }
    this.childEvent.emit(message);
    
    
    if(event.source)
      console.log("event.source: ", JSON.stringify(event.source.id, undefined, 2));
    
  }

  ngOnInit() {
  }

}
