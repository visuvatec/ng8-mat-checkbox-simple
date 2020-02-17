import { MatCheckboxChange } from '@angular/material/checkbox';
import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  
  title = 'my-app';
  public name = "Visuvasakumar";
  public data: any = {};
  public count = 0;
  public isCheckedParent: boolean;
  // public isCheckedChild: boolean;

  fireEventParent(event: MatCheckboxChange) {
    // if(event.checked) {
    //   this.isCheckedParent = true;
    // } 
    this.isCheckedParent = event.checked ? true : false ;
  }

  ngOnInit() {
    this.isCheckedParent = false;
  }
  
  /** this function has no effect */
  ngOnChanges(changes: SimpleChanges) {
    console.log("changes ====>", JSON.stringify(changes, undefined, 0));
    this.count += 1;
  }

  myCount($event: EventEmitter){
    var test: any = $event;
    console.log("======", test.name);
    this.count += 1;
  }
}
