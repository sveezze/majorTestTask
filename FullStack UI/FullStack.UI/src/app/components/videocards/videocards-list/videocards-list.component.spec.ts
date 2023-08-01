import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardsListComponent } from './videocards-list.component';

describe('VideocardsListComponent', () => {
  let component: VideocardsListComponent;
  let fixture: ComponentFixture<VideocardsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideocardsListComponent]
    });
    fixture = TestBed.createComponent(VideocardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
