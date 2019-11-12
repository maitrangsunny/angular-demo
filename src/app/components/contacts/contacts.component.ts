import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = [
    {id: 1, name: 'Ti', phonenumber: '03438444'},
    {id: 2, name: 'Teo', phonenumber: '03454888'},
    {id: 3, name: 'Tun', phonenumber: '03438999'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
