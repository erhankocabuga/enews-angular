import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':category', component: CategoryComponent }, 
  { path: ':section1/:year/:month/:day/:titleUrl', component: DetailComponent },
  { path: ':section1/:section2/:year/:month/:day/:titleUrl', component: DetailComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
