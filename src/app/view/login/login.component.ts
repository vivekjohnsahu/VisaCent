import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LoginService } from '../../services/login/login.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

	constructor
	(
		private loginService:LoginService,
		private router : Router,
	) 
	{
		var user = JSON.parse(localStorage.getItem('user'));
		
		if(!(user) || user==null || !(user.access_token) || user.access_token == '' || !(user.user_id) || user.user_id == ''){
			localStorage.removeItem('user');
			localStorage.removeItem('access_token');
			localStorage.removeItem('userData');
			
		}else{
			this.router.navigate(['my-profile'])
		}
	}

	loginpage:boolean;
	Email:any
	Password:any
	regExEmail="^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";
	loginData:{};
	EmailForgot:any;
	genral:{};
	forgot_msg:any;
	forgot_msg_sus:boolean;
	email:{};
	login_msg_sus:boolean;
	login_msg:any;
	forgot_msg_error:boolean;
	forgot_error_msg:string;
	process:boolean;
	returnUrl:any;

    ngOnInit() {
		$('#profile_trans').hide();
	}
	
	loginUser(){
		var flag = 0;
		if(this.Email == "" || this.Email == undefined){
			$(".removeGmail").addClass("borderColor");
			flag = 1;	
		}if(!this.Email.match(this.regExEmail)){
			$(".removeGmail").addClass("borderColor");
			flag = 1;
		}if(this.Password == "" || this.Password == undefined){
			$(".removePassword").addClass("borderColor");
			flag = 1;
		}
		if(flag == 1)return false;
		this.process = true;
		var navbar_pro=1;
		this.loginData={
			email:this.Email,
			password:this.Password,
		}

		this.loginService.loginDetails(this.loginData).subscribe(
			data =>{
				if(data.status == 'SUCCESS'){
					localStorage.setItem('user',JSON.stringify(data));
					localStorage.setItem('navbar_pro',JSON.stringify(navbar_pro=1));
					this.process = false;
					this.router.navigate(["my-profile"]);
				}else if(data.status == 'ERROR'){
					this.process = false;
					this.login_msg_sus = true;
					this.login_msg = 'Username or Password is wrong.';
				}
			})
	}

	emailForgotPg(){
		if(this.EmailForgot == "" || this.EmailForgot == undefined){
			$(".removeGmailForgot").addClass("borderColor");
			return false;
		}else if(!this.EmailForgot.match(this.regExEmail)){
			$(".removeGmailForgot").addClass("borderColor");
			return false;
		}

		this.email={
			email:this.EmailForgot,
		}

		this.loginService.forgotDetails(this.email).subscribe(
			data =>{
				if(data.status == 'SUCCESS'){
					this.forgot_msg_sus = true;
					this.forgot_msg = 'Please check your email. Password has been sent to your mail.';
					setTimeout(() => {
						this.loginpage = false;
					}, 2000);
				}else if(data.status == 'ERROR'){
					this.forgot_msg_error = true;
					this.forgot_error_msg = 'This email addess is not registered.';
				}
			})
	}

    forgot(){
	  this.loginpage=true;
	  this.Email = ""
	  this.Password = ""
	  this.login_msg_sus = false;
    }

    login(){
	  this.loginpage=false;
	  this.forgot_msg_sus = false;
	  this.forgot_msg_error = false;
	  this.forgot_msg = ""
	  this.forgot_error_msg = ""
	}
	
	cleanerror(){
		$(".removeGmail").removeClass("borderColor");
		this.login_msg_sus = false;
	}

	cleanerror1(){
		$(".removePassword").removeClass("borderColor");
		this.login_msg_sus = false;
	}

	cleanerrorForgot(){
		$(".removeGmailForgot").removeClass("borderColor");
		this.forgot_msg_sus = false;	
		this.forgot_msg_error = false;
	}

}
