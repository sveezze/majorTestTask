import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideocardComponent } from './add-videocard.component';

describe('AddVideocardComponent', () => {
  let component: AddVideocardComponent;
  let fixture: ComponentFixture<AddVideocardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVideocardComponent]
    });
    fixture = TestBed.createComponent(AddVideocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
