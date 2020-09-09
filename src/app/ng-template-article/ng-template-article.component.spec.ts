import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateArticleComponent } from './ng-template-article.component';

describe('NgTemplateArticleComponent', () => {
  let component: NgTemplateArticleComponent;
  let fixture: ComponentFixture<NgTemplateArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
