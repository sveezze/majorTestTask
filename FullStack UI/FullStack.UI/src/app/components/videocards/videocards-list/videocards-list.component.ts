import { Component, OnInit } from '@angular/core';
import { Videocard } from 'src/app/model/videocard.model';
import { VideocardsService } from 'src/app/services/videocards.service';

@Component({
  selector: 'app-videocards-list',
  templateUrl: './videocards-list.component.html',
  styleUrls: ['./videocards-list.component.css']
})
export class VideocardsListComponent implements OnInit {

  videocards: Videocard[] = [];

  constructor(private videocardsService: VideocardsService){}

  ngOnInit(): void {
    this.videocardsService.getAllVideocards()
    .subscribe({
      next: (videocards) => {
        this.videocards = videocards;
      }
    })
  }

}
