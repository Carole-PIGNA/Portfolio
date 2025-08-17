import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdiSceneComponent } from './ordi-scene.component';

describe('OrdiSceneComponent', () => {
  let component: OrdiSceneComponent;
  let fixture: ComponentFixture<OrdiSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdiSceneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdiSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
