import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  user: any = {
    email:"",
    password:"",
    logged:true
  }
  notEmail: boolean = false;
  regex: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  validateEmail(){
    if(!this.regex.test(this.user.email)){
      this.notEmail = true;
    }else{
      this.notEmail = false;
    }
  }
  sendUser(){
    if(!this.regex.test(this.user.email) || this.user.password < 6 ){
      console.log("Não aceito");
    }else{
      console.log("aceito");
    }
  }
}