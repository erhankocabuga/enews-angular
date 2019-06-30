import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/Objects';
import Utils from '../../general/utils';

@Component({
  selector: 'app-listtemplatesection',
  templateUrl: './listtemplatesection.component.html'
})
export class ListtemplatesectionComponent implements OnInit {

  @Input() list:News[] = [];
  @Input() ltype:string = '';
  
  constructor() { }

  ngOnInit() {
    console.log("ltype", this.ltype);
  }

  getSectionClass(sectionId: string): string {  
    return Utils.getSectionClassName(sectionId);
  }
}
