import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formLogin) {
    console.log(formLogin);
    throw new Error('Form is invalid');
  }

}
