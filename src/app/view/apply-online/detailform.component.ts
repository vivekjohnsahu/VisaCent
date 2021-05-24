import { Component, OnInit, AfterViewChecked } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDetailsService } from '../../services/form_details/form-details.service';
import { RegisterFormService } from '../../services/register_form/register-form.service';
import { NgProgress } from 'ngx-progressbar';
import { NationalityPriceService } from '../../services/nationality_price/nationality-price.service'
import '../../../assets/js/intlTelInput.min.js';
import { FlagValueService } from '../../services/flagValue/flag-value.service'
import { LoginService } from '../../services/login/login.service'

export interface registerusers{
    name: any;
    email:any;
	number: any;
	arrivalDate: any;
	}

@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.component.html',
  styleUrls: ['./detailform.component.css'],
  providers: [ FormDetailsService, RegisterFormService, NationalityPriceService, FlagValueService, LoginService ],
})
export class DetailformComponent implements OnInit  {

	registeruser:registerusers;
	pageHide:boolean;
	country:any;
	details:any;
	name:any;
	email:any;
	regExEmail="^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";
	number:any;
	passportRegEx="^(?!^0+$)[a-zA-Z0-9]{3,20}$"
	arrival_date:any;
	// departure_date:any;
	firstname:any;
	lastname:any;
	bday_date:any;
	passport_number:any;
	numberRegEx = "^(0|[0-9][0-9]*)$"
	passport_issue_date:any;
	passport_expiration:any;
	modify_btn:boolean;
	update_btn:boolean;
	modify_btnTwo:boolean;
	modify_btnThree:boolean;
	modify_btnfour:boolean;
	update_btnTwo:boolean;
	update_btnThree:boolean;
	update_btnFour:boolean;
	selecyCountyName:any;
	otherVisa:any=[];
	selectVisa:any;
	passport_Issue_Place:any;
	portOfArrival:any;
	nationalityPlace:any;
	gender:any;
	visa_type:any;
	currencyCounty:any;
	processing:any;
	users: any[] = [1];
	errorShow:any;
	loaderShow:boolean;
	formAllData:{};
	next_btn_hide:boolean;
	submit_btn_hide:boolean;
	visa_cost:any;
	chek_msg:boolean;
	total_cost:any;
	service_fee:any;
	visa_selected:any;
	visa_other:any;
	total_cost_update:any
	spinner:boolean;
	rushPrecessing_fee:any;
	superPrecessing_fee:any;
	addUser_btn:boolean;
	port_Of_Arrival:any
	// travellingTo:any;
	urlNationalityPlace:any;
	nationalityName:any;
	visaName:any;
	addScript : boolean = false;
	paypalLoad : boolean = true;
	dataall:any;
	nationalityNamePrice:any;
	to_country_slug_name:any;
	to_country_name:any;
	visa_cost_arr: any[] = [];
	visa_service_fee_arr: any[] = [];
	ttl_appli=0;
	day:any;
	month:any;
	year:any;
	priceSighn:any;
	arrival_current_Date:{}
	user_applicant:any[] = [];
	birthdayDate: any[] = [];
	passport_Issue_Date: any[] = [];
	passportExpiration: any[] = [];
	error_chek_msg:boolean;
	fail_chek_msg:boolean;
	error_chek_msg_show:string;
	fail_chek_msg_show:string;
	grecaptcha:any;
	captchaError:boolean;
	captchaError_msg:string;
	order_id:any;
	local_day:any;
    process:boolean;
	to_countryId:any
	visa_selectdd_Id:any;
	rush_precessing_time:any;
	rush_processing_type:any;
	superprecessing_time:any;
	superprocessing_type:any;
	rushId:any;
	superId:any;
	inpu_disabled_val:any;
	flagDrop:any;
	codeCnt:any;
	fulNumner:any
	emailPage:boolean;
	otpPage:boolean;
	loginEmail:any;
	loginPassword:any;
	login_msg:string;
	login_msg_sus:boolean;
	OTP:any;
	otp_msg_sus:boolean;
	otp_msg:string;
	loginpage:boolean;
	forgot_msg_sus:boolean;
	forgot_msg_error:boolean;
	forgot_msg:any;
	forgot_error_msg:any;
	EmailForgot:any;
	forgotnpage:boolean;
	otp_msg_sus_user:boolean;
	otp_msg_sus_show:string;
	nextBtn_dis=0;

	constructor(
		private router : ActivatedRoute,
		private routers : Router,
		private formDetailsService:FormDetailsService,
		private registerFormService:RegisterFormService,
		public ngProgress: NgProgress,
		private nationalityPriceService:NationalityPriceService,
		private flagValueService:FlagValueService,
		private loginService:LoginService
	) {
		// var cmd=this;
		// setTimeout(function(){
		// 	cmd.add_phone_icon();
		// },200);	
		// this.visa_selectdd_Id[0].id
	 }

	radioChek(rbtn){
		$('input.'+rbtn).prop('checked', true);
		let processings = ($('input.'+rbtn).val());
		this.processing = processings;
	}

