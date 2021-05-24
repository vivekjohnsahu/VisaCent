import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router'; 
import * as $ from 'jquery';
import { NgProgress } from 'ngx-progressbar';
import { CountriesListService } from '../../services/countries_list_home/countries-list.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ CountriesListService ]
})

export class HomePageComponent implements OnInit {

	nationality:any;
	travelling:any;
	country:any;
	nationalityOne:any;
	travellingTwo:any;
	visaUrl:any;
	loaderShow:boolean;
	countryOne: any;
	ShapeTwocountry:any;
	ShapeOnecountry:any;
	countryTwo:any;
	loaderShow_first = true;
	loaderShow_second = true;
	slide_id:any;
	cntList:any;
	topCntryTwo:any;
	topCntryOne:any;
	topFiveCNtry=[];

	constructor(
		private router:Router,
		public ngProgress: NgProgress,
		private countriesListService:CountriesListService	
	) { }

	ngOnInit() {
		this.ngProgress.start();
		$('#profile_trans').hide();
		setTimeout(() => {
			this.cntList =JSON.parse(localStorage.getItem('countrylist'));
			if(this.cntList!="" && this.cntList!=undefined){
				this.ngProgress.done();
				this.country = this.cntList;
				this.countryOne = this.cntList;
				this.countryTwo = this.cntList;
			}else{
				this.countriesListService.countriesList().subscribe(
					data => {
						this.ngProgress.done();
						this.country = data;
						this.countryOne = this.cntList;
						this.countryTwo = this.cntList;
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
		}, 2000);


		
		this.slide_id=localStorage.getItem('home_id');
			if(this.slide_id!=null){
				$('html, body').animate({
				scrollTop: $("#scrollTable").offset().top}, 500);
				localStorage.removeItem('home_id');
			}
	}
				
	changeShapeOne(listName){
        this.loaderShow_second = true;
        this.nationality = listName.value;
        this.countryTwo = this.country
        let nationalityTwoPlaceObj = this.countryOne.filter(function(list){ return list.slug_country_name==listName.value;});
        this.countryTwo = $.grep(this.countryTwo, function(item) { 
            return item.name !== nationalityTwoPlaceObj[0].name;
		});
		this.visaTable()
		this.topCntryTwo = this.topFiveCNtry;
		let nationalityTopTwoPlaceObj = this.topCntryOne.filter(function(list){ return list.slug_country_name==listName.value;});
		this.topCntryTwo = $.grep(this.topCntryTwo, function(item) { 
            return item.name !== nationalityTopTwoPlaceObj[0].name;
        });
        this.visaTable()
	}
	
	changeShapeTwo(listName){
		this.loaderShow_first = true;
		this.travelling = listName.value;
		this.countryOne = this.country
		let nationalityOnePlaceObj = this.countryTwo.filter(function(list){ return list.slug_country_name==listName.value;});
		this.countryOne = $.grep(this.countryOne, function(item) { 
            return item.name !== nationalityOnePlaceObj[0].name;
		});
		this.visaTable()
		this.topCntryOne = this.topFiveCNtry;
		let nationalityTopOnePlaceObj = this.topCntryTwo.filter(function(list){ return list.slug_country_name==listName.value;});
		this.topCntryOne = $.grep(this.topCntryOne, function(item) { 
            return item.name !== nationalityTopOnePlaceObj[0].name;
        });
        this.visaTable()
	}

	visaTable(){
		if(this.nationality == undefined){
			this.nationalityOne=false;
		}else if(this.travelling == undefined){
			this.travellingTwo=false;
		}else{
			this.visaUrl = this.travelling+"-visas-for-"+this.nationality;
			this.router.navigate(["requirement",this.visaUrl]);
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}  
	}
	
	getCntyName(cty){
		this.router.navigate(["apply-visa",cty]);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

}