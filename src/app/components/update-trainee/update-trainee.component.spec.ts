import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTraineeComponent } from './update-trainee.component';

describe('UpdateTraineeComponent', () => {
  let component: UpdateTraineeComponent;
  let fixture: ComponentFixture<UpdateTraineeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTraineeComponent]
    });
    fixture = TestBed.createComponent(UpdateTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
