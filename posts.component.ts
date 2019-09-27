import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
tdata
  constructor(public as:HttpClient,public router:Router) { }

  ngOnInit() {
    this.as.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
      console.log("4",data);
      this.tdata=data;
    })
  }
  get(a){
    localStorage.setItem('post',JSON.stringify(a))
    this.router.navigateByUrl('comment')
      }
}
