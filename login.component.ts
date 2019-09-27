import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  store:FormGroup
  constructor(private http:HttpClient,public router:Router) {
    this.store=new FormGroup({
      email:new FormControl(''),
      password:new FormControl('')

    })

  }

  ngOnInit() {

}
add(a)
{
  let data={
    email:a.email,
    password:a.password

  }
  this.http.post("https://reqres.in/api/login",data).subscribe(data=>{console.log(data)})
  this.router.navigateByUrl('dashboard')
}
  }


