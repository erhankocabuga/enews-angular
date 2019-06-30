import { Component, OnInit } from '@angular/core';
import { News } from '../models/Objects';
import { NewsService } from '../news.service';
import Utils from '../general/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiResponse: {};
  newsList:News[] = [];

  public getNewsCallback: Function;

  constructor(
    private newsService: NewsService
  ) { 

  }

  ngOnInit() {
    this.getHomeNews();
    this.getNewsCallback = this.getNews.bind(this);
  }

  getHomeNews(): void {
    this.newsService.getCategoryNews(1)
      .subscribe(
        data => {
            this.apiResponse = data;
            
            let results:News[] = Utils.mapApiResponseToNewsForList(this.apiResponse);
            this.newsList = [...this.newsList, ...results];
            console.log("this.newsList", this.newsList);

            this.newsService.getCategoryNews(2)
              .subscribe(
                data => {
                    this.apiResponse = data;
                    
                    let results:News[] = Utils.mapApiResponseToNewsForList(this.apiResponse);
                    this.newsList = [...this.newsList, ...results];
                    console.log("this.newsList", this.newsList);
                }
              );
        }
      ); 
  }

  getNews(pageNo: number): void {
    this.newsService.getCategoryNews(pageNo)
      .subscribe(
        data => {
            this.apiResponse = data;
            
            let results:News[] = Utils.mapApiResponseToNewsForList(this.apiResponse);
            this.newsList = [...this.newsList, ...results];
            console.log("this.newsList", this.newsList);
        }
      ); 
  }
}
