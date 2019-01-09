import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html' 
})
export class SocialShareComponent implements OnInit {

  @Input() contentTitle: string;
  @Input() contentUrl: string;
  pageUrl: string;
  constructor() { }

  ngOnInit() {
    this.pageUrl = location.protocol + '//' + location.host + this.contentUrl; 
    this.contentTitle = "Erhan News - " + this.contentTitle;
  }

  socialShare(type:string): void {  
    let shareUrl:string;
    console.log("sharetype", type);
    switch(type) {
      case 'facebook':
        shareUrl = 'https://www.facebook.com/sharer.php?u={url}';
        break;
      case 'twitter':
        shareUrl = 'https://twitter.com/intent/tweet?url={url}&text={title}';
        break;
      case 'googleplus':
        shareUrl = 'https://plus.google.com/share?url={url}&text={title}';
        break;
      case 'pinterest':
        shareUrl = 'http://pinterest.com/pin/create/link/?url={url}';
        break;
      case 'linkedin':
        shareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}';
        break;
      default:
        break;
    }

    if(shareUrl) {
      shareUrl = shareUrl
                    .replace(/{title}/g, this.contentTitle)
                    .replace(/{url}/g, this.pageUrl);
      console.log("shareUrl", shareUrl);
      window.open(shareUrl,'Share','width=600,height=400,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=0,top=0');
    }
  }
}
