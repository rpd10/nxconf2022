import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFeatureSomethingComponent } from './demo-features-something.component';

describe('DemoFeatureSomethingComponent', () => {
  let component: DemoFeatureSomethingComponent;
  let fixture: ComponentFixture<DemoFeatureSomethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoFeatureSomethingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoFeatureSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
