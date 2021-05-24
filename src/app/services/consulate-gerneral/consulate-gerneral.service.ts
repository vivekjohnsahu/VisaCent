import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ConsulateGerneralService {

  constructor(private http:Http) { }

    private cityUrl = "https://visacent.com/la/api/countries_consulate_detail/";

    countryConsulatenew(country_ctn:any){
        return this.http.get(`${this.cityUrl}`+country_ctn).map((res:Response) => res.json());
    }
}
