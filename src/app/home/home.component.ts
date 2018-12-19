import { Component, OnInit } from '@angular/core';
import { News } from '../models/News';
import { NewsService } from '../news.service';
import Utils from '../general/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiResponse: {};
  newsList:News[];

  constructor(
    private newsService: NewsService
  ) { 

  }

  ngOnInit() {
    this.getNews();
  
  
    
  }

  getNews(): void {
    this.newsService.getCategoryNews(1)
      .subscribe(
        data => {
            this.apiResponse = data;
            this.newsList = Utils.mapApiResponseToNews(this.apiResponse);
        }
      );
  }
}
