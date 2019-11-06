import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() age: Number;
  @Output() myClick = new EventEmitter();
  @Output() removePerson = new EventEmitter<string>();
  childValue = 0;
  constructor() { }
  addForParent() {
    this.myClick.emit(true);
  }
  subForParent() {
    this.myClick.emit(false);
  }
  removePersonName() {
    this.removePerson.emit(this.name);
  }
  ngOnInit() {
  }

}
