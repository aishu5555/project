import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tdata
  constructor(public a:HttpClient,private router:Router) { }

  ngOnInit() {
    this.a.get('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{
      console.log("2",data)
      this.tdata=data;
    })
    
  }
  func1(){
    this.router.navigateByUrl('add');
  }
}
