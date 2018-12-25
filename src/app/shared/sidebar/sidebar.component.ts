import { Component, OnInit } from '@angular/core';
import Utils from '../../general/utils';
import { Section } from '../../models/Objects';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  categories: Section[] = Utils.getCategories();
 
  constructor() { }

  ngOnInit() {
  }

  getSectionClass(sectionId:string): string {
    return Utils.getSectionClassName(sectionId);
  }
}
