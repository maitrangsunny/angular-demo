import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  birthday = new Date(2019, 11, 4);
  person = { name: 'Teo', age: 15};
  address = Promise.resolve('102 Phan Văn Hớn');

  constructor() { }

  ngOnInit() {
  }

}
