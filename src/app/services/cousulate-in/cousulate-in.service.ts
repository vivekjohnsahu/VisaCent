import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CousulateInService {

  constructor(private http:Http) { }

  private cousulateUrl = "https://visacent.com/la/api/consulate_of_countries/";

  cousulateList(cousulate:any) {
		return this.http.get(`${this.cousulateUrl}`+cousulate).map((res:Response) => res.json());
	}
}
