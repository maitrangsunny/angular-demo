import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(formLogin) {
    this.loginService.sendPost(formLogin.value).subscribe(data=>{
      console.log(data);
       return data;
    });
  }
}
