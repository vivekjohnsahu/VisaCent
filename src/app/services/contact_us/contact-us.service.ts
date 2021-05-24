import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:Http) { }

  private contactUrl = "https://visacent.com/la/api/save_visitor_query";
	
	contact(contactFormData:any) {
		return this.http.post(`${this.contactUrl}`,contactFormData).map((res:Response) => res.json());
	}
}
