import { Component } from '@angular/core';
import { DataBindingModel} from './data-binding-article/data-binding-model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Reusable Components';
  exampleArticle:DataBindingModel;

  constructor(){
    this.exampleArticle = {
      header:'My Article Heading 3',
      body:'My Article body 3 using Input data binding ',
      footer:100
    }
  }
}