	ngOnInit() {	
		this.ngProgress.start();
		$('#profile_trans').hide();
		this.flagDrop = this.flagValueService.flagMethod()
		$(function() {
			 for (var i=1; i<=31; i++){
			  this.dataall = $('.day_tes1_1').append('<option value="' + i + '">' + i + '</option>');
			 }
		});
		$(function() {
			var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
				for (var i=1; i<=12; i++){
					$('.month_tes1_1').append('<option value="' + ("0" + i).slice(-2) + '">' + monthtext[i - 1]  + '</option>');
				}
		});
		$(function() {
			var start_year = new Date().getFullYear();
				for (var i = start_year; i > start_year - 80; i--) {
					$('.yearSelect').append('<option value="' + i + '">' + i + '</option>');
				}
		});
		$(function() {
			var start_year = new Date().getFullYear();
				for (var i = start_year; i < (start_year+3); i++) {
					$('.yearSelectExpiration').append('<option value="' + i + '">' + i + '</option>');
				}
		});
		$(function() {
			var start_year = new Date().getFullYear();
				for (var i = start_year; i < (start_year+50); i++) {
					$('.passSelectExpiration').append('<option value="' + i + '">' + i + '</option>');
				}
		});
			
		this.processing =$('.radiochek').val();
		this.router.params.subscribe(val => {
		let currentValue = this.router.snapshot.params["value"];
		this.formDetailsService.getformdata(currentValue).subscribe(
			data => {
				if(data!=null){
					this.ngProgress.done();
					this.pageHide = true;
					this.details = data;
					this.country = data.nationality
					this.to_country_name = data.to_country_name;
					this.to_countryId = data.to_country_id;
					this.port_Of_Arrival = this.details.ports
					this.selecyCountyName = this.details.from_country_name;
					this.otherVisa =  this.details.other_visa;
					this.selectVisa = this.details.visa;
					this.visa_cost = this.details.visa[0].visa_cost;
					this.service_fee = this.details.visa[0].service_fee;
					this.visa_selected = this.details.visa;
					this.visa_selectdd_Id = this.details.visa[0].id;
					this.visa_other = this.details.visa_processing;
					this.rushPrecessing_fee = this.visa_other[0].precessing_fee;
					this.rush_precessing_time = this.visa_other[0].precessing_time;
					this.rush_processing_type = this.visa_other[0].processing_type
					this.rushId = this.visa_other[0].id;
					this.superPrecessing_fee = this.visa_other[1].precessing_fee;
					this.superprecessing_time = this.visa_other[1].precessing_time;
					this.superprocessing_type = this.visa_other[1].processing_type;
					this.superId = this.visa_other[1].id
					this.total_cost = +this.visa_cost + +this.service_fee;
					this.to_country_slug_name = data.to_country_slug_name;
					this.visa_cost_arr.push(this.details.other_visa);	
					$('#visa_cost_0').val(this.details.visa[0].visa_cost);
					$('#visa_service_0').val(this.details.visa[0].service_fee);
					localStorage.setItem('to_country_name', JSON.stringify(this.to_country_name));
				}
			})
			this.totalCost();
		})

		var user = JSON.parse(localStorage.getItem('user'));
		if(user!==null){
			this.nextBtn_dis=1;
			this.inpu_disabled_val=1;
			this.codeCnt = user.number.split(" ")
			this.codeCnt = this.codeCnt[0]
			let n =user.number.split(" ")
			this.registeruser ={
				name:user.name,
				email:user.email,
				number:n[1],
				arrivalDate: '',
			}	
		}else{
			this.inpu_disabled_val=0;
			this.registeruser ={
				name: '',
				email:'',
				number: '',
				arrivalDate: '',
			}	
		}
		
		this.ErrorClickHide()
		this.priceSighn = $('#priceSighn').val();	

	}

	ArrivalDate(d){
		this.day = d.value 
	}
	ArrivalMonth(m){
		this.month = m.value 
	}
	ArrivalYear(y){
		this.year = y.value 
	}

	resolved(captchaResponse: string) {
		this.grecaptcha = captchaResponse;
		this.captchaError = false;
    }

