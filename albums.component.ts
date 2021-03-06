import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
tdata
  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data=>{
      console.log("3",data);
      this.tdata=data;
    })
  }
  photos(photo){
    localStorage.setItem("photo",JSON.stringify(photo))
    this.router.navigateByUrl("showphoto")
  }
}
