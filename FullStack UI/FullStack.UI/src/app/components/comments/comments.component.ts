import { Component, OnInit } from '@angular/core';
import { ProductStoreService } from 'src/app/services/productstore.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments: any;
  public isLoadPanelVisible: boolean = true;
  constructor(
    private productService: ProductStoreService
  ){}
  ngOnInit(): void {
    this.productService.CheckComments()
        .subscribe(x => {
          this.comments = x;
        })
      this.isLoadPanelVisible = false;
  }
}
