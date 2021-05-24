import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class EmbParticularCountryService {

public country_id:any[];

  constructor(private http:Http) { }

  private countryidUrl = "https://visacent.com/la/api/embassy_by_countries/";

	list_id(id:any) {
		this.country_id=id;
	}

	getcountryid(click_country_id:any){
		return this.http.get(`${this.countryidUrl}`+click_country_id).map((res:Response) => res.json());
	}

	resetcountryid(){
		this.country_id=[];
	}

	private offidUrl = "https://visacent.com/la/api/embassy_by_countries_2/";
	
	off_list(id:any){
		return this.http.get(`${this.offidUrl}`+id).map((res:Response) => res.json());
	}
  
}
