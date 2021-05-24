import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NationalityPriceService {

  constructor(private http:Http) { }

  private priceUrl = "https://visacent.com/la/api/get_availabel_visa_by_country/";
	  
  price_get(nationalityNamePrice:any) {
    console.log(nationalityNamePrice)
		return this.http.get(`${this.priceUrl}`+nationalityNamePrice).map((res:Response) => res.json());
    }

}
