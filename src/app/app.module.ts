import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgContentArticleComponent } from './ng-content-article/ng-content-article.component';
import { DataBindingArticleComponent } from './data-binding-article/data-binding-article.component';
import { NgTemplateArticleComponent } from './ng-template-article/ng-template-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentArticleComponent,
    DataBindingArticleComponent,
    NgTemplateArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
