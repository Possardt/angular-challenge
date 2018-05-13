import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPageRouteComponent } from './album-page-route.component';

describe('AlbumPageRouteComponent', () => {
  let component: AlbumPageRouteComponent;
  let fixture: ComponentFixture<AlbumPageRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPageRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPageRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
