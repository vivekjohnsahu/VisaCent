import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  constructor(private http:Http) {}
    private registertUrl = "https://visacent.com/la/api/register_user_visa";

  registerdata(formAllData) {
		return this.http.post(`${this.registertUrl}`,formAllData).map((res:Response) => res.json());
    }

    private EmailVerifiedUrl = "https://visacent.com/la/api/check_email";

  userEmailVerified(EmailVerified){
    return this.http.post(`${this.EmailVerifiedUrl}`,EmailVerified).map((res:Response) => res.json());
  }
}
