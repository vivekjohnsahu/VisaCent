import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgProgress } from 'ngx-progressbar';
import { ActivatedRoute, Router } from '@angular/router';
import { VisaApplicationService } from '../../services/visa_application/visa-application.service';
import { CountriesListService } from '../../services/countries_list_home/countries-list.service'

@Component({
  selector: 'app-apply-e-visa',
  templateUrl: './apply-e-visa.component.html',
  styleUrls: ['./apply-e-visa.component.css'],
  providers: [ CountriesListService ]
})
export class ApplyEVisaComponent implements OnInit {

	countryShow:any;
	belong_to:any
	need_visa_for:any
	country:any;
	belongCnty:any;
	needForVisa:any;
	visaUrl:any;
	tableViasaToggle:boolean;
	visaApplyTbl:any;
	tableRequired:boolean;
	tableRegular:boolean;
	currentVisa:any;
	country_ctn:any; 
	country_ctnSet:any;
	topCntryTwo:any;
	topCntryOne:any;
	topFiveCNtry=[];

	constructor(
		public ngProgress: NgProgress,
		private router:Router,
		private visaApplicationService:VisaApplicationService,
		private routers : ActivatedRoute,
		private countriesListService:CountriesListService
	) {}

	ngOnInit() {
		this.ngProgress.start();
		$('#profile_trans').hide();
		this.countryShow =JSON.parse(localStorage.getItem('countrylist'));
		if(this.countryShow!=null || this.countryShow!=''){
			this.ngProgress.done();
			this.country = this.countryShow;
			this.belong_to = this.countryShow;
			this.need_visa_for = this.countryShow;
		}else{
			this.countriesListService.countriesList().subscribe(
				data => {
					this.ngProgress.done();
					this.country = data;
					this.belong_to = data;
					this.need_visa_for = data;
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
		this.visafor()
	}

  	changeBelong(listName){
		this.belongCnty = listName.value;
		this.need_visa_for = this.country
		let BelongToObj = this.belong_to.filter(function(list){ return list.slug_country_name==listName.value;});
		this.need_visa_for = $.grep(this.need_visa_for, function(item){ return item.name !== BelongToObj[0].name;});
		this.topCntryTwo = this.topFiveCNtry;
		this.visafor()
		let nationalityTopTwoPlaceObj = this.topCntryOne.filter(function(list){ return list.slug_country_name==listName.value;});
		this.topCntryTwo = $.grep(this.topCntryTwo, function(item) { 
            return item.name !== nationalityTopTwoPlaceObj[0].name;
        });
		this.visafor()
	}

	changeNeedVisa(listName){
		this.country_ctnSet = listName.value;
		this.belong_to = this.country
		let NeedVisaForObj = this.need_visa_for.filter(function(list){ return list.slug_country_name==listName.value;});
		this.belong_to = $.grep(this.belong_to, function(item){ return item.name !== NeedVisaForObj[0].name;});
		this.topCntryOne = this.topFiveCNtry;
		this.visafor()
		let nationalityTopOnePlaceObj = this.topCntryTwo.filter(function(list){ return list.slug_country_name==listName.value;});
		this.topCntryOne = $.grep(this.topCntryOne, function(item) { 
            return item.name !== nationalityTopOnePlaceObj[0].name;
        });
		this.visafor()
	}

	visafor(){
		if(this.belongCnty == undefined || this.belongCnty == ''){
			return;
		}else if(this.country_ctnSet == undefined || this.country_ctnSet == ''){
			return;
		}else{
			this.ngProgress.start();
			this.visaUrl = this.country_ctnSet+"-visas-for-"+this.belongCnty;
			this.visaApplicationService.visaTableList(this.visaUrl).subscribe(
				data => {
					if(data.status=='SUCCUSS'){
						this.ngProgress.done();
						this.visaApplyTbl = data.visa
						this.tableViasaToggle = true;
						if(this.visaApplyTbl.length == 0){
							this.tableViasaToggle = false;
							this.tableRequired = false;
							this.tableRegular = true;  
						}else if(this.visaApplyTbl[0].visa_type!= 0){
							this.tableViasaToggle = true;
							this.tableRequired = false;
							this.tableRegular = false;
						}else if(this.visaApplyTbl[0].visa_not_required!= 0){
							this.tableRequired = true;
							this.tableRegular = false;
							this.tableViasaToggle = false;
						}else{
							this.tableRequired = false;
							this.tableRegular = true; 
							this.tableViasaToggle = false;
						}
					}else if(data.status=='FAIL'){
						this.ngProgress.done();
						this.tableViasaToggle = false;
						this.tableRequired = false;
						this.tableRegular = true; 
					}
				})
		}  
	}

	visaDetial(visa){
		this.currentVisa = visa;
		this.router.navigate(["apply-online",this.currentVisa]);
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

}
