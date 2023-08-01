import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    producer: '',
    model: '',
    price: 0
  };

  constructor(private videocardService: VideocardsService, private router: Router){}

  ngOnInit(): void{
  }
  addVideocard(){
    this.videocardService.addVideocard(this.AddVideocardRequest)
    .subscribe({
      next: (videocard) =>{
        this.router.navigate(['videocards'])
      }
    });
  }
}
