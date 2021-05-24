import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmbassiesCounrtiesListService {

  constructor(private http:Http) { }

  private embassiesListUrl = "https://visacent.com/la/api/embassy_countries_list";

	countryList() {
			return this.http.get(`${this.embassiesListUrl}`).map((res:Response) => res.json());
	}

	private filterListUrl = "https://visacent.com/la/api/embassy_countries_alpha";

	alphaList(){
		return this.http.get(`${this.filterListUrl}`).map((res:Response) => res.json());
	}

}
