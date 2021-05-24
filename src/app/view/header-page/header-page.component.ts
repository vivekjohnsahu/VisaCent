import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css'],
  
})
export class HeaderPageComponent implements OnInit {

	userlogin:boolean;
	userName:any;
	access:any;

	constructor
	(
		private routers : Router,
		private router : ActivatedRoute,
	) 
	{ }

	ngOnInit() {
		this.userLocal()
		$('#profile_trans').hide();
		$(document).ready(function(){
			$("#profile").click(function(e){
				  $("#profile_trans").slideToggle();
				  e.stopPropagation();
			});
			$(document).click(function(){
				$("#profile_trans").slideUp();
			});
            $(".nav_ul li a").click(function(){
                $(".nav_ul li a").removeClass("menu_active");
                $(this).addClass("menu_active");
            });
		});
        
        $(document).ready(function(){
            $("#language").click(function(e){
				e.stopPropagation();
                $("#trans").slideToggle();
			});
			$(document).click(function(){
				$("#trans").slideUp();
			});
		});	
		var cmd=this;

		$(function () {

			cmd.check_access_token_time_load();
			
			$(document).keydown(function (evt) {
				cmd.update_access_token_time();
			});

			$(document).click(function (evt) {
				cmd.update_access_token_time();
			});

			$(window).scroll(function(evt) {
				cmd.update_access_token_time();
			});

			setInterval(function(){
				cmd.check_access_token_time();
			},30000);
			
		}); 
				
	}

	update_access_token_time(){
		var dt = new Date();
		localStorage.setItem('access_time',JSON.stringify(dt));
	}

	check_access_token_time(){
		var curr_time = new Date();
		var old_time = JSON.parse(localStorage.getItem('access_time'));
		var user = JSON.parse(localStorage.getItem('user'));
		if(user!==null){
			var timeStart = new Date(old_time).getTime();
			var timeEnd = new Date(curr_time).getTime();
			var hourDiff = timeEnd - timeStart; //in ms
			var minDiff = hourDiff / 60 / 1000; //in minutes
			if(minDiff>=30)
			{	
				alert('Session destroy');
				localStorage.removeItem('user');
				localStorage.removeItem('access_token');
				localStorage.removeItem('userInformaction');
				localStorage.removeItem('navbar_pro');
				this.userlogin = false;
				window.location.replace("home");
				$('#modal_btn').trigger('click');
				setTimeout(() => {
					$('#modal_btn_cancel').trigger('click');
				}, 2000);
			}
		}	
	}

	check_access_token_time_load(){
		var curr_time = new Date();
		var old_time = JSON.parse(localStorage.getItem('access_time'));
		var user = JSON.parse(localStorage.getItem('user'));
		if(user!==null){
			var timeStart = new Date(old_time).getTime();
			var timeEnd = new Date(curr_time).getTime();
			var hourDiff = timeEnd - timeStart; //in ms
			var minDiff = hourDiff / 60 / 1000; //in minutes
			if(minDiff>=30)
			{	
				localStorage.removeItem('user');
				localStorage.removeItem('access_token');
				localStorage.removeItem('userInformaction');
				localStorage.removeItem('navbar_pro');
				this.userlogin = false;
			}
		}	
	}

	userLocal(){
		var user = JSON.parse(localStorage.getItem('user'));	
		if(user!==null && user!==undefined){	
			this.userName = user.name;
			$('#login_li').hide();
			$('#accnt_li').show();
		}else{
			$('#login_li').show();
			$('#accnt_li').hide();
		}
	}

	logOut(){
		localStorage.removeItem('user');
		localStorage.removeItem('access_token');
		localStorage.removeItem('userInformaction');
		localStorage.removeItem('navbar_pro');
		this.userlogin = false;
		this.routers.navigate(["home"]);
		$('#modal_btn').trigger('click');
		setTimeout(() => {
			$('#modal_btn_cancel').trigger('click');
		}, 2000);
	}

}