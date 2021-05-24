import { Component, OnInit } from '@angular/core';
import { EmbParticularCountryService } from '../../services/emb_particular_country/emb-particular-country.service'
import { ActivatedRoute, Router } from '@angular/router';
import { EmbassiesCounrtiesListService } from '../../services/embassies_countries_list/embassies-counrties-list.service';
import * as $ from 'jquery';
import { NgProgress } from 'ngx-progressbar';
import { UserInputCntdetailsService } from '../../services/userInputCntdetails/user-input-cntdetails.service'


@Component({
  selector: 'app-embassies-country',
  templateUrl: './embassies-country.component.html',
  styleUrls: ['./embassies-country.component.css'],
  providers: [ EmbParticularCountryService, EmbassiesCounrtiesListService, UserInputCntdetailsService]
})
export class EmbassiesCountryComponent implements OnInit {

	details:any;
	countryname:any;
	embassies:any;
	countryid:any;
	idany:any;
	country_id:any;
	countryChangeObj:any;
	urlName:any;
	cityid:any;
	loaderShow:boolean;
	loaderHide:boolean;
	city_slug_name:any;
	urlconsulate_Of:any;
	pageHide:boolean;
	pade_error_show:boolean;
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
	form=1;
	spn_ip:any;
	Landmark:any;
	WorkingTime:any;

	constructor(
		private embParticularCountryService:EmbParticularCountryService,
		private router:ActivatedRoute,
		private embassiesCounrtiesListService:EmbassiesCounrtiesListService,
		private routers : Router,
		public ngProgress: NgProgress,
		private userInputCntdetailsService:UserInputCntdetailsService
	) { }

	ngOnInit() {
		this.ngProgress.start();
		$.getJSON('https://jsonip.com?callback=?', function(response) {
			this.ipAddress=response.ip
			$('#spn_ip').text(this.ipAddress);
		});	
		$('#profile_trans').hide();
		this.embassiesCounrtiesListService.countryList().subscribe(
		data => {
			this.embassies = data;
		})
		this.router.params.subscribe(val => {
		this.country_id = this.router.snapshot.params["id"];
		this.embParticularCountryService.off_list(this.country_id).subscribe(
			data => {
				if(data!=null){
					this.ngProgress.done();
					this.pageHide = true;
					this.details = data;
					if((this.details.is_embassy>0) || (this.details.is_consulate>0) || (this.details.is_represent> 0) ){
						this.form=1
					}else{
						this.form=0
					}
					this.countryname = data.country;
					this.cityid = data.slug_country_name;
					this.countryid = this.cityid;
				}else{
					this.pade_error_show = true;
				}	
			})
		})
		$('select > option:first').hide();
	}

	changeCountry(id){
		this.countryid=id.value;
		this.countryChangeObj=this.countryid.trim();
		this.embParticularCountryService.off_list(this.countryChangeObj).subscribe(
			data => {
				this.details = data; 
				this.countryname = data.country;
			})
			this.reload()
	}

	reload(){
		this.urlconsulate_Of = this.countryid.trim();
		this.routers.navigate(["embassy-and-consulate-of",this.urlconsulate_Of]);
	}
	
	// pageIn(){
	// 	this.countryid;
	// 	this.urlName = this.countryid;
	// 	this.routers.navigate(["embassy-and-consulate-in",this.urlName]);
	// }

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
			this.nweipAddress=$('#spn_ip').text();
			this.Landmark =$('#Landmark').html();
			this.WorkingTime=$('#WorkingTime').text();
		}
		this.userFileData={
			name:this.name,
			address:this.Address,
			phone:this.Phone,
			fax:this.Fax,
			email:this.Email,
			website:this.Website,
			comments:this.comments,
			ipAddress:this.nweipAddress,
			of_cn:this.country_id,
			landmark:this.Landmark,
			workingTime:this.WorkingTime,
			in_cn:'',
			slug:'',
			emb_type:'',
		}
		this.userInputCntdetailsService.userInputData(this.userFileData).subscribe(
			data => {
				if(data='SUCCESS'){
					this.updating = false;
					this.success_msg_error = true;
					this.success_msg = 'Send successfully!' 
                    $(document).ready(function(){
						setTimeout(function(){
                            $('.myalert').fadeOut('fast');}, 3000);
                            $('.myalert').fadeIn();
					    })
				}else if(data='ERROR'){
					this.updating = false;
					this.msg_error = true;
					this.erro_msg = 'Error! did not send!'
                    $(document).ready(function(){
						setTimeout(function(){
                            $('.myalert').fadeOut('fast');}, 3000);
                            $('.myalert').fadeIn();
					    })
                    
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
