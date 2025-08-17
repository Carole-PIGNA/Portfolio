import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonhistoireComponent } from './monhistoire.component';

describe('MonhistoireComponent', () => {
  let component: MonhistoireComponent;
  let fixture: ComponentFixture<MonhistoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonhistoireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonhistoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
