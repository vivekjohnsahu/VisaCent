import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CountriesListService } from '../../services/countries_list_home/countries-list.service';
import { ContactUsService } from '../../services/contact_us/contact-us.service';
import { FlagValueService } from '../../services/flagValue/flag-value.service'

export interface contactUs{
    name: any;
	email:any;
	mag:any;
	phone: any;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [ CountriesListService, ContactUsService, FlagValueService ]
})
export class ContactUsComponent implements OnInit {

	contactU:contactUs
	name:string;
	email:any;
	phnNumber:any;
	msg:any;
	regExEmail="^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";
	nationality_list:any;
	grecaptcha:any;
	captchaError:boolean;
	captchaError_msg:string;
	contactFormData:{};
	req:any;
	nationalityNew:any;
	type:any;
	chek_msg:boolean;
	chek_msg_error:boolean;
	flagDrop:any;
	codeCnt:any;
	contactNm:any;

  	constructor(
		  private countriesListService:CountriesListService,
		  private contactUsService:ContactUsService,
		  private flagValueService:FlagValueService
	  ) {}

	ngOnInit() {	
		this.flagDrop = this.flagValueService.flagMethod()	
		$('#profile_trans').hide();
		$(document).ready(function(){
			$(".contact_side>ul>li").click(function(){
				var content = $(this).text();
				$(".contact_side>ul>li").removeClass("active_content");
				$(this).addClass("active_content");
				$("#contact_head_dy").text(content);
			});
		});

		var cntcode = JSON.parse(localStorage.getItem('user'));
		if(cntcode!==null){
			this.codeCnt = cntcode.number.split(" ")
			this.codeCnt = this.codeCnt[0]
		}
		var cntList = JSON.parse(localStorage.getItem('countrylist'));
		if(cntList!="" && cntList!=undefined){
			this.nationality_list = cntList;
		}else{
			this.countriesListService.countriesList().subscribe(
				data => {
					this.nationality_list = data;
				})
		}
		this.contactU ={
			name:'',
			email:'',
			mag:'',
			phone:'',	
		}

		this.type = $('#RequestValue').html();
		
	}

	isNumberKey(evt){
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
		return true;
	}


	resolved(captchaResponse: string) {
		this.grecaptcha = captchaResponse;
		this.captchaError = false;
	}
	
	nationality(nationalitycity){
		this.nationalityNew = nationalitycity.value;
   	}	

	type1(){
		this.type = $('#RequestValue').html();
	}
	type2(){
		this.type = $('#ReportValue').html();
	}
	type3(){
		this.type = $('#FindValue').html();
	}
	
	contactData(){
		let flag=0;
		let fild='';
		if(this.contactU.name == "" || this.contactU.name == undefined){
			$(".nameOne").addClass("borderColor");
			flag=1;
			{
				fild='lbl_name';
			}
		}if(this.contactU.email == "" || this.contactU.email == undefined){
			$(".emailOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_email';
			}
		}if(!this.contactU.email.match(this.regExEmail)){
			$(".emailOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_email'
			}	
		}if(flag==1){
			$('html, body').animate({
				scrollTop: $("#"+fild).offset().top
			}, 800);
			return;
		}
		if(this.grecaptcha === undefined){
			this.captchaError = true;
			this.captchaError_msg = "Please enter captcha"
			return false;
		}	
		var flgval=$('#flagVle').val()
		this.contactNm = flgval+' '+this.contactU.phone
		let obj={
			name:this.contactU.name,
			email:this.contactU.email,
			phone:this.contactNm,
			mag:this.contactU.mag
		}
		
		this.nationalityNew = $('#id_City').val();
		this.contactFormData={
			nationality:this.nationalityNew,
			contactU:obj,
			type:this.type
		}

		this.contactUsService.contact(this.contactFormData).subscribe(
			data => {
				if(data.status == 'SUCCESS'){
					this.chek_msg = true
					$(document).ready(function(){
						setTimeout(function(){
                            $('#myalert').fadeOut('fast');}, 3000);
                            $('#myalert').fadeIn();
					    })
					$("html, body").animate({ scrollTop: 0}, 'slow');
				}else if(data.status == 'ERROR'){
					this.chek_msg_error = true;
					$(document).ready(function(){
						setTimeout(function(){$('#mydiv_error').fadeOut('fast');}, 3000);$('#mydiv_error').fadeIn('slow');
					})
					$("html, body").animate({ scrollTop: 0}, 'slow');
				}
			})
	}

	cleanName(){
		$(".nameOne").removeClass("borderColor");
	}
	cleanGmail(){
		$(".emailOne").removeClass("borderColor");
	}
	
}
