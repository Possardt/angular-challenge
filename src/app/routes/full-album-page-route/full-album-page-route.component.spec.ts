import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAlbumPageRouteComponent } from './full-album-page-route.component';

describe('FullAlbumPageRouteComponent', () => {
  let component: FullAlbumPageRouteComponent;
  let fixture: ComponentFixture<FullAlbumPageRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullAlbumPageRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullAlbumPageRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
