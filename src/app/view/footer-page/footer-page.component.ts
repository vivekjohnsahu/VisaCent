import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

	constructor(
		// private router:Router,
		// private routers:ActivatedRoute,
	) { }

	ngOnInit() {
		$(document).ready(function(){
			$('#scroll').fadeOut(0);
			$(window).scroll(function(){
				if($(this).scrollTop() >= 100){
					$('#scroll').fadeIn(100);
				}else{
					$('#scroll').fadeOut(100);
				}
			});
			$('#scroll').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
			});

			var ctrlPressed = false;
			$(window).keydown(function(evt) {
				if (evt.which == 17) { 
					ctrlPressed = true;
				}
			}).keyup(function(evt) {
				if (evt.which == 17) {
					ctrlPressed = false;
				}
			});
			$('.Toproll').click(function(){	
				if(!ctrlPressed)
					$("html, body").animate({ scrollTop: 0 }, 1000);
			});

		});
	}

}
