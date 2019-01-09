import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Listtemplate1Component } from './components/listtemplate1/listtemplate1.component';
import { Listtemplate2Component } from './components/listtemplate2/listtemplate2.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListtemplatesectionComponent } from './components/listtemplatesection/listtemplatesection.component';
import { SocialShareComponent } from './components/social-share/social-share.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    Listtemplate1Component,
    Listtemplate2Component,
    SidebarComponent,
    ListtemplatesectionComponent,
    SocialShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
