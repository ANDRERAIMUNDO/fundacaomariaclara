import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentiaisDTO } from 'src/app/models/CredentiaisDTO';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  credenciais: CredentiaisDTO = {
    email: "",
    password: ""
  };


  constructor(
    public router: Router, public authService: AuthService) { }

  ngOnInit() { 

  }

  login(){
    this.authService.authetocation(this.credenciais)
      {
      console.log("sucess auth");
      this.router.navigate(['/profile']);
    };
  }
}
