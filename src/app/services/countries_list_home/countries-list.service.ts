import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CountriesListService {

	constructor(private http:Http) { }

	private countriesListUrl = "https://visacent.com/la/api/countries_list";
	
	countriesList() {
		return this.http.get(`${this.countriesListUrl}`).map((res:Response) => res.json());
	}

	nationalityParticularName(nationality:any){
		return this.http.get(`${this.countriesListUrl}`+"/"+nationality).map((res:Response) => res.json());
	}

	travellingParticularName(travelling:any){
		return this.http.get(`${this.countriesListUrl}`+"/"+travelling).map((res:Response) => res.json());
	}
}