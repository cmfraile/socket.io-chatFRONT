import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserenterComponent } from './userenter.component';

describe('UserenterComponent', () => {
  let component: UserenterComponent;
  let fixture: ComponentFixture<UserenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
