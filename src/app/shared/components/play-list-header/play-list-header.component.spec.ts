import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListHeaderComponent } from './play-list-header.component';

describe('PlayListHeaderComponent', () => {
  let component: PlayListHeaderComponent;
  let fixture: ComponentFixture<PlayListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
