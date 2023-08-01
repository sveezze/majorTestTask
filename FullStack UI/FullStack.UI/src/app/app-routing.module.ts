import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideocardsListComponent } from './components/videocards/videocards-list/videocards-list.component';
import { AddVideocardComponent } from './components/videocards/add-videocard/add-videocard.component';

const routes: Routes = [
  {
    path: '',
    component: VideocardsListComponent
  },
  {
    path: 'videocards',
    component: VideocardsListComponent
  },
  {
    path: 'videocards/add',
    component: AddVideocardComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
