import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaderResponse, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(formLogin) {


    const url = 'http://localhost:3000/signin';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body =  JSON.stringify(formLogin.value);
    return this.http.post(url, body, { headers}).subscribe((response: Response) =>{
      console.log(response.json());
    });
  }
  postToServer(){

  }
}
