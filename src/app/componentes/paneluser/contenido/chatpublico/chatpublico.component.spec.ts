import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatpublicoComponent } from './chatpublico.component';

describe('ChatpublicoComponent', () => {
  let component: ChatpublicoComponent;
  let fixture: ComponentFixture<ChatpublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatpublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatpublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
