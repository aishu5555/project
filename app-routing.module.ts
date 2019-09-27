import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { CommentsComponent } from './comments/comments.component';
import { ImageComponent } from './image/image.component';


const routes: Routes = [
  { path:'',component:LoginComponent},
  { path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tasks',component:TasksComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'posts',component:PostsComponent},
  {path:'add',component:AddtaskComponent},
  {path:'comment',component:CommentsComponent},
  {path:'showphoto',component:ImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
