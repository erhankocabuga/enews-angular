import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from './models/Objects';
import { AppSettings } from './general/settings';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { 
   
  }
   
  getCategoryNewsEndpoint(pageNo:number): string {
    const apiUrl:string = AppSettings.ApiUrl;
    const pathName:string = "search";
    const params = new HttpParams()
                      .set("api-key", AppSettings.ApiKey)
                      .set("show-blocks", "body")
                      .set("show-fields", "thumbnail")
                      .set("section", "world|science|technology|football|business|games|environment|culture")
                      .set("page", pageNo.toString())

    return `${apiUrl}/${pathName}?${params.toString()}`;
  }

  getNewsDetailEndpoint(contentUrl:string): string {
    const apiUrl:string = AppSettings.ApiUrl; 
    const params = new HttpParams()
                      .set("api-key", AppSettings.ApiKey)
                      .set("show-fields", "thumbnail")
                      .set("show-blocks", "all");

    return `${apiUrl}/${contentUrl}?${params.toString()}`;
  }

  getCategoryNews(pageNo:number): Observable<any> {
    const url = this.getCategoryNewsEndpoint(pageNo);
    if(AppSettings.IsDevelopment) {
      console.log("İstek:", url);
    }
    console.log("İstek:", url);
    return this.http.get(url);
  }

  getNewsDetail(contentUrl:string): Observable<any> {
    const url = this.getNewsDetailEndpoint(contentUrl);
    if(AppSettings.IsDevelopment) {
      console.log("İstek:", url);
    }
    return this.http.get<News>(url);
  }

  getData(): void {
    console.log("testting");
  }

}
