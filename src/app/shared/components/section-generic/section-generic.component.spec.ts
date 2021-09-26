import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGenericComponent } from './section-generic.component';

describe('SectionGenericComponent', () => {
  let component: SectionGenericComponent;
  let fixture: ComponentFixture<SectionGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
