import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producer } from 'src/app/model/producer.model';
import { Videocard } from 'src/app/model/videocard.model';
import { VideocardsService } from 'src/app/services/videocards.service';


@Component({
  selector: 'app-add-videocard',
  templateUrl: './add-videocard.component.html',
  styleUrls: ['./add-videocard.component.css']
})
export class AddVideocardComponent implements OnInit {
  AddVideocardRequest: Videocard = {
    id: '',
    producerId: '',
    model: '',
    price: 0
  };
  producers: any;
  constructor(private videocardService: VideocardsService, private router: Router){}

  ngOnInit(): void{
    this.videocardService.getAllProducers().subscribe({
      next: (producers) => {
        this.producers = producers;
      }
    });
  }
  addVideocard(){
    this.videocardService.addVideocard(this.AddVideocardRequest)
    .subscribe({
      next: (videocard) =>{
        this.router.navigate(['videocards'])
      }
    });
    console.log(this.AddVideocardRequest);
  }
}
