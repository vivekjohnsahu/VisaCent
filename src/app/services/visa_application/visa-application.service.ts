import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class VisaApplicationService {

 	constructor(private http:Http) { }

	private visatUrl = "https://visacent.com/la/api/get_availabel_visa/";
	  
	visaTableList(visaAllValue:any) {
		return this.http.get(`${this.visatUrl}`+visaAllValue).map((res:Response) => res.json());
    }
}
