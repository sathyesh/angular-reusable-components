import { Component, OnInit, Input, TemplateRef } from '@angular/core';

/**
 * Component for handling ng template element
 *
 * @export
 * @class NgTemplateArticleComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-ng-template-article',
  templateUrl: './ng-template-article.component.html',
  styleUrls: ['./ng-template-article.component.scss']
})

export class NgTemplateArticleComponent implements OnInit {

  @Input() articleTemplate:TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
