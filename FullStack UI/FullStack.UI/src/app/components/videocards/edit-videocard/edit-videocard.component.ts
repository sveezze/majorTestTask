import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videocard } from 'src/app/model/videocard.model';
import { VideocardsService } from 'src/app/services/videocards.service';

@Component({
  selector: 'app-edit-videocard',
  templateUrl: './edit-videocard.component.html',
  styleUrls: ['./edit-videocard.component.css']
})
export class EditVideocardComponent implements OnInit{

  videocardDetails: Videocard = {
    id: '',
    producerId: '',
    model: '',
    price: 0,
  }

  constructor(private route: ActivatedRoute, private videocardService: VideocardsService, private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');

        if (id) {
          this.videocardService.getVideocard(id)
          .subscribe({
            next: (response) =>{
              this.videocardDetails = response;
            }
          });
        }
      }
    })
  }

  updateVideocard(){
    this.videocardService.updateVideocard(this.videocardDetails.id, this.videocardDetails)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['videocards'])

      }
    });
  }

  deleteVideocard(id: string){
    this.videocardService.deleteVideocard(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['videocards']);
      }
    })
  }

}
