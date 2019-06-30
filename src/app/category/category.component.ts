import { Component, OnInit } from '@angular/core';
import { News } from '../models/Objects';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
import Utils from '../general/utils';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  apiResponse: {};
  newsList:News[] = [];
  category: string;

  public getNewsCallback: Function;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { 

  }

  ngOnInit() {
    this.getNewsCallback = this.getNews.bind(this);
    this.route.params.subscribe(params => {
      this.category = params["category"];
    });

    this.getNews(1);
  }


  getNews(pageNo: number) : void {   
    console.log("pageNo", pageNo);
    this.newsService.getCategoryNewsSpecific(pageNo, this.category)
      .subscribe(
        data => {
          this.apiResponse = data;

          let results:News[] = Utils.mapApiResponseToNewsForList(this.apiResponse);
          this.newsList = [...this.newsList, ...results];
        }
      );
  } 
}
