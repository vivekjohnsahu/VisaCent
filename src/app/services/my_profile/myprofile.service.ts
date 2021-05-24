import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {

  constructor(private http:Http) { }

  private dasboardUrl = "https://visacent.com/la/api/dashboard/";
  dasboardUser(token) {
      return this.http.get(`${this.dasboardUrl}`+token).map((res:Response) => res.json());
  }

  private myOrderUrl = "https://visacent.com/la/api/account/";

  myOrder(token) {
		return this.http.get(`${this.myOrderUrl}`+token).map((res:Response) => res.json());
  }

  private myprofileUrl = "https://visacent.com/la/api/update_info";

  myProfileUpdate(profileData:any) {
		  return this.http.post(`${this.myprofileUrl}`,profileData).map((res:Response) => res.json());
  }                 

  private changePassUrl = "https://visacent.com/la/api/update_password";
  changePassUpdate(changePassData:any) {
      return this.http.post(`${this.changePassUrl}`,changePassData).map((res:Response) => res.json());
  }

}


// header set code
// changePassUpdate(changePassData:any) {
//   let access_token =localStorage.getItem('access_token'); 
//   let headers = new Headers();  
//   headers.append('Authorization','Bearer ');
//   headers.append('access_token',access_token);
//   let options = new RequestOptions({headers: headers});
//   return this.http.post(`${this.changePassUrl}`,changePassData,options).map((res:Response) => res.json());
// }
