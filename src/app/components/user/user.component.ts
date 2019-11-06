import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  yourname = '';
  youremail = '';
  isHightLight = false;
  eventStyle = { color: 'red', fontSize: '30px' };
  oddStyle = { color: 'black', fontSize: '15px' };
  currentClass = {
    circle: !this.isHightLight,
    square: this.isHightLight
  };

  constructor() { }

  ngOnInit() {
  }
  showEvent(e){
    this.yourname = e.target.value;
  }

}
