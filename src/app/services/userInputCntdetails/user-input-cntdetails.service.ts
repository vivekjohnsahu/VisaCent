import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserInputCntdetailsService {

  constructor(private http:Http) { }
  private userInputtUrl = "https://visacent.com/la/api/update_embassy_new";

  userInputData(userFileData) {
		return this.http.post(`${this.userInputtUrl}`,userFileData).map((res:Response) => res.json());
    }
}
