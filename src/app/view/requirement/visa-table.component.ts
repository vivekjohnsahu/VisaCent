import { Component, OnInit } from '@angular/core';
import { VisaApplicationService } from '../../services/visa_application/visa-application.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CountriesListService } from '../../services/countries_list_home/countries-list.service';
import * as $ from 'jquery'; 
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-visa-table',
  templateUrl: './visa-table.component.html',
  styleUrls: ['./visa-table.component.css'],
  providers: [ VisaApplicationService, CountriesListService]
})
export class VisaTableComponent implements OnInit {

	constructor(
		private visaApplicationService:VisaApplicationService,
		private router:Router,
		private routers:ActivatedRoute,
		private countriesListService:CountriesListService,
		public ngProgress: NgProgress
	) { }

	  visaTable:any;
	  detailsName:any;
	  countryOne:any;
	  countryTwo:any;
	  ShapeTwocountry:any;
	  ShapeOnecountry:any;
	  nationalityChange:any;
	  travellingChange:any;
	  visaUrl:any;
	  fromCountrySlugName:any;
	  tableShow:boolean;
	  tableRequired:boolean;
	  tableRegular:any;
	  dataShow = true;;
	  currentVisa:any;
	  inCountrySlugName:any;
	  SnapeOneUrl:any;
	  SnapeTwoUrl:any;
	  loaderShow_first = true;
	  loaderShow_second = true;
	  visaTeblerequirements:any;
	  indexOneVisa:any
	  pageHide:boolean;
	  moveForm:any;
	  pade_error_show:boolean;
	  country:any;
	  nationalityChangeName:any;
	  travellingChangeName:any;
	  cntList:any;
	  topCntryTwo:any;
	  topCntryOne:any;
	  topFiveCNtry=[];

  	ngOnInit(){
		this.ngProgress.start();
		$('#profile_trans').hide();
		$(document).ready(function(){
			$(".filter").click(function(){
				$('html,body').animate({ scrollTop: $('#link_slid').offset().top},'slow');
			});
		});
		
		this.cntList =JSON.parse(localStorage.getItem('countrylist'));
		if(this.cntList!="" || this.cntList!=undefined){
			this.ngProgress.done();
			this.country = this.cntList;
			this.countryOne = this.cntList;
			this.countryTwo = this.cntList;
		}else{
			this.countriesListService.countriesList().subscribe(
				data => {
					this.ngProgress.done();
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
		this.visaAllDetails()
		
	}

	visaAllDetails(){
		this.routers.params.subscribe(val => {
		let visaAllValue = this.routers.snapshot.params["value"]
		this.visaApplicationService.visaTableList(visaAllValue).subscribe(
			data => {
				if(data!=null){
					this.ngProgress.done();
					this.pageHide = true;
					this.detailsName = data;
					this.visaTable = data.visa;
					this.visaTeblerequirements = this.visaTable[0];
					this.fromCountrySlugName = this.detailsName.from_country_name;
					this.inCountrySlugName = this.detailsName.to_country_name;
					this.nationalityChange = data.from_country_slug_name;
					this.travellingChange = data.to_country_slug_name;
					this.nationalityChangeName = data.from_country_name;
					this.travellingChangeName = data.to_country_name;
					if(this.visaTable.length == 0){
						this.tableShow = false;
						this.tableRequired = false;
						this.tableRegular = true;  
						this.dataShow = false;
					}else if(this.visaTable[0].visa_type!= 0){
						this.tableShow = true;
						this.tableRequired = false;
						this.tableRegular = false;
						this.dataShow = false;
					}else if(this.visaTable[0].visa_not_required!= 0){
						this.tableShow = false;
						this.tableRequired = true;
						this.tableRegular = false;
						this.dataShow = false;
					}else{
						this.tableShow = false;
						this.tableRequired = false;
						this.tableRegular = true; 
						this.dataShow = false;
					}
				}else{
					this.pade_error_show = true;
				}
			})
		})
	}

	radioChek(){
		$('.tableSelect tr').click(function() {
			$(this).find('td input:radio').prop('checked', true);
			$('.tableSelect tr').css({"background-color":"transparent"});
		    $(this).css({"background-color":"#e8e8e8"});
		})
	}

	formDetial(visa_type){
		this.currentVisa = visa_type;
		this.router.navigate(["apply-online",this.currentVisa]);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
	
	changeShapeOne(listName){
		this.dataShow = true;
		this.nationalityChange = listName.value;
		this.countryTwo = this.country
		let nationalityTwoPlaceObj = this.countryOne.filter(function(list){ return list.slug_country_name==listName.value;});
        this.countryTwo = $.grep(this.countryTwo, function(item) { 
            return item.name !== nationalityTwoPlaceObj[0].name;
		});
		this.snapOne()
		this.topCntryTwo = this.topFiveCNtry;
		let nationalityTopTwoPlaceObj = this.topCntryOne.filter(function(list){ return list.slug_country_name==listName.value;});
		this.topCntryTwo = $.grep(this.topCntryTwo, function(item) { 
            return item.name !== nationalityTopTwoPlaceObj[0].name;
		});
		this.snapOne()
		
	}

	snapOne(){
		this.fromCountrySlugName = this.nationalityChange;
		this.visaUrl = this.travellingChange.trim()+"-visas-for-"+this.nationalityChange.trim();
		this.router.navigate(["requirement",this.visaUrl]);
		this.visaApplicationService.visaTableList(this.visaUrl).subscribe(
			data => {
				this.visaTable = data.visa;
				this.dataShow = false;
			})
	}
	
	changeShapeTwo(listName){
		this.dataShow = true;
		this.travellingChange = listName.value;
		this.countryOne = this.country
		let nationalityOnePlaceObj = this.countryTwo.filter(function(list){ return list.slug_country_name==listName.value;});
		this.countryOne = $.grep(this.countryOne, function(item) { 
            return item.name !== nationalityOnePlaceObj[0].name;
		});
		this.snapTwo()
		this.topCntryOne = this.topFiveCNtry;
		let nationalityTopOnePlaceObj = this.topCntryTwo.filter(function(list){ return list.slug_country_name==listName.value;});
		this.topCntryOne = $.grep(this.topCntryOne, function(item) { 
            return item.name !== nationalityTopOnePlaceObj[0].name;
		});
		this.snapTwo()
	}

	snapTwo(){
		this.inCountrySlugName = this.travellingChange;
		this.visaUrl = this.travellingChange.trim()+"-visas-for-"+this.nationalityChange.trim();
		this.router.navigate(["requirement",this.visaUrl]);
		this.visaApplicationService.visaTableList(this.visaUrl).subscribe(
			data => {
				this.visaTable = data.visa;
				this.dataShow = false;
			})
	}

	ChangeBottom(i){
		this.visaTeblerequirements = this.visaTable[i]
		// $('html, body').animate({
		// 	scrollTop: $("#scrollTable").offset().top}, 1500);
	}

	getStartedApply(){
		this.moveForm = this.visaTeblerequirements.visa_type_slug
		this.router.navigate(["apply-online",this.moveForm]);
		document.body.scrollTop = document.documentElement.scrollTop = 0;  
	}

}
