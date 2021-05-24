import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { EmbParticularCountryService } from '../../../services/emb_particular_country/emb-particular-country.service';
import { EmbassiesCounrtiesListService } from '../../../services/embassies_countries_list/embassies-counrties-list.service';
import { CountriesListService } from '../../../services/countries_list_home/countries-list.service';
import { Router } from '@angular/router'; 
import { EmbOfInCountryService } from '../../../services/emb_of_in_country/emb-of-in-country.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-embassies-page',
  templateUrl: './embassies-page.component.html',
  styleUrls: ['./embassies-page.component.css'],
  providers: [ CountriesListService, EmbParticularCountryService]
})
export class EmbassiesPageComponent implements OnInit {

	constructor(
		private countriesListService:CountriesListService,
		private embassiesCounrtiesListService:EmbassiesCounrtiesListService,
		private embParticularCountryService:EmbParticularCountryService,
		private router : Router,
		private embOfInCountryService:EmbOfInCountryService,
		public ngProgress: NgProgress
	){}

	country:any;
	countryOne:any;
	countryTwo:any;
	alphabetical:any;
	onecnt:any;
	twocnt:any;
	allcnt:any;
	one:any;
	two:any;
	urlName:any;
	loaderShow:boolean;
	loaderHide:boolean;
	alpha=[];
	newListthis:any;
	allValue:any;
	slugListthis:any;
	slugAlpha=[];
	slugallValue:any;
	addAnyValue:any;
	ShapeTwocountry:any;
	ShapeOnecountry:any;
	loaderShow_first = true;
	loaderShow_second = true;
	loaderShow_allData = true;
	pageHide:boolean;
	pade_error_show:boolean;
	cntList:any;
	topFiveCNtry=[];
	topCntryTwo:any;
	topCntryOne:any;

	ngOnInit(){
		this.ngProgress.start();
		$('#profile_trans').hide();
		$(document).ready(function(){
			$(".filter").click(function(){
				let item = $(this).attr("id");
				$('html,body').animate({ scrollTop: $('#link_'+item).offset().top},'slow');
			});
		});
		this.embassiesCounrtiesListService.alphaList().subscribe(
			data => {
				if(data!=null){
					this.ngProgress.done();
					this.pageHide = true;
					this.alphabetical = data;
					// this.loaderShow = true;
					this.loaderHide = true;
				}else{
					this.pade_error_show = true;
				}
			})
		this.cntList =JSON.parse(localStorage.getItem('countrylist'));
		if(this.cntList!="" || this.cntList!=undefined){
			this.pageHide=true;
			this.country = this.cntList;
			this.countryOne = this.cntList;
			this.countryTwo = this.cntList;
		}else{
			this.countriesListService.countriesList().subscribe(
				data => {
					this.pageHide=true;
					this.country = data;
					this.countryOne = data;
					this.countryTwo = data;
				})
		}
		this.topFiveCNtry = $.grep(this.country, function(item) { 
			if(item.slug_country_name == 'australia')
				return item.slug_country_name;
			if(item.slug_country_name == 'india')
				return item.slug_country_name;
			if(item.slug_country_name == 'china')
				return item.slug_country_name;
			if(item.slug_country_name == 'canada')
				return item.slug_country_name;
			if(item.slug_country_name == 'united-kingdom')
				return item.slug_country_name;
			if(item.slug_country_name == 'united-states-of-america')
				return item.slug_country_name;
		});	
		this.topCntryTwo=this.topFiveCNtry;
		this.topCntryOne=this.topFiveCNtry;
		
	} 

	// embassy_btn(list){
	// 	this.embParticularCountryService.list_id(list);
	// 	this.urlName = list.slug_country_name.trim();
	// 	this.router.navigate(["embassy-and-consulate-in",this.urlName]);
	// 	document.body.scrollTop = document.documentElement.scrollTop = 0;
	// }
	
	changeShapeOne(listName){
		this.onecnt = listName.value;
		this.countryTwo = this.country;
		let nationalityTwoPlaceObj = this.countryOne.filter(function(list){ return list.slug_country_name==listName.value;});
		this.countryTwo = $.grep(this.countryTwo, function(item){ 
            return item.name !== nationalityTwoPlaceObj[0].name;
		});
		this.clickBox()
		this.topCntryTwo = this.topFiveCNtry;
		let nationalityTopTwoPlaceObj = this.topCntryOne.filter(function(list){ return list.slug_country_name==listName.value;});
		this.topCntryTwo = $.grep(this.topCntryTwo, function(item) { 
            return item.name !== nationalityTopTwoPlaceObj[0].name;
        });
		this.clickBox()
	}

	changeShapeTwo(listName){
		this.twocnt = listName.value;
		this.countryOne = this.country;
		let nationalityOnePlaceObj = this.countryTwo.filter(function(list){ return list.slug_country_name==listName.value;});
		this.countryOne = $.grep(this.countryOne, function(item){ 
            return item.name !== nationalityOnePlaceObj[0].name;
		});
		this.clickBox()
		this.topCntryOne = this.topFiveCNtry;
		let nationalityTopOnePlaceObj = this.topCntryTwo.filter(function(list){ return list.slug_country_name==listName.value;});
		this.topCntryOne = $.grep(this.topCntryOne, function(item) { 
            return item.name !== nationalityTopOnePlaceObj[0].name;
        });
		this.clickBox()
	}

	clickBox(){
		if(this.onecnt == undefined){
			this.one=false;
		}else if(this.twocnt == undefined){
			this.two=false;
		}else{
			this.allcnt= this.onecnt.trim()+"-in-"+this.twocnt.trim();
			this.router.navigate(["embassies",this.allcnt]);
		}  
	}

}
