import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {environment} from "../../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:Http) { }
  // baseUrl= environment.apiUrl
  
  private loginUrl = "https://visacent.com/la/api/login";

    loginDetails(loginData:any) {
      return this.http.post(`${this.loginUrl}`,loginData).map((res:Response) => res.json());
    }
    
    private forgotUrl = "https://visacent.com/la/api/password_recovery";

    forgotDetails(EmailForgot:any) {
      return this.http.post(`${this.forgotUrl}`,EmailForgot).map((res:Response) => res.json());
    }

    private loginOtpUrl = "https://visacent.com/la/api/validate_otp";

    loginOtp(otpData){
      return this.http.post(`${this.loginOtpUrl}`,otpData).map((res:Response) => res.json());
    }  

  }
