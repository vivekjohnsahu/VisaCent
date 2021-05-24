import { Injectable } from '@angular/core';
import {Http, Response,} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UpdateAddressService {
	constructor(private http:Http) { }

	private updateDatatUrl = "https://visacent.com/la/api/update_embassy_edits";
	
	updateData(update_user_details) {
		return this.http.post(`${this.updateDatatUrl}`,update_user_details).map((res:Response) => res.json());
	}
	
}

