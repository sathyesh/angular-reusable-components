import { Component, OnInit, Input } from '@angular/core';
import { DataBindingModel} from './data-binding-model'

/**
 * Component for displaying article through input property
 *
 * @export
 * @class DataBindingArticleComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-data-binding-article',
  templateUrl: './data-binding-article.component.html',
  styleUrls: ['./data-binding-article.component.scss']
})


export class DataBindingArticleComponent implements OnInit {

  constructor() { }
  
  // Input property 
  @Input() articleObj:DataBindingModel;

  ngOnInit() {
  }

}
