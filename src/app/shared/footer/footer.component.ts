import { Component, OnInit } from '@angular/core';
import { Section } from '../../models/Objects';
import Utils from '../../general/utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  categories: Section[] = Utils.getCategories();
  
  constructor() { }

  ngOnInit() {
  }

}
