import { TestBed } from '@angular/core/testing';

import { VideocardsService } from './videocards.service';

describe('VideocardsService', () => {
  let service: VideocardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideocardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
