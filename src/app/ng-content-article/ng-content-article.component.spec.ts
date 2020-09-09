import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentArticleComponent } from './ng-content-article.component';

describe('NgContentArticleComponent', () => {
  let component: NgContentArticleComponent;
  let fixture: ComponentFixture<NgContentArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
