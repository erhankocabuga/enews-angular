import { Component, OnInit } from '@angular/core';
import Utils from '../../general/utils';
import { Section } from '../../models/Objects';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
 
  categories: Section[] = Utils.getCategories();

  constructor() { }

  ngOnInit() {
  }

  getSectionClass(sectionId:string): string {
    return Utils.getSectionClassName(sectionId);
  }
}
