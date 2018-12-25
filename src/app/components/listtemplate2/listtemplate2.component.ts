import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/Objects';
import Utils from '../../general/utils';

@Component({
  selector: 'app-listtemplate2',
  templateUrl: './listtemplate2.component.html'
})
export class Listtemplate2Component implements OnInit {

  @Input() list: News[] = [];

  constructor() { }

  ngOnInit() {
  }

  getSectionClass(sectionId: string): string {  
    return Utils.getSectionClassName(sectionId);
  } 
}
