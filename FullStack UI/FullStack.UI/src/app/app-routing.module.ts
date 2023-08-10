import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideocardsListComponent } from './components/videocards/videocards-list/videocards-list.component';
import { AddVideocardComponent } from './components/videocards/add-videocard/add-videocard.component';
import { EditVideocardComponent } from './components/videocards/edit-videocard/edit-videocard.component';

const routes: Routes = [
  {
    path: '',
    component: AddVideocardComponent 
  },
  {
    path: 'videocards',
    component: VideocardsListComponent
  },
  {
    path: 'videocards/add',
    component: AddVideocardComponent
  },
  {
    path: 'videocards/edit/:id',
    component: EditVideocardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
