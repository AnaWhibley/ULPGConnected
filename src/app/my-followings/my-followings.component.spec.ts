import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowingsComponent } from './my-followings.component';

describe('MyFollowingsComponent', () => {
  let component: MyFollowingsComponent;
  let fixture: ComponentFixture<MyFollowingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFollowingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFollowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
