import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  arrPeople = [
    {name: 'Ti', age: 10},
    {name: 'Teo', age: 15},
    {name: 'Tun', age: 20}
  ];
  value = 0;
  changeValue(isAdd: boolean) {
    if (isAdd) {
      this.value = this.value + 1;
    } else {
      this.value = this.value - 1;
    }
  }
  constructor() { }

  ngOnInit() {
  }

  removePersonByName(name: string) {
    const index = this.arrPeople.findIndex(n=>n.name === name);
    this.arrPeople.splice(index,1);
  }
}
