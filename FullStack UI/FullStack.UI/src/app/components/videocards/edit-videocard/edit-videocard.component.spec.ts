import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVideocardComponent } from './edit-videocard.component';

describe('EditVideocardComponent', () => {
  let component: EditVideocardComponent;
  let fixture: ComponentFixture<EditVideocardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVideocardComponent]
    });
    fixture = TestBed.createComponent(EditVideocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
