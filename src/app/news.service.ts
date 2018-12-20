import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from './models/News';
import { AppSettings } from './general/settings';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { 
   
  }

  

   
  apiEndPointList(pageNo:number): string {
    const apiUrl:string = AppSettings.ApiUrl;
    const pathName:string = "search";
    const params = new HttpParams()
                      .set("api-key", AppSettings.ApiKey)
                      .set("show-blocks", "body")
                      .set("show-fields", "thumbnail")
                      .set("page", pageNo.toString());

    return `${apiUrl}/${pathName}?${params.toString()}`;
  }

  apiEndPointDetail(contentUrl:string): string {
    const apiUrl:string = AppSettings.ApiUrl; 
    const params = new HttpParams()
                      .set("api-key", AppSettings.ApiKey);

    return `${apiUrl}/${contentUrl}?${params.toString()}`;
  }

  getCategoryNews(pageNo:number): Observable<any> {
    const url = this.apiEndPointList(pageNo);
    console.log("İstek:", url);
    return this.http.get(url);
  }

  getNewsDetail(contentUrl:string): Observable<any> {
    const url = this.apiEndPointDetail(contentUrl);
    return this.http.get<News>(url);
  }

  getData(): void {
    console.log("testting");
  }

}
