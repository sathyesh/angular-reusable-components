import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingArticleComponent } from './data-binding-article.component';

describe('DataBindingArticleComponent', () => {
  let component: DataBindingArticleComponent;
  let fixture: ComponentFixture<DataBindingArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
