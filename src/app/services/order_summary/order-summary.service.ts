import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {

  constructor(private http:Http) { }

    private ApplicationDetailsUrl = "https://visacent.com/la/api/get_order_summary/";

    ApplicationDetails(currentId:any) {
		return this.http.get(`${this.ApplicationDetailsUrl}`+currentId).map((res:Response) => res.json());
    }

    private paticularDetailsUrl = "https://visacent.com/la/api/get_form_fields/";

    paticularId(applicantAllId:any){
      return this.http.get(`${this.paticularDetailsUrl}`+applicantAllId).map((res:Response) => res.json());
    }

    private userApplicantUrl = "https://visacent.com/la/api/update_user_visa";
    
    userData(applicant:any) {
      return this.http.post(`${this.userApplicantUrl}`,applicant).map((res:Response) => res.json());
    }

      private documentArrUrl = "https://visacent.com/la/api/upload_document";
    
    document(documentArr:any) {
      return this.http.post(`${this.documentArrUrl}`,documentArr).map((res:Response) => res.json());
    }

    private documentFinUrl = "https://visacent.com/la/api/update_document"
    
    submitDocFin(key){
      return this.http.post(`${this.documentFinUrl}`,key).map((res:Response) => res.json());
    }
}
