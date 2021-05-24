import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:Http) { }

    private NewsUrl = "https://visacent.com/la/api/news_list";

    NewsData() {
		  return this.http.get(`${this.NewsUrl}`).map((res:Response) => res.json());
    }

    private NewsDetailsUrl = "https://visacent.com/la/api/news/";

    NewsCurrentValue(currentValue){
      return this.http.get(`${this.NewsDetailsUrl}`+currentValue).map((res:Response) => res.json());
    }

    private leaveRpysUrl = "";

    leaveData(leaveRpy){
      return this.http.post(`${this.leaveRpysUrl}`,leaveRpy).map((res:Response) => res.json());
    }
}
