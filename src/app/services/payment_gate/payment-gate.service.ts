import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PaymentGateService {

  constructor(private http:Http) { }

  private paymentUrl = "https://visacent.com/la/api/visa_application/";
	  
  paymentEv(order_id:any) {
      return this.http.get(`${this.paymentUrl}`+order_id).map((res:Response) => res.json());
  }

  private paymentCompleteUrl = "https://visacent.com/la/api/payment/";

  paymentComplete(key:any){
      return this.http.get(`${this.paymentCompleteUrl}`+key).map((res:Response) => res.json());
  }

}
