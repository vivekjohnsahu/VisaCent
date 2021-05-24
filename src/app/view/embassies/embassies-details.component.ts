import { Component, OnInit } from '@angular/core';
import { EmbOfInCountryService } from '../../services/emb_of_in_country/emb-of-in-country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmbassiesCityDetailsService } from '../../services/embassies_city_details/embassies-city-details.service'
import { NgProgress } from 'ngx-progressbar';
import * as $ from 'jquery';
import { UserInputCntdetailsService } from '../../services/userInputCntdetails/user-input-cntdetails.service'

@Component({
  selector: 'app-embassies-details',
  templateUrl: './embassies-details.component.html',
  styleUrls: ['./embassies-details.component.css'],
  providers: [ EmbOfInCountryService, EmbassiesCityDetailsService, UserInputCntdetailsService]
})
export class EmbassiesDetailsComponent implements OnInit {

	inCountry:any;
	ofCountry:any;
	countydetails:any;
	alldetail:any;
	of_cn:any;
	in_cn:any;
	id:any;
	country_name:any;
	slug_name:any;
	loaderShow:boolean;
	cousulateSlug:any;
	btnName:any;
	pageHide:boolean;
	phoneMulti:any;
	phoneM:any;
	countydetailsNew:any;
	faxMulti:any;
	emaiMulti:any;
	websiteMulti:any;
	faxMultiM:any;
	emaiM:any;
	websiteM:any;
	pade_error_show:boolean;
	countyNameOf:any;
	countyNameIn:any;
	grecaptcha:any;
	captchaError:boolean;
	captchaError_msg:any;
	name:any;
	updating_msg:boolean;
	Address:any;
	Phone:any;
	Fax:any;
	Email:any;
	Website:any;
	comments:any;
	nweipAddress
	latitude:any;
	longitude:any;
	userFileData={}
	updating:boolean;
	success_msg_error:boolean;
	success_msg:any;
	msg_error:boolean;
	erro_msg:any;
	regExEmail="^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";
	numberRegEx = "^(0|[0-9][0-9]*)$"
	Landmark:any;
	WorkingTime:any;

	constructor(
		private embOfInCountryService:EmbOfInCountryService,
		private router : ActivatedRoute,
		private routers : Router,
		public ngProgress: NgProgress,
		private embassiesCityDetailsService:EmbassiesCityDetailsService,
		private userInputCntdetailsService:UserInputCntdetailsService
	) { }

	ngOnInit() {
		$('#profile_trans').hide();
		this.ngProgress.start();
		$.getJSON('https://jsonip.com?callback=?', function(response) {
			this.ipAddress=response.ip
			$('#spn_ip').text(this.ipAddress);
		});	
		this.router.params.subscribe(val => {
		this.country_name = this.router.snapshot.params["value"];
		this.embOfInCountryService.getparticulatrid(this.country_name).subscribe(
			data => {
				if(data.status == 'SUCCESS'){
					if(data!=null){
						this.ngProgress.done();
						this.pageHide = true;
						this.countydetails = data;
						this.countydetailsNew = data.data;
						this.countyNameOf = data.of_country;
						this.countyNameIn = data.in_coutnry;
						for(var i=0;i<this.countydetailsNew.length;i++){
							if(this.countydetailsNew[i].Telepone!=null && $.trim(this.countydetailsNew[i].Telepone)!='' && $.trim(this.countydetailsNew[i].Telepone)!=' '){
								this.phoneMulti = this.countydetailsNew[i].Telepone;
								this.phoneM =this.phoneMulti.split('<br />');
								this.countydetailsNew[i].phoneM1 = this.phoneM;
								this.countydetailsNew[i].lnthTelepone=1;
							}else{
								this.countydetailsNew[i].lnthTelepone=0;	
							}

							if(this.countydetailsNew[i].Fax!=null && $.trim(this.countydetailsNew[i].Fax)!='' && $.trim(this.countydetailsNew[i].Fax)!=' '){
								this.faxMulti = this.countydetailsNew[i].Fax;
								this.faxMultiM =this.faxMulti.split('<br />');
								this.countydetailsNew[i].faxMultiM1 = this.faxMultiM;
								this.countydetailsNew[i].lnthFax=1;
							}else{
								this.countydetailsNew[i].lnthFax=0;	
							}
				
							if(this.countydetailsNew[i].E_maiil!=null && $.trim(this.countydetailsNew[i].E_maiil)!='' && $.trim(this.countydetailsNew[i].E_maiil)!=' '){
								this.emaiMulti = this.countydetailsNew[i].E_maiil;
								this.emaiM =this.emaiMulti.split('<br />');
								// $( ".gmailhide span").hide();
								this.countydetailsNew[i].emaiM1 = this.emaiM;
								this.countydetailsNew[i].lnthE_maiil=1;
							}else{
								this.countydetailsNew[i].lnthE_maiil=0;	
							}

							if(this.countydetailsNew[i].website!=null && $.trim(this.countydetailsNew[i].website)!='' && $.trim(this.countydetailsNew[i].website)!=' '){
								this.websiteMulti = this.countydetailsNew[i].website;
								this.websiteM =this.websiteMulti.split('<br />');
								this.countydetailsNew[i].websiteM1 =this.websiteM;
								this.countydetailsNew[i].lnthwebsite=1;
							}else{
								this.countydetailsNew[i].lnthwebsite=0;	
							}
						}
					}
						this.inCountry = data.in_country_slug_name;
						this.ofCountry = data.of_country_slug_name;
						this.btnName = this.countydetails.of_country;	
				}else if(data.status == 'ERROR'){
					this.ngProgress.done();
					this.pade_error_show = true;
				}else{
					//do nothing
				}
			})
		})
		
	}

