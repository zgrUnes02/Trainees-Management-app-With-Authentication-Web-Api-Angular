import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTraineeComponent } from './create-trainee.component';

describe('CreateTraineeComponent', () => {
  let component: CreateTraineeComponent;
  let fixture: ComponentFixture<CreateTraineeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTraineeComponent]
    });
    fixture = TestBed.createComponent(CreateTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