	formfilslide(btn){

		$('#flagDropVlu').change(function(){
			$(".flagEr").removeClass("borderColor");
		})
		let userApplicants=[];
		let flag=0;
		let fild='';
		if(this.registeruser.name == "" || this.registeruser.name == undefined){
			$(".nameOne").addClass("borderColor");
			flag=1;
			fild='lbl_name';
		}
		if(this.registeruser.email == "" || this.registeruser.email == undefined){
			$(".emailOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_email'
			}
		}
		if(!this.registeruser.email.match(this.regExEmail)){
			$(".emailOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_email'
			}
		}
		if(this.nextBtn_dis==0){
			$(".emailOne").addClass("borderColor");
			$(".emailNotVerified").html("Email is not verified..");
			flag=1;
			if(fild=='')
			{
				fild='lbl_email'
			}
		}
		if(this.registeruser.number == "" || this.registeruser.number == undefined){
			$(".numberOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_number'
			}
		}if(!(this.registeruser.number.length >= 6)){
			$(".numberOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_number'
			}
		}if(!(this.registeruser.number.match(this.numberRegEx))){
			$(".numberOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_number'
			}
		}if($('#flagDropVlu').val() == "" || $('#flagDropVlu').val() == undefined){
			$(".flagEr").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_number'
			}
		}if(this.day =='' || this.day == undefined){
			$(".day_tes1_1").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_arrival_date'
			}
		}
		if(this.month =='' || this.month == undefined){
			$(".month_tes1_1").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_arrival_date'
			}
		}
		if(this.year =='' || this.year == undefined){
			$(".year_tes1_1").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_arrival_date'
			}
		}

		$('.year_tes1_1').each(function(){
			var yr=$("#arrival_day_id_3").val();
			var mn=$("#arrival_day_id_2").val();
			var dy=$("#arrival_day_id_1").val();

			var curr_year = new Date().getFullYear();
			var curr_mon = (new Date().getMonth())+1;
			var curr_day = new Date().getDate();

			if(yr<curr_year){
				flag=1;
				$('.year_tes1_1').addClass("borderColor");
				$('#error_msg_arrival').text("please select valid year");
				if(fild=='')
				{
					fild='lbl_arrival_date';
				}
			}
			else if(yr==curr_year){
				if(mn<curr_mon){
					flag=1;
					$('.month_tes1_1').addClass("borderColor");
					$('#error_msg_arrival').text("please select valid month");
					if(fild=='')
					{
						fild='lbl_arrival_date';
					}
				}else if(mn==curr_mon){
					
					if(dy<curr_day)
					{
						flag=1;
						$('.day_tes1_1').addClass("borderColor");
						$('#error_msg_arrival').text("please select valid day");
						if(fild=='')
						{
							fild='lbl_arrival_date';
						}
					}
				}
			}
		})
		
		let id_m=0;
		$('.firstnameOne').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_firstname'+id_m;
				}
			}
			id_m++;
		})
		let lbl_bday_date_d=0;
		$('.test_article1').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_bday_date'+lbl_bday_date_d;
				}
			}
			lbl_bday_date_d++;

		})
		let lbl_bday_date_m=0;
		$('.test_article2').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_bday_date'+lbl_bday_date_m;
				}
			}
			lbl_bday_date_m++;
		})

		let lbl_bday_date_y=0;
		$('.test_article3').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_bday_date'+lbl_bday_date_y;
				}
			}
			lbl_bday_date_y++;
		})
		let birt_date_valid=0;
		$('.test_article3').each(function(){
			var yr=$("#yearSelect"+birt_date_valid).val();
			var mn=$("#MonthSelect"+birt_date_valid).val();
			var dy=$("#dateSelect"+birt_date_valid).val();

			var curr_year = new Date().getFullYear();
			var curr_mon = (new Date().getMonth())+1;
			var curr_day = new Date().getDate();

			if(yr>curr_year){
				flag=1;
				$("#yearSelect"+birt_date_valid).addClass("borderColor");
				$('#error_msg_birth'+birt_date_valid).text("please select valid year");
				if(fild=='')
				{
					fild='lbl_bday_date'+birt_date_valid;
				}
			}
			else if(yr==curr_year){
				if(mn>curr_mon){
					flag=1;
					$("#MonthSelect"+birt_date_valid).addClass("borderColor");
					$('#error_msg_birth'+birt_date_valid).text("please select valid month");
					this.dsfabc_id=$("#error_msg_birth"+birt_date_valid)
					if(fild=='')
					{
						fild='lbl_bday_date'+birt_date_valid;
					}
				}else if(mn==curr_mon){
					
					if(dy>curr_day)
					{
						flag=1;
						$("#dateSelect"+birt_date_valid).addClass("borderColor");
						$('#error_msg_birth'+birt_date_valid).text("please select valid day");
						if(fild=='')
						{
							fild='lbl_bday_date'+birt_date_valid;
						}
					}
				}	
			}
			birt_date_valid++;
		})
		let passport_number=0;
		$('.passport_number').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_number'+passport_number;
				}
			}
			passport_number++;
		})
		// $('.passport_number').each(function(){
		// 	if(!$.trim($(this).val()).match(this.passportRegEx)){
		// 	flag=1;
		// 		$(this).addClass("borderColor");
		// 		if(fild=='')
		// 		{
		// 			fild='lbl_passport_number'+passport_number;
		// 		}
		// 	}
		// 	passport_number++;
		// })
		let passport_issue_d=0;
		$('.passportIssue1').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_issue_date'+passport_issue_d;
				}
			}
			passport_issue_d++;
		})
		let passport_issue_m=0;
		$('.passportIssue2').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_issue_date'+passport_issue_m;
				}
			}
			passport_issue_m++;
		})
		let passport_issue_y=0;
		$('.passportIssue3').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_issue_date'+passport_issue_y;
				}
			}
			passport_issue_y++;
		})

		let pass_date_valid=0;
		$(".passportIssue3").each(function(){
			var yr=$("#passportIssueYearErrerHide"+pass_date_valid).val();
			var mn=$("#passportIssueMonthErrerHide"+pass_date_valid).val();
			var dy=$("#passportIssueDayErrerHide"+pass_date_valid).val();

			var curr_year = new Date().getFullYear();
			var curr_mon = (new Date().getMonth())+1;
			var curr_day = new Date().getDate();

			if(yr>curr_year){
				flag=1;
				
				$("#passportIssueYearErrerHide"+pass_date_valid).addClass("borderColor");
				$('#error_msg_pass'+pass_date_valid).text("please select valid year");
				if(fild=='')
				{
					fild='lbl_passport_issue_date'+pass_date_valid;
				}
			}
			else if(yr==curr_year){
				if(mn>curr_mon){
					flag=1;
					
					$("#passportIssueMonthErrerHide"+pass_date_valid).addClass("borderColor");
					$('#error_msg_pass'+pass_date_valid).text("please select valid month");
					if(fild==''){
						{
							fild='lbl_passport_issue_date'+pass_date_valid;
						}
					}
				}else if(mn==curr_mon){
					
					if(dy>curr_day)
					{
						flag=1;
					
						$("#passportIssueDayErrerHide"+pass_date_valid).addClass("borderColor");
						$('#error_msg_pass'+pass_date_valid).text("please select valid day");
						if(fild=='')
						{
							fild='lbl_passport_issue_date'+pass_date_valid;
						}
					}
				}	
			}
			pass_date_valid++;
		})

		let passportExpirationDayErrerHide_d=0;
		$('.passportExpirationDayErrerHide1').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passportExpirationDayErrerHide_d;
				}
			}
			passportExpirationDayErrerHide_d++;
		})
		let passportExpirationDayErrerHide_m=0;
		$('.passportExpirationDayErrerHide2').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passportExpirationDayErrerHide_m;
				}
			}
			passport_issue_m++;
		})
		let passportExpirationDayErrerHide_y=0;
		$('.passportExpirationDayErrerHide3').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passportExpirationDayErrerHide_y;
				}
			}
			passportExpirationDayErrerHide_y++;
		})

		let passport_Issue_ErrerHide=0;
		$('.passportExpirationDayErrerHide3').each(function(){
			var yr=$("#passportExpirationYearErrerHide"+passport_Issue_ErrerHide).val();
			var mn=$("#passportExpirationMonthErrerHide"+passport_Issue_ErrerHide).val();
			var dy=$("#passportExpirationDayErrerHide"+passport_Issue_ErrerHide).val();

			var curr_year = new Date().getFullYear();
			var curr_mon = (new Date().getMonth())+1;
			var curr_day = new Date().getDate();

			if($.trim(yr)==''){
				flag=1;
				$('#passportExpirationYearErrerHide').addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passport_Issue_ErrerHide;
				}
			}
			else if(yr<curr_year){
				flag=1;
				$("#passportExpirationYearErrerHide"+passport_Issue_ErrerHide).addClass("borderColor");
				$('#error_msg_passport_Issue'+passport_Issue_ErrerHide).text("please select valid year");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passport_Issue_ErrerHide;
				}
			}
			else if(yr==curr_year){
				if(mn<curr_mon){
					flag=1;
					$("#passportExpirationMonthErrerHide"+passport_Issue_ErrerHide).addClass("borderColor");
					$('#error_msg_passport_Issue'+passport_Issue_ErrerHide).text("please select valid month");
					if(fild=='')
					{
						fild='lbl_passport_expiration'+passport_Issue_ErrerHide;
					}
				}
				else if(mn==curr_mon){
					
					if(dy<curr_day)
					{
						flag=1;
						$("#passportExpirationDayErrerHide"+passport_Issue_ErrerHide).addClass("borderColor");
						$('#error_msg_passport_Issue'+passport_Issue_ErrerHide).text("please select valid day");
						if(fild=='')
						{
							fild='lbl_passport_expiration'+passport_Issue_ErrerHide;
						}
					}
				}	
			}
			passport_Issue_ErrerHide++;
		})
		if(flag==1)
		{
			$('html, body').animate({
				scrollTop: $("#"+fild).offset().top
			}, 800);
			return;
		}else{
			if(this.grecaptcha === undefined){
				this.captchaError = true;
				this.captchaError_msg = "Please enter captcha"
				return false;
			}
			else{
				this.captchaError = false;
				this.modify_btn = true;
				this.modify_btnTwo = true;
				this.modify_btnThree = true;
				this.modify_btnfour = true;
				$("input").attr("disabled", true);
				$('input').css({"background-color":"#ebebe5"})
				$("select").attr("disabled", true);
				// extra
				$(".four").attr("disabled", false);
				// extra
				$("select").css({"background-color":"#ebebe5"});
				$(".parent-selector").addClass("disabledbutton");
				
				if(btn!='final'){
					this.chek_msg = false;
					$("html, body").animate({ scrollTop: 0}, 'slow');
				}

				this.next_btn_hide = true;
				this.submit_btn_hide  = true;
				this.chek_msg = true;
				this.addUser_btn = true;
		    }
		}
		
		this.arrival_current_Date={
			year:$("#arrival_day_id_3").val(),
			month:$("#arrival_day_id_2").val(),
			day:$("#arrival_day_id_1").val()
		};
		this.registeruser.arrivalDate = this.arrival_current_Date;
		
		for(var n=0;n<=this.ttl_appli;n++)
		{
			let user_applicants:{};
			let birthdayDates:{};
			 birthdayDates={
				year:$("#yearSelect"+n).val(),
				month:$("#MonthSelect"+n).val(),
				day:$("#dateSelect"+n).val(),
			 };
			 let passport_Issue_Dates:{};
			 passport_Issue_Dates={
				day:$("#passportIssueDayErrerHide"+n).val(),
				month:$("#passportIssueMonthErrerHide"+n).val(),
				year:$("#passportIssueYearErrerHide"+n).val(),
			 };
			 let passportExpirations:{};
			 passportExpirations={
				day:$("#passportExpirationDayErrerHide"+n).val(),
				month:$("#passportExpirationMonthErrerHide"+n).val(),
				year:$("#passportExpirationYearErrerHide"+n).val(),
			 };
		
			user_applicants={
				firstname:$('#firstnameOne'+n).val(),
				lastname:$('#lastname'+n).val(),
				nationality:$('#id_City'+n).val(),
				birthdayDate:birthdayDates,
				genderNew:$('#gender'+n).val(),
				passportNumber:$('#passport_number_id'+n).val(),
				passport_Issue_Date:passport_Issue_Dates,
				passportExpiration:passportExpirations,
				visa_type:$("#con_visas"+n).val(),
			}

			userApplicants.push(user_applicants);
		}
	
		var flgval=$('#flagDropVlu').val()
		this.fulNumner = flgval+' '+this.registeruser.number
		let genralObj={
			name:this.registeruser.name,
			email:this.registeruser.email,
			number:this.fulNumner,
			arrivalDate:this.registeruser.arrivalDate
		}
		
		this.formAllData = {
			genral:genralObj,
			applicant:userApplicants,
			currencyCounty:this.priceSighn,
			processing:this.processing,
			visa_cost:this.visa_cost,
			total_cost:this.total_cost,
			visa_for_country:this.to_countryId,
		}

		if(btn=='final')
		{
         	this.process = true;
			this.chek_msg = false;
			this.modify_btn = false;
			this.modify_btnTwo = false;
			this.modify_btnThree = false;
			this.modify_btnfour = false;
			this.update_btn = false;
			this.update_btnTwo = false;
			this.update_btnThree = false;
			this.update_btnFour = false;
			this.submitForm()
		}
	}

	submitForm(){
		this.registerFormService.registerdata(this.formAllData).subscribe(
			data =>{
			if(data.status == 'SUCCESS'){
				this.chek_msg = false;
				this.order_id = data.order_id;
				localStorage.setItem('user',JSON.stringify(data));
				localStorage.setItem('access_token', JSON.stringify(data.access_token));
				this.routers.navigate(["payment",btoa(this.order_id)]);
				this.process = false;
			}else if(data.status == 'ERROR'){
				this.chek_msg = false;
				this.process = false;
				this.error_chek_msg_show = data.msg;
				$(document).ready(function(){
				$("html, body").animate({ scrollTop: 0 }, 1000);
					setTimeout(function(){$('#faildiv').fadeOut('slow');}, 3000);$('#faildiv').fadeIn('fast');})
			}else if(data.status == 'FAIL'){
				this.chek_msg = false;
				this.process = false;
				this.error_chek_msg_show = data.msg
				$(document).ready(function(){
				$("html, body").animate({ scrollTop: 0 }, 1000);
					setTimeout(function(){$('#faildiv').fadeOut('slow');}, 3000);$('#faildiv').fadeIn('fast');})
			}else{
				// do nothing
			}
		})
	}

	ArrivalDayErrerHide(){
		$(".day_tes1_1").removeClass("borderColor");
		$('#error_msg_arrival').text("");
	}
	ArrivalMonthErrerHide(){
		$(".month_tes1_1").removeClass("borderColor");
		$('#error_msg_arrival').text("");
	}
	ArrivalYearErrerHide(){
		$(".year_tes1_1").removeClass("borderColor");
		$('#error_msg_arrival').text("");
	}

	
	nationality(nationalitycity,i){
		let nationalityPlaceObj = this.country.filter(function(list){ return list.id==nationalitycity.value;});
		this.nationalityName = nationalityPlaceObj[0].slug_country_name
		this.nationalityNamePrice = this.to_country_slug_name.trim()+"/"+this.nationalityName.trim()
		this.nationalityPriceService.price_get(this.nationalityNamePrice).subscribe(
			data =>{
				let str;
				this.visa_cost_arr.push(data.visa);	
				$.each(data.visa,function(key,value){	
					str+='<option value="'+value.id+'">'+value.visa_type+'-'+value.max_stay+'-'+value.no_of_entry+'</option>';
				})
				$("#con_visas"+i).html(str);
				$('#visa_cost_id'+i).html(data.visa[0].visa_cost);
				$('#visa_serv_fee_id'+i).html(data.visa[0].service_fee);
				$('#visa_cost_'+i).val(data.visa[0].visa_cost);
				$('#visa_service_'+i).val(data.visa[0].service_fee);
			})
			this.totalCost();
		
	}
		
	genderAll(gen){
	}

	indiavisatype(visatype,i){
		for(var k = 0; k < this.visa_cost_arr.length; k++){
			let visas=this.visa_cost_arr[k];
			for(var j = 0; j <visas.length; j++){
				if(visas[j].id==visatype.value){
					$('#visa_cost_id'+i).html(visas[j].visa_cost);
					$('#visa_serv_fee_id'+i).html(visas[j].service_fee);	
					$('#visa_cost_'+i).val(visas[j].visa_cost);
					$('#visa_service_'+i).val(visas[j].service_fee);	
				} 
			}
		 }
		this.totalCost();
	}

	totalCost(){
		this.total_cost=0;
		let a=this.ttl_appli;
		let rush_fee;
		rush_fee=0;
		let processing=$('input[name="radiobtn"]:checked').val(); 
		$.each(this.visa_other,function(key,valu){
			if(valu.id==processing){
				rush_fee=valu.precessing_fee;
				return true;
			}
		})

		for(var k=0;k<=a;k++)
		{
			let visa_cost_a=$('#visa_cost_'+k).val();
			let visa_service_a=$('#visa_service_'+k).val();
			this.total_cost+=parseFloat(visa_cost_a)+parseFloat(visa_service_a)+parseFloat(rush_fee);
		}
	}

	currency(currencyAll){
		this.currencyCounty = currencyAll.value
		this.priceSighn = $('#priceSighn').val();
	}

	cleanerror(){
		$(".nameOne").removeClass("borderColor");
	}
	cleanerror1(){
		$(".emailOne").removeClass("borderColor");
		$(".emailNotVerified").html(" ");
	}
	cleanerror2(){
		$(".numberOne").removeClass("borderColor");
	}

	clickModify(){
		this.modify_btn = false;
		this.update_btn = true;
			if(this.inpu_disabled_val!=1){
				$(".one").attr("disabled", false);
				$(".one").css({"background-color":"transparent"});
				$('.one').css("cursor", "not-allowed");
			}
			$('.one').css("cursor", "auto");
		$(".one_number").attr("disabled", false);
		$(".one_number").css({"background-color":"transparent"});
		$('.one_number').css("cursor", "auto");
		$("#flagDropVlu").attr("disabled", false);
		$("#flagDropVlu").css({"background-color":"transparent"});
		$('#flagDropVlu').css("cursor", "auto");
		$('.my_btn_submit').attr("disabled", true);
		$('.my_btn_submit').css("cursor", "not-allowed");
		$('.my_btn_submit').css("cursor", "auto");
		$(".test_article").attr("disabled", false);
		$(".test_article").css({"background-color":"transparent"});
	}
	
	clickModifyTwo(){
		this.modify_btnTwo = false;
		this.update_btnTwo = true;
		$('.my_btn_submit').css("cursor", "not-allowed");
		$(".two").attr("disabled", false);
		$(".two").css({"background-color":"transparent"});
		$(".two").css({"background-color":"white"});
		$(".test_article1").attr("disabled", false);
		$(".test_article1").css({"background-color":"transparent"});
		$('.my_btn_submit').attr("disabled", true);
	}

	clickModifyThree(){
		this.modify_btnThree = false;
		this.update_btnThree = true;
		$('.my_btn_submit').css("cursor", "not-allowed");
		$(".three").attr("disabled", false);
		$(".three").css({"background-color":"transparent"});
		$(".parent-selector").removeClass("disabledbutton");
		$('.my_btn_submit').attr("disabled", true);
	}

	// clickModifyfour(){
	// 	this.modify_btnfour = false;
	// 	this.update_btnFour = true;
	// 	$('.my_btn_submit').css("cursor", "not-allowed");
	// 	$(".four").attr("disabled", false);
	// 	$(".four").css({"background-color":"transparent"});
	// 	$('.my_btn_submit').attr("disabled", true);
	// }

	clickUpdate(){
		let flag;
		let fild;
		if(this.registeruser.name == "" || this.registeruser.name == undefined){
			$(".nameOne").addClass("borderColor");
			flag=1;
			fild='lbl_name';
		}
		if(this.registeruser.email == "" || this.registeruser.email == undefined){
			$(".emailOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_email'
			}
		}
		// if(!this.registeruser.email.match(this.regExEmail)){
		// 	$(".emailOne").addClass("borderColor");
		// 	flag=1;
		// 	if(fild=='')
		// 	{
		// 		fild='lbl_email'
		// 	}
		// }
		if(this.registeruser.number == "" || this.registeruser.number == undefined){
			$(".numberOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_number'
			}
		}if(!(this.registeruser.number.length >= 6)){
			$(".numberOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_number'
			}
		}
		if(!this.registeruser.number.match(this.numberRegEx)){
			$(".numberOne").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_number'
			}
		}
		if(this.day =='' || this.day == undefined){
			$(".day_tes1_1").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_arrival_date'
			}
		}
		if(this.month =='' || this.month == undefined){
			$(".month_tes1_1").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_arrival_date'
			}
		}
		if(this.year =='' || this.year == undefined){
			$(".year_tes1_1").addClass("borderColor");
			flag=1;
			if(fild=='')
			{
				fild='lbl_arrival_date'
			}
		}

		$('.year_tes1_1').each(function(){
			var yr=$("#arrival_day_id_3").val();
			var mn=$("#arrival_day_id_2").val();
			var dy=$("#arrival_day_id_1").val();

			var curr_year = new Date().getFullYear();
			var curr_mon = (new Date().getMonth())+1;
			var curr_day = new Date().getDate();

			if(yr<curr_year){
				flag=1;
				$('.year_tes1_1').addClass("borderColor");
				$('#error_msg_arrival').text("please select valid year");
				if(fild=='')
				{
					fild='lbl_arrival_date';
				}
			}
			else if(yr==curr_year){
				if(mn<curr_mon){
					flag=1;
					$('.month_tes1_1').addClass("borderColor");
					$('#error_msg_arrival').text("please select valid month");
					if(fild=='')
					{
						fild='lbl_arrival_date';
					}
				}else if(mn==curr_mon){
					
					if(dy<curr_day)
					{
						flag=1;
						$('.day_tes1_1').addClass("borderColor");
						$('#error_msg_arrival').text("please select valid day");
						if(fild=='')
						{
							fild='lbl_arrival_date';
						}
					}
				}
			}
		})
		

		if(flag==1){
			return false;
		}
		this.modify_btn = true;
		this.update_btn = false;
		$(".one").attr("disabled", true);
		$("#flagDropVlu").attr("disabled", true);
		$("#flagDropVlu").css({"background-color":"#ebebe5"});
		$(".test_article").attr("disabled", true);
		$(".test_article").css({"background-color":"#ebebe5"});
		$(".one").css({"background-color":"#ebebe5"});
		if(this.modify_btn == true && this.modify_btnTwo == true && this.modify_btnThree == true && this.modify_btn == true){
			$('.my_btn_submit').css("cursor", "pointer");
			$('.my_btn_submit').attr("disabled", false);
		}
	}

	clickUpdateTwo(){
		let flag;
		let fild;
		let id_m=0;
		$('.firstnameOne').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_firstname'+id_m;
				}
			}
			id_m++;
		})
		let lbl_bday_date_d=0;
		$('.test_article1').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_bday_date'+lbl_bday_date_d;
				}
			}
			lbl_bday_date_d++;

		})
		let lbl_bday_date_m=0;
		$('.test_article2').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_bday_date'+lbl_bday_date_m;
				}
			}
			lbl_bday_date_m++;
		})

		let lbl_bday_date_y=0;
		$('.test_article3').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_bday_date'+lbl_bday_date_y;
				}
			}
			lbl_bday_date_y++;
		})
		let birt_date_valid=0;
		$('.test_article3').each(function(){
			var yr=$("#yearSelect"+birt_date_valid).val();
			var mn=$("#MonthSelect"+birt_date_valid).val();
			var dy=$("#dateSelect"+birt_date_valid).val();

			var curr_year = new Date().getFullYear();
			var curr_mon = (new Date().getMonth())+1;
			var curr_day = new Date().getDate();

			if(yr>curr_year){
				flag=1;
				$("#yearSelect"+birt_date_valid).addClass("borderColor");
				$('#error_msg_birth'+birt_date_valid).text("please select valid year");
				if(fild=='')
				{
					fild='lbl_bday_date'+birt_date_valid;
				}
			}
			else if(yr==curr_year){
				if(mn>curr_mon){
					flag=1;
					$("#MonthSelect"+birt_date_valid).addClass("borderColor");
					$('#error_msg_birth'+birt_date_valid).text("please select valid month");
					this.dsfabc_id=$("#error_msg_birth"+birt_date_valid)
					if(fild=='')
					{
						fild='lbl_bday_date'+birt_date_valid;
					}
				}else if(mn==curr_mon){
					
					if(dy>curr_day)
					{
						flag=1;
						$("#dateSelect"+birt_date_valid).addClass("borderColor");
						$('#error_msg_birth'+birt_date_valid).text("please select valid day");
						if(fild=='')
						{
							fild='lbl_bday_date'+birt_date_valid;
						}
					}
				}	
			}
			birt_date_valid++;
		})
		let passport_number=0;
		$('.passport_number').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_number'+passport_number;
				}
			}
			passport_number++;
		})
		// ==========
		// $('.passport_number').each(function(){
		// 	if(!$.trim($(this).val()).match(this.passportRegEx)){
		// 	flag=1;
		// 		$(this).addClass("borderColor");
		// 		if(fild=='')
		// 		{
		// 			fild='lbl_passport_number'+passport_number;
		// 		}
		// 	}
		// 	passport_number++;
		// })
		// ===========
		let passport_issue_d=0;
		$('.passportIssue1').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_issue_date'+passport_issue_d;
				}
			}
			passport_issue_d++;
		})
		let passport_issue_m=0;
		$('.passportIssue2').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_issue_date'+passport_issue_m;
				}
			}
			passport_issue_m++;
		})
		let passport_issue_y=0;
		$('.passportIssue3').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_issue_date'+passport_issue_y;
				}
			}
			passport_issue_y++;
		})

		let pass_date_valid=0;
		$(".passportIssue3").each(function(){
			var yr=$("#passportIssueYearErrerHide"+pass_date_valid).val();
			var mn=$("#passportIssueMonthErrerHide"+pass_date_valid).val();
			var dy=$("#passportIssueDayErrerHide"+pass_date_valid).val();

			var curr_year = new Date().getFullYear();
			var curr_mon = (new Date().getMonth())+1;
			var curr_day = new Date().getDate();

			if(yr>curr_year){
				flag=1;
				
				$("#passportIssueYearErrerHide"+pass_date_valid).addClass("borderColor");
				$('#error_msg_pass'+pass_date_valid).text("please select valid year");
				if(fild=='')
				{
					fild='lbl_passport_issue_date'+pass_date_valid;
				}
			}
			else if(yr==curr_year){
				if(mn>curr_mon){
					flag=1;
					
					$("#passportIssueMonthErrerHide"+pass_date_valid).addClass("borderColor");
					$('#error_msg_pass'+pass_date_valid).text("please select valid month");
					if(fild==''){
						{
							fild='lbl_passport_issue_date'+pass_date_valid;
						}
					}
				}else if(mn==curr_mon){
					
					if(dy>curr_day)
					{
						flag=1;
					
						$("#passportIssueDayErrerHide"+pass_date_valid).addClass("borderColor");
						$('#error_msg_pass'+pass_date_valid).text("please select valid day");
						if(fild=='')
						{
							fild='lbl_passport_issue_date'+pass_date_valid;
						}
					}
				}	
			}
			pass_date_valid++;
		})

		let passportExpirationDayErrerHide_d=0;
		$('.passportExpirationDayErrerHide1').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passportExpirationDayErrerHide_d;
				}
			}
			passportExpirationDayErrerHide_d++;
		})
		let passportExpirationDayErrerHide_m=0;
		$('.passportExpirationDayErrerHide2').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passportExpirationDayErrerHide_m;
				}
			}
			passport_issue_m++;
		})
		let passportExpirationDayErrerHide_y=0;
		$('.passportExpirationDayErrerHide3').each(function(){
			if($.trim($(this).val())==''){
			flag=1;
				$(this).addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passportExpirationDayErrerHide_y;
				}
			}
			passportExpirationDayErrerHide_y++;
		})

		let passport_Issue_ErrerHide=0;
		$('.passportExpirationDayErrerHide3').each(function(){
			var yr=$("#passportExpirationYearErrerHide"+passport_Issue_ErrerHide).val();
			var mn=$("#passportExpirationMonthErrerHide"+passport_Issue_ErrerHide).val();
			var dy=$("#passportExpirationDayErrerHide"+passport_Issue_ErrerHide).val();

			var curr_year = new Date().getFullYear();
			var curr_mon = (new Date().getMonth())+1;
			var curr_day = new Date().getDate();

			if($.trim(yr)==''){
				flag=1;
				$('#passportExpirationYearErrerHide').addClass("borderColor");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passport_Issue_ErrerHide;
				}
			}
			else if(yr<curr_year){
				flag=1;
				$("#passportExpirationYearErrerHide"+passport_Issue_ErrerHide).addClass("borderColor");
				$('#error_msg_passport_Issue'+passport_Issue_ErrerHide).text("please select valid year");
				if(fild=='')
				{
					fild='lbl_passport_expiration'+passport_Issue_ErrerHide;
				}
			}
			else if(yr==curr_year){
				if(mn<curr_mon){
					flag=1;
					$("#passportExpirationMonthErrerHide"+passport_Issue_ErrerHide).addClass("borderColor");
					$('#error_msg_passport_Issue'+passport_Issue_ErrerHide).text("please select valid month");
					if(fild=='')
					{
						fild='lbl_passport_expiration'+passport_Issue_ErrerHide;
					}
				}
				else if(mn==curr_mon){
					
					if(dy<curr_day)
					{
						flag=1;
						$("#passportExpirationDayErrerHide"+passport_Issue_ErrerHide).addClass("borderColor");
						$('#error_msg_passport_Issue'+passport_Issue_ErrerHide).text("please select valid day");
						if(fild=='')
						{
							fild='lbl_passport_expiration'+passport_Issue_ErrerHide;
						}
					}
				}	
			}
			passport_Issue_ErrerHide++;
		})
		
		if(flag==1){
			return false;
		}


		this.modify_btnTwo = true;
		this.update_btnTwo = false;
		$(".two").attr("disabled", true);
		$(".test_article1").attr("disabled", true);
		$(".test_article1").css({"background-color":"#ebebe5"});
		$(".two").css({"background-color":"#ebebe5"});
		if(this.modify_btn == true && this.modify_btnTwo == true && this.modify_btnThree == true && this.modify_btn == true){
			$('.my_btn_submit').css("cursor", "pointer");
			$('.my_btn_submit').attr("disabled", false);
		}
	}
	
	clickUpdateThree(){
		this.modify_btnThree = true;
		this.update_btnThree = false;
		$(".three").attr("disabled", true);
		$(".three").css({"background-color":"#ebebe5"});
		$(".parent-selector").addClass("disabledbutton");
		if(this.modify_btn == true && this.modify_btnTwo == true && this.modify_btnThree == true && this.modify_btn == true){
			$('.my_btn_submit').css("cursor", "pointer");
			$('.my_btn_submit').attr("disabled", false);
		}
	}

	// clickUpdatefour(){
	// 	this.modify_btnfour = true;
	// 	this.update_btnFour = false;
	// 	$(".four").attr("disabled", true);
	// 	$(".four").css({"background-color":"#ebebe5"});
	// 	if(this.modify_btn == true && this.modify_btnTwo == true && this.modify_btnThree == true && this.modify_btn == true){
	// 		$('.my_btn_submit').css("cursor", "pointer");
	// 		$('.my_btn_submit').attr("disabled", false);
	// 	}
	// }

	addUser(i){
		this.users.push({
			firstname: "",
			lastname: "",
			bday_date: "",
			passport_number: "",
			passport_issue_date: "",
			passport_expiration: "",
			passport_Issue_Place: "",
			nationalityPlace: "",
			gender: ""
		});
		
		this.ttl_appli=this.ttl_appli+1;
		this.totalCost();
		$(function() {
			var start_year = new Date().getFullYear();
				for (var i = start_year; i > start_year - 80; i--) {
					$('.yearSelect').append('<option value="' + i + '">' + i + '</option>');
				}
		});
		$(function() {
			var start_year = new Date().getFullYear();
				for (var i = start_year; i < (start_year+50); i++) {
					$('.yearSelectExpiration').append('<option value="' + i + '">' + i + '</option>');
				}
		});
		$(function() {
			var start_year = new Date().getFullYear();
				for (var i = start_year; i < (start_year+50); i++) {
					$('.passSelectExpiration').append('<option value="' + i + '">' + i + '</option>');
				}
		});
		this.ErrorClickHide()
		
	}

	removeUser(i){
		var cmt = this
		$('#removeAppli').trigger('click');
		$("#delete_cnt_apli").off( "click" );
		$('#delete_cnt_apli').click(function(){
			cmt.users.splice(i, 1);
			cmt.ttl_appli=cmt.ttl_appli-1;
			cmt.totalCost();
		})    
	}

	ErrorClickHide(){
		$(document).ready(function(){
			$('.firstnameOne').click(function(){
				$(this).removeClass("borderColor");
			})
		})
		$(document).ready(function(){
			$('.test_article1').change(function(){
				$(this).removeClass("borderColor");
				$(this).parent('div').parent('.test_article').siblings('span.err_spn').text("");
			})
		})
		$(document).ready(function(){
			$('.test_article2').change(function(){
				$(this).removeClass("borderColor");
				$(this).parent('div').parent('.test_article').siblings('span.err_spn').text("");
			})
		})
		$(document).ready(function(){
			$('.test_article3').change(function(){
				$(this).removeClass("borderColor");
				$(this).parent('div').parent('.test_article').siblings('span.err_spn').text("");
			})
		})
		$(document).ready(function(){
			$('.passport_number').click(function(){
				$(this).removeClass("borderColor");
			})
		})
		$(document).ready(function(){
			$('.passportIssue1').change(function(){
				$(this).removeClass("borderColor");
				$(this).parent('div').parent('.passportIssue_date_any').siblings('span.err_spn_pass_issue').text("");
			})
		})
		$(document).ready(function(){
			$('.passportIssue2').change(function(){
				$(this).removeClass("borderColor");
				$(this).parent('div').parent('.passportIssue_date_any').siblings('span.err_spn_pass_issue').text("");
			})
		})
		$(document).ready(function(){
			$('.passportIssue3').change(function(){
				$(this).removeClass("borderColor");
				$(this).parent('div').parent('.passportIssue_date_any').siblings('span.err_spn_pass_issue').text("");
			})
		})
		$(document).ready(function(){
			$('.passportExpirationDayErrerHide1').change(function(){
				$(this).removeClass("borderColor");
				$(this).parent('div').parent('.lbl_pass_expir').siblings('span.err_spn_pass_expir').text("");
			})
		})
		$(document).ready(function(){
			$('.passportExpirationDayErrerHide2').change(function(){
				$(this).removeClass("borderColor");
				$(this).parent('div').parent('.lbl_pass_expir').siblings('span.err_spn_pass_expir').text("");
			})
		})
		$(document).ready(function(){
			$('.passportExpirationDayErrerHide3').change(function(){
				$(this).removeClass("borderColor");
				$(this).parent('div').parent('.lbl_pass_expir').siblings('span.err_spn_pass_expir').text("");
			})
		})
	}

	smallWindo() {
		$('#readImportant').trigger('click');
	}

	isNumberKey(evt){
		var charCode = (evt.which) ? evt.which : evt.keyCode
		if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
		return true;
	}

	// add_phone_icon(){
	// 	var regisTel = $(".phn_a");
	// 	regisTel.intlTelInput({
    //         autoPlaceholder: false,
    //         formatOnDisplay:true,
    //         initialCountry: "in",   
    //         utilsScript: "assets/js/utils.js"
	// 	});
	// 	var cmd=this;
    //     regisTel.on('blur',function(){
    //     	cmd.phone_validation(regisTel);
	// 	})
	// }

	// phone_validation(regisTel){
	// 	var telMsg= $(".telMsg");
	// 	if(regisTel.prop("value")<1){
	// 		regisTel.addClass('err');
	// 		telMsg.text("Enter a phone number!");
	// 			return false;
	// 	}else if(!regisTel.intlTelInput("isValidNumber")){
	// 		regisTel.addClass('err');
	// 		telMsg.text('This phone number format is not recognized.');
	// 		return false;
	// 	}else{
	// 		var countryData = regisTel.intlTelInput("getSelectedCountryData");
	// 		var phoneNum = regisTel.intlTelInput("getNumber");              
	// 		telMsg.text("");
	// 		regisTel.removeClass('err');
	// 	}
	// }  

	emailVerified(){	
		this.nextBtn_dis=0	
		this.loginEmail=this.registeruser.email;
		$(".disabledNot").attr("disabled", false);
		$(".disabledNot").css({"background-color":"transparent"});
		let flagE=0
		if(this.registeruser.email == "" || this.registeruser.email == undefined){
			$(".emailOne").addClass("borderColor");
			flagE=1;
		}
		if(flagE==1){
			return false;
		}
		var email={
			email:this.registeruser.email
		}
		var cmt=this
		
		this.registerFormService.userEmailVerified(email).subscribe(
			data =>{
				if(data.status == 'SUCCESS'){
					if(data.flag == 'REGISTER'){
						$('#emailVerifiedU').trigger('click');
						$("#emailVerifiedU").off( "click" );
						$('#emailVerifiedU').click(function(){
							cmt.emailPage=true;
							cmt.otpPage=false;
						})    
					}else if(data.flag == 'OTP'){
						this.nextBtn_dis=1
						// $('#otplVerifiedU').trigger('click');
						// $("#otplVerifiedU").off( "click" );
						// $('#otplVerifiedU').click(function(){
						// 	cmt.otpPage=true;
						// 	cmt.emailPage=false;
						// })    
					}	
				}else if(data.status == 'ERROR'){
					this.process=false;
					$(".emailOne").addClass("borderColor");
				}else{
					// do nothig
				}
			}
		)
	}

	loginUser(){
		this.process=true;
		var flag = 0;
		if(this.loginPassword == "" || this.loginPassword == undefined){
			$(".removePassword").addClass("borderColor");
			flag = 1;
		}
		if(flag == 1)return false;
		var loginData={
			email:this.loginEmail,
			password:this.loginPassword
		}

		this.loginService.loginDetails(loginData).subscribe(
			data =>{
				if(data.status == 'SUCCESS'){
					this.nextBtn_dis=1
					this.process=false;
					localStorage.setItem('user',JSON.stringify(data));
					this.modify_btn = true;
					this.update_btn = false;
					$(".one").attr("disabled", true);
					$("#flagDropVlu").attr("disabled", true);
					$("#flagDropVlu").css({"background-color":"#ebebe5"});
					//$(".test_article").attr("disabled", true);
					//$(".test_article").css({"background-color":"#ebebe5"});
					$(".one").css({"background-color":"#ebebe5"});
					if(this.modify_btn == true && this.modify_btnTwo == true && this.modify_btnThree == true && this.modify_btn == true){
						$('.my_btn_submit').css("cursor", "pointer");
						$('.my_btn_submit').attr("disabled", false);
					}
					var user = JSON.parse(localStorage.getItem('user'));
					if(user!==null){
						this.inpu_disabled_val=1;
						this.codeCnt = user.number.split(" ")
						this.codeCnt = this.codeCnt[0]
						let n = user.number.split(" ")
						this.registeruser ={
							name:user.name,
							email:user.email,
							number:n[1],
							arrivalDate: '',
						}	
					}
					$('#popup_login_hide').trigger('click');
				}else if(data.status == 'ERROR'){
					this.process=false;
					this.login_msg_sus = true
					this.login_msg = 'Username or Password is wrong.';
				}
			})
	}
	
	// otpSubmit(){
	// 	this.process=true;
	// 	var flagO =0;
	// 	if(this.OTP == "" || this.OTP == undefined){
	// 		$(".removeOtp").addClass("borderColor");
	// 		flagO = 1;
	// 	}
	// 	if(flagO == 1)return false;
	// 		var otpData={
	// 			otp:this.OTP,
	// 			email:this.registeruser.email
	// 		}
	// 	var cmt=this
	// 	this.loginService.loginOtp(otpData).subscribe(
	// 		data =>{
	// 			if(data.status == 'SUCCESS'){
	// 				this.nextBtn_dis=1
	// 				this.process=false;
	// 				$(".emailOne").attr("disabled", true);
	// 				$(".emailOne").css({"background-color":"#ebebe5"});
	// 				$('#popup_login_hide').trigger('click');
	// 				$(".removeOtp").removeClass("borderColor");
	// 				this.otp_msg_sus_user = true;
	// 				this.otp_msg_sus_show = 'Email varification done.';
	// 				this.otp_msg_sus = false;
	// 				$(".emailOne").removeClass("borderColor");
	// 				setTimeout(function(){
	// 					$('#popupHideOtp').trigger('click');
	// 						cmt.OTP=''
	// 				},1000)
	// 			}else if(data.status == 'ERROR'){
	// 				this.process=false;
	// 				this.otp_msg_sus = true
	// 				this.otp_msg = 'otp is wrong.';
	// 			}
	// 		})
	// }

	forgot(){
		this.EmailForgot=this.registeruser.email
		$('.emailPage').css({"display":"none"})
		// this.emailPage = false;
		this.forgotnpage=true;
		this.loginEmail = ""
		this.loginPassword = ""
	}

	emailForgotPg(){
		this.process=true;
		if(this.EmailForgot == "" || this.EmailForgot == undefined){
			$(".removeGmailForgot").addClass("borderColor");
			return false;
		}else if(!this.EmailForgot.match(this.regExEmail)){
			$(".removeGmailForgot").addClass("borderColor");
			return false;
		}

		this.email={
			email:this.EmailForgot,
		}

		this.loginService.forgotDetails(this.email).subscribe(
			data =>{
				if(data.status == 'SUCCESS'){
					this.process=false;
					this.forgot_msg_sus = true;
					this.forgot_msg = 'Please check your email. Password has been sent to your mail.';
					// this.loginpage = false;
				}else if(data.status == 'ERROR'){
					this.process=false;
					this.forgot_msg_error = true;
					this.forgot_error_msg = 'This email addess is not registered.';
				}
			})
	}

	login(){
		this.loginEmail=this.registeruser.email
		$('.emailPage').css({"display":"block"})
		// this.emailPage = true;
		this.forgotnpage=false;
		this.forgot_msg_sus = false;
		this.forgot_msg_error = false;
		this.forgot_msg = ""
		this.forgot_error_msg = ""
	}

	cleanerrorEmail(){
		$(".removeGmail").removeClass("borderColor");
	}
	cleanerrorPass(){
		$(".removePassword").removeClass("borderColor");
	}
	cleanerrorOtp(){
		$(".removeOtp").removeClass("borderColor");
		this.otp_msg_sus = false;
	}

}