	resolved(captchaResponse: string) {
		this.grecaptcha = captchaResponse;
		this.captchaError = false;
	}
	update_btn(){
		let flg=0;
		if($('#namef').text()==''){
			$('#namef').addClass('borderCls')
			flg=1;
		}if($('#address').text()==''){
			$('#address').addClass('borderCls')
			flg=1;
		}if($('#telephone').text()!=''){
			let p = $('#telephone').text()
			if(!(p.match(this.numberRegEx))){
				$('#telephone').addClass('borderCls')
				flg=1;
			}
		}if($('#email').text()!=''){
			let e = $('#email').text()
			if(!(e.match(this.regExEmail))){
				$('#email').addClass('borderCls')
				flg=1;
			}
		}
		if(this.grecaptcha === undefined){
			this.captchaError = true;
			this.captchaError_msg = "Please enter captcha"
			flg=1;
		}
		if(flg==1){
			return;
		}else{
			this.captchaError = false;
			this.updating = true;
			this.name =$('#namef').text();
			this.Address =$('#address').text();
			this.Phone =$('#telephone').text();
			this.Fax =$('#fax').text();
			this.Email =$('#email').text();
			this.Website =$('#website').text();
			this.comments =$('#comments').text();
			this.latitude =$('#latitude').text();
			this.longitude =$('#longitude').text();
			this.Landmark =$('#Landmark').html();
			this.WorkingTime=$('#WorkingTime').text();
			this.nweipAddress=$('#spn_ip').text();
		}
		this.userFileData={
			name:this.name,
			address:this.Address,
			phone:this.Phone,
			fax:this.Fax,
			email:this.Email,
			website:this.Website,
			latitude:this.latitude,
			longitude:this.longitude,
			landmark:this.Landmark,
			workingTime:this.WorkingTime,
			comments:this.comments,
			ipAddress:this.nweipAddress,
			of_cn:'',
			in_cn:'',
			slug:this.country_name,
			emb_type:'embassies',
		}
		this.userInputCntdetailsService.userInputData(this.userFileData).subscribe(
			data => {
				if(data='SUCCESS'){
					this.updating = false;
					this.success_msg_error = true;
					this.success_msg = 'you have any detail send' 
				}else if(data='ERROR'){
					this.updating = false;
					this.msg_error = true;
					this.erro_msg = 'you have any detail send'
				}else{
					// do nothing
				}
			})
	}

	ErrorRermoveAdd(){
		$('#address').removeClass('borderCls')
	}
	ErrorRermoveName(){
		$('#namef').removeClass('borderCls')
	}
	ErrorRermovePhn(){
		$('#telephone').removeClass('borderCls')
	}
	ErrorRermoveEml(){
		$('#email').removeClass('borderCls')
	}

}
