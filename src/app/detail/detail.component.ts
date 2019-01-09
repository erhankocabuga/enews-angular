import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
import { News, Comment } from '../models/Objects';
import Utils from '../general/utils';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  newsDetail: News = new News();
  commentModel: Comment = new Comment();
  commenIsSuccessfullySend: boolean;
  currentDate: Date = new Date();

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private location: Location
  ) {

   }

  ngOnInit() {
    this.getNewsDetail();
  }

  onSubmit() {
    this.commenIsSuccessfullySend = true;
  }

  getNewsDetail(): void {
   let section1:string, 
    section2:string, 
    year:number, 
    month:string, 
    day:number,
    titleUrl:string;
   
   this.route.params.subscribe(params=> {
      section1 = params["section1"];
      section2 = params["section2"];
      year = +params["year"];
      month = params["month"];
      day = params["day"];
      titleUrl = params["titleUrl"]; 
    });  
   
    let contentUrl = ""; 
    if(!section2) 
      contentUrl = `${section1}/${year}/${month}/${day}/${titleUrl}`;
    else 
      contentUrl = `${section1}/${section2}/${year}/${month}/${day}/${titleUrl}`;

    this.newsService.getNewsDetail(contentUrl)
      .subscribe(x=> {
        this.newsDetail = Utils.mapApiResponseToNewsSingle(x);
        console.log(this.newsDetail);
      });
  }
}