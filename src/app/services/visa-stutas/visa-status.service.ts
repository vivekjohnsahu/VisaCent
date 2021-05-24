import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class VisaStatusService {

  constructor(private http:Http) { }

  private visastatusUrl = "https://visacent.com/la/api/visa_status";

  visaStatus(visastatus:any) {
		return this.http.post(`${this.visastatusUrl}`,visastatus).map((res:Response) => res.json());
    }
}









	  

