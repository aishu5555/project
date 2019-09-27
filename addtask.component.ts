import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  store:FormGroup

  constructor(public http:HttpClient) { 
    this.store=new FormGroup({
      user:new FormControl(''),
      id:new FormControl(''),
      title:new FormControl(''),
      comp:new FormControl('')
})
  }

  ngOnInit() {
  }
add1(a){
  let body={
    userId:a.user,
    id:a.id,
    title:a.title,
    completed:a.comp
  }
  this.http.post('https://jsonplaceholder.typicode.com/todos',body).subscribe(data=>{
    console.log("5",data)
  })
}
}
