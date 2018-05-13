import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageRouteComponent } from './home-page-route.component';

describe('HomePageRouteComponent', () => {
  let component: HomePageRouteComponent;
  let fixture: ComponentFixture<HomePageRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
