import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmbassiesCityDetailsService {

    constructor(private http:Http) { }

    private cityDetailtUrl = "https://visacent.com/la/api/countries_embassy_detail/";

    countryCtn(country_ctn:any){
        return this.http.get(`${this.cityDetailtUrl}`+country_ctn).map((res:Response) => res.json());
    }
}
