import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/Objects';

import Utils from '../../general/utils';

@Component({
  selector: 'app-listtemplate1',
  templateUrl: './listtemplate1.component.html'
})
export class Listtemplate1Component implements OnInit {

  @Input() list: News[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  getSectionClass(sectionId: string): string {  
    return Utils.getSectionClassName(sectionId);
  }

}
