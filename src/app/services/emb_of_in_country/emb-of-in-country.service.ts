import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmbOfInCountryService {

	constructor(private http:Http) { }

	onecnt:any;
	twocnt:any;

	private baseUrl = "https://visacent.com/la/api/embassy_of_countries/";

	counrtyone(list:any) {
		this.onecnt=list;
	}

	counrtytwo(list:any) {
		this.twocnt=list;
	}

	getparticulatrid(country_id:any){
		return this.http.get(`${this.baseUrl}`+country_id).map((res:Response) => res.json());
	}
}
