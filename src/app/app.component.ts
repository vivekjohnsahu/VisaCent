import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import * as $ from 'jquery';
import { CountriesListService }  from '../app/services/countries_list_home/countries-list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CountriesListService ]
})
export class AppComponent implements OnInit {
     countryList:any;
     cntList:any;
     
    constructor(
      private router:Router,
      private countriesListService:CountriesListService
    ){}
     
    ngOnInit() {
		this.router.events.subscribe(
			data =>{
			if(data!=null){
				$(document).ready(function(){
					$(".navbar-collapse").removeClass("in");
				});
			}
		})
        
        $(document).ready(function(){
            var wid = $(window).width();
            if(wid <= 2000)
            {
                var height = $(".foot").height();
                $(".mid").css({"padding-bottom":height+"px"});
            }
            $(window).resize(function () { 
                if($(window).width()<=2000)
                {
                    var height = $(".foot").height();
                    $(".mid").css({"padding-bottom":height+"px"});
                }
                else
                {
                    $(".mid").css({"padding-bottom":"0px"});
                }
            });
        });

        this.cntList =JSON.parse(localStorage.getItem('countrylist'));
		if(this.cntList=="" || this.cntList==undefined){
            this.countriesListService.countriesList().subscribe(
                data =>{
                    this.countryList = data
                localStorage.setItem('countrylist',JSON.stringify(this.countryList));
                })
            }else{
                this.countryList=this.cntList;
            }
    }
}
