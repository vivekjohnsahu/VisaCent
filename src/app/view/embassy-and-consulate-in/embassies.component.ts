import { Component, OnInit, Inject  } from '@angular/core';
import { EmbParticularCountryService } from '../../services/emb_particular_country/emb-particular-country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmbassiesCounrtiesListService } from '../../services/embassies_countries_list/embassies-counrties-list.service';
import * as $ from 'jquery';
import { NgProgress } from 'ngx-progressbar';
import { UserInputCntdetailsService } from '../../services/userInputCntdetails/user-input-cntdetails.service'


@Component({
  selector: 'app-embassies',
  templateUrl: './embassies.component.html',
  styleUrls: ['./embassies.component.css'],
  providers: [ EmbParticularCountryService, EmbassiesCounrtiesListService, UserInputCntdetailsService, ]
})
export class EmbassiesComponent implements OnInit {

	details:any;
	embassies:any;
	countryname:any;
	countryid:any;
	click_country_id:any
	cityid:any;
	cntName:any;
	urlName:any;
	countryChange:any;
	countryChangeObj:any;
	cntNamechange:any;
	loaderShow:boolean;
	loaderHide:boolean;
	urlconsulate_in:any;
	city_slug_name:any;
	loaderShow_first:boolean;
	dataShow:boolean;
	pageHide:boolean;
	pade_error_show:boolean;
	ipAddress:any;
	form=1
	Landmark:any;
	WorkingTime:any;
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
	title

	constructor(
		private embParticularCountryService:EmbParticularCountryService,
		private router : ActivatedRoute,
		private embassiesCounrtiesListService:EmbassiesCounrtiesListService,
		private routers : Router,
		public ngProgress: NgProgress,
		private userInputCntdetailsService:UserInputCntdetailsService,
	) {
		this.title=' All foreign Embassies and Consulates General in India & Other Representations in India';
		$("meta[name='description']").attr("content", this.title); 
		$("meta[name='title']").attr("content", this.title); 
	}

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
		this.click_country_id = this.router.snapshot.params["id"]
		this.embParticularCountryService.getcountryid(this.click_country_id).subscribe(
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
					this.cntName = data.slug_country_name
					this.cntNamechange = this.cntName;
				}else{
					this.pade_error_show = true;
				}
			})
		})
		$('select > option:first').hide();
	}

	// addMetaTags(){
    //     this.meta.addTags([
	// 		{name: 'title', content: 'All foreign Embassies and Consulates General in India & Other Representations in India'},
	// 		{name: 'description', content: 'This is a list of foreign Embassies and Consulates in India. The capital of India, New Delhi hosts 151 embassies/high commissions, and in addition there are 254 consulates and 18 other representations in India. You can find all Embassies, high commissions and consulates in India.'},  
	// 		{name: 'keywords', content: 'Embassies in India, Consulates in India, Other Representations in India, Embassy in India, high commission in India, All foreign Embassies and Consulates in India, Consulate General & other Representations in India.'},
    //        	{name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD'},
    //     ]);
   	// } 

   	// removeMetaTags(){
	// 	this.meta.removeTag('name = "description"');        
	// 	this.meta.removeTag('name= "keywords"');
	// 	this.meta.removeTag('name = "title"');
	// 	let date: HTMLMetaElement = this.meta.getTag('name = "date"');
	// 	this.meta.removeTagElement(date);
	// }       

	changeCountry(id){
		this.cntNamechange = id.value;
		this.countryChangeObj = this.cntNamechange.trim();
		this.embParticularCountryService.getcountryid(this.countryChangeObj).subscribe(
			data => {	
				this.countryname = data.country;
				this.details = data;
			})
			this.reload()
	}

	reload(){
		this.urlconsulate_in = this.cntNamechange.trim();
		this.routers.navigate(["embassy-and-consulate-in",this.urlconsulate_in]);
	}

	// pageOff(){
	// 	this.cntNamechange;
	// 	this.urlName=this.cntNamechange;
	// 	this.routers.navigate(["embassy-and-consulate-of",this.urlName]);
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
			landmark:this.Landmark,
			workingTime:this.WorkingTime,
			of_cn:'',
			in_cn:this.click_country_id,
			slug:'',
			emb_type:'',
		}
		this.userInputCntdetailsService.userInputData(this.userFileData).subscribe(
			data => {
				if(data='SUCCESS'){
					this.updating = false;
					this.success_msg_error = true;
					this.success_msg = 'Infromation sent successfully!' 
                    $(document).ready(function(){
                    setTimeout(function(){
                        $('.myalert').fadeOut('fast');}, 3000);
                        $('.myalert').fadeIn();
                    })
				}else if(data='ERROR'){
					this.updating = false;
					this.msg_error = true;
					this.erro_msg = 'Error!Information did not send!'
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
