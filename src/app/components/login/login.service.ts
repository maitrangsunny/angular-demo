import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

export class LoginService {
    constructor(private http: HttpClient) { }
    sendPost(value) {
        const url = 'http://localhost:3000/signin';
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const body =  JSON.stringify(value);
        return this.http.post(url, body, { headers});
        // return this.http.post(url, body, { headers}).subscribe((response: Response) => {
        //     console.log(response);
        //     return response;
        // });
    }
}
