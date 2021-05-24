import { Component, OnInit } from '@angular/core';
import { OrderSummaryService } from '../../services/order_summary/order-summary.service'
import { NgProgress } from 'ngx-progressbar';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { Alert } from 'selenium-webdriver';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare let result: any;
import { CountriesListService } from '../../services/countries_list_home/countries-list.service';
import '../../../assets/js/intlTelInput.min.js';
import { FlagValueService } from '../../services/flagValue/flag-value.service';
import { HeaderPageComponent } from '../../view/header-page/header-page.component';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  providers: [ CountriesListService, FlagValueService, HeaderPageComponent]
  
})
export class OrderSummaryComponent implements OnInit {

	  pageHide:boolean;
	  field_details:any;
	  visa_applicantion:any;
	  order_id:any;
	  total_fee:any;
	  payment_status:any;
	  created_at:any;
	  applicant_no:any;
	  applicant_indx:any;
	  currentIdUrl:any;
	  applicantAllId:any;
	  user_email:any;
	  form_fields_general:any
	  form_fields_applicant:any;
	  form_fields_applicant_personal:any;
	  form_fields_father_detail:any;
	  form_fields_mother_detail:any;
	  form_fields_visa_sought:any;
	  form_fields_reference:any;
	  givenname:any;
	  spouse_detail:any;
	  ports:any;
	  arrival_day:any;
	  arrival_mon:any;
	  arrival_year:any;
	  departure_year:any;
	  departure_mon:any;
	  departure_day:any;
	  apli_birth_day:any;
	  apli_birth_mon:any;
	  apli_birth_year:any;
	  cntList:any;
	  Military_field:boolean;
	  countryName:any;
	  hospital_detail:any;
	  applicant_informaction:boolean;
	  applicant_personal_informaction:boolean;
	  general_information:boolean;
	  applicant_father_informaction:boolean;
	  applicant_reference_informaction:boolean;
	  applicant_suought_infor:boolean;
	  is_military:boolean;
	  marital_status:any;
	  is_show_sp_detail:boolean;
	  marital_status_spo:boolean;
	  document:any;
	  spouseName:any;
	  spousePlaveBir:any;
	  spouseNationality:any;
	  preNationality:any;
	  maritalStatus={};
	  organization:any;
	  designation:any;
	  rank:any;
	  placeOfPosting:any;
	  Military_field_Data={};
	  applicant={};
	  applicant_id:any;
	  company_detail:any;
	  hospitalName:any;
	  hospital_address:any;
	  hospital_state:any;
	  hospital_district:any;
	  hospital_phone:any;
	  type_of_treatment:any;
	  hospital={};
	  com_name:any;
	  com_address:any;
	  com_phone:any;
	  com_website:any;
	  company={};
	  fileListUrl:any;
	  fileListData:any;
	  aplicantData:any;
	  marital:any;
	  process:boolean;
	  regExEmail="^([a-zA-Z0-9_.]+@[a-zA-Z0-9]+[.][.a-zA-Z]+)$";
	  enmailval:any;
	  numberval:any
	  sp_detail:any;
	  Semi_Military:any;
	  nationalitySelect:any;
	  countryOfBirth:any;
	  homeCountry:any;
	  pre_Nationality:any;
	  otherIdentityNationality:any;
	  currentlocation:any;
	  county:any
	  sp_nationality:any;
	  sp_prev_nationality:any;
	  fatherNationality:any;
	  previous_Nationality:any;
	  motherNationality:any;
	  mon_previous_Nationality:any;
	  regExNumber="^(0|[1-9][0-9]*)$";
	  mother_birth_country:any;
	  father_birth_country:any;
	  commentHidden:any;
	  military_data:any;
	  appliGivenName:any;
	  hospital_data:any;
	  company_data:any;
	  is_final_submit:any;
	  applicantChange:boolean;
	  applicants_dt:any;
	  is_show_alert:any;
	  apli_document:any;
	  imgUrl:any;
	  fileSizeAndExt:any;
	  gen_numberval:any;
	  submit_btn_show:boolean;
	  next_btn_genral:boolean;
	  next_btn_applicant:boolean;
	  next_btn_per_info:boolean;
	  next_father_btn:boolean;
	  next_refe_btn:boolean;
	  next_btn_suought:boolean;
	  selectImageBtn:boolean;
	  saveAndExitBtn:boolean;
	  is_disabled:any;
	  suc_alert_msg:string;
	  error_alert_msg:string;
	  activeUser:any;
	  Error_order_not_found:boolean;
	  Error_order_not_found_mdg:string;
	  is_document:any;
	  country:any;
	  progress_bar_step:any;
	  progress_active:any;
	  visa_for_country:any;
	  processmy:boolean;
	  is_all_docuemnt:any;
	  visit_purpose:any;
	  flagDrop:any;
	  appliGivenPhone:any;
	  order_phone:any;
	  is_doc:boolean;
	  appliInformcodeCnt:any;
	  appliInformPercodeCnt:any;
	  referencecodeCnt:any;
	  ref_referencecodeCnt:any;
	  hospital_phone_code:any;
	  com_phone_code:any;
	  user_name:any;
	  navbar_pro=0;

	constructor(
		private orderSummaryService:OrderSummaryService,
		private countriesListService:CountriesListService,
		public ngProgress: NgProgress,
		private router : ActivatedRoute,
		private routers : Router,
		private sanitizer: DomSanitizer,
		private flagValueService:FlagValueService,
		private headerPageComponent:HeaderPageComponent
	) {
		
		var user = JSON.parse(localStorage.getItem('user'));
		if(!(user) || user==null || !(user.access_token) || user.access_token == '' || !(user.user_id) || user.user_id == ''){
			localStorage.removeItem('user');
			localStorage.removeItem('access_token');
			localStorage.removeItem('userData');
			this.routers.navigate(['login'])
		}
	}

	ngOnInit() {
		let appli_vl=0;
		this.ngProgress.start();
		this.is_doc=true;
		this.is_military=false;
		this.is_show_sp_detail=false;
		this.pageHide = false;
		this.flagDrop = this.flagValueService.flagMethod()
		this.router.params.subscribe(val => {
		let currentId = this.router.snapshot.params["id"];
		appli_vl = this.router.snapshot.params["vl"];
		this.currentIdUrl = currentId
		this.orderSummaryService.ApplicationDetails(currentId).subscribe(
			data => {
				if(data.status =='SUCCESS'){
						this.user_name = data.visa_applicantion.user_name
						this.applicant_no = data.visa_applicantion.applicant_no;
						this.applicant_no = new Array(this.applicant_no);
						this.order_id = data.visa_applicantion.order_id;
						this.user_email = data.visa_applicantion.user_email;
						this.total_fee = data.visa_applicantion.total_fee;
						this.payment_status = data.visa_applicantion.payment_status;
						if(data.visa_applicantion.payment_status=='pending'){
							this.routers.navigate(["payment",this.currentIdUrl]);
						}
						this.created_at = data.visa_applicantion.created_at;
						if(this.order_phone = data.visa_applicantion.phone!=null){
							this.order_phone = data.visa_applicantion.phone;
							this.order_phone=this.order_phone.split(' ')
							this.order_phone=this.order_phone[1]
						}else{
							this.order_phone=''
						}
						this.applicants_dt=data.visa_applicantion.applicants;
						this.visa_for_country = data.visa_applicantion.visa_for_country;
						if(appli_vl==undefined)
							this.field_re(0);
						else
							this.field_re(appli_vl);
				}else if(data.status == "ERROR"){
					this.ngProgress.done();	
					this.Error_order_not_found = true;
					this.Error_order_not_found_mdg = 'Oops! Order not found!'
				}else{
					// do nothing
				}
			})
		})	
		let username =JSON.parse(localStorage.getItem('user'));
		this.appliGivenName = username.name;
		this.appliGivenPhone = username.number;
		this.appliGivenPhone = this.appliGivenPhone.split(" ")
		this.appliGivenPhone = this.appliGivenPhone[0]
		this.cntList =JSON.parse(localStorage.getItem('countrylist'));
		this.general_information = true;
		this.fileListUrl = "assets/images/file.png";
		this.country =JSON.parse(localStorage.getItem('countrylist'));
		if(this.cntList!="" || this.cntList!=undefined){
			this.ngProgress.done();
			this.cntList = this.country;
		}else{
			this.countriesListService.countriesList().subscribe(
				data => {
					this.ngProgress.done();
					this.cntList = data;
				})
		}
		let usernavbar =JSON.parse(localStorage.getItem('navbar_pro'));
		if(usernavbar!=='' && usernavbar!==undefined && usernavbar!==null){
			this.navbar_pro=1
		}
	}

	field_re(indx){
		$('.appli_tab').each(function(){
			$(this).removeClass('activeUser');
		});
		$(document).ready(function(){
			$('#appli_tab_a_'+indx).addClass('activeUser');
		})
		
		this.is_final_submit=0;
		this.next_btn_applicant=true;
		this.next_btn_genral=true;
		this.next_btn_per_info=true;
		this.next_father_btn=true;
		this.next_refe_btn=true;
		this.next_btn_suought=true;
		this.submit_btn_show=false;
		this.general_information = true;
		this.is_disabled=0;
		this.is_show_alert=0;
		this.progress_active=0;
		this.progress_bar_step=[];
		this.processmy = false;
		this.is_show_sp_detail=false;
		this.applicant_indx = indx;
		this.applicant_indx;
		this.applicantAllId = this.currentIdUrl + "/" + this.applicant_indx;
		this.orderSummaryService.paticularId(this.applicantAllId).subscribe(
			data=>{
				this.ngProgress.done();	
				this.pageHide = true;
				this.spouse_detail = 0;
				this.form_fields_general = data.form_field.general;
				this.form_fields_applicant = data.form_field.applicant;
				this.form_fields_applicant_personal = data.form_field.applicant_personal;	
				this.form_fields_father_detail = data.form_field.father_detail;
				this.form_fields_mother_detail = data.form_field.mother_detail;
				this.form_fields_reference = data.form_field.reference;
				this.form_fields_visa_sought = data.form_field.visa_sought;
				this.hospital_detail = data.form_field.hospital_detail;
				this.company_detail = data.form_field.company_detail;
				this.document = data.form_field.document;
				this.applicant_id = data.form_field.applicant_id;
				this.sp_detail = data.form_field.sp_detail;
				this.military_data = data.form_field.military_data;
				this.hospital_data = data.form_field.hospital_data;
				this.company_data = data.form_field.company_data;
				this.is_final_submit = data.form_field.is_final_submit;
				this.is_document = data.form_field.is_document;
				this.nationalitySelect=data.form_field.applicant_nationality;
				this.apli_document = data.form_field.document;
				this.visit_purpose = data.visit_purpose;
				this.processmy=true;
				if(this.is_final_submit=='1'){
					this.is_disabled=1;
				}
			
				if(this.form_fields_general){
					this.progress_bar_step.push('1');
				}
				if(this.form_fields_applicant){
					this.progress_bar_step.push('2');
				}
				if(this.form_fields_applicant_personal){
					this.progress_bar_step.push('3');
				}
				if(this.form_fields_father_detail){
					this.progress_bar_step.push('4');
				}
				if(this.form_fields_reference){
					this.progress_bar_step.push('5');
				}
				if(this.form_fields_visa_sought){
					this.progress_bar_step.push('6');
				}

				if(this.form_fields_general){
					for(var i=0;i<this.form_fields_general.length;i++){	
						if(this.form_fields_general[i].field_name=='home_country'){
							this.homeCountry=this.form_fields_general[i].value;
						}

						if(this.form_fields_general[i].field_name=='arrival_date'){	
							if(this.form_fields_general[i].value!='')
							{	
								var ar=this.form_fields_general[i].value.split('-');
								this.arrival_year=ar[0];
								this.arrival_mon=ar[1];
								this.arrival_day=ar[2];
							}
						}

						if(this.form_fields_general[i].field_name=='departure_date'){
							if(this.form_fields_general[i].value!='')
							{
								if(this.form_fields_general[i].value!=null){
									var departure_ar=this.form_fields_general[i].value.split('-');
									this.departure_year=departure_ar[0];
									this.departure_mon=departure_ar[1];
									this.departure_day=departure_ar[2];
								}
							}
						}
					}
				}

				if(this.form_fields_applicant){
					for(var i=0;i<this.form_fields_applicant.length;i++){
						if(this.form_fields_applicant[i].field_name=='country_of_birth')
							this.countryOfBirth=this.form_fields_applicant[i].value;
						
						if(this.form_fields_applicant[i].field_name=='acquire_nationality'){
							this.pre_Nationality=this.form_fields_applicant[i].value;

						if(this.form_fields_applicant[i].field_name=='current_location'){
							this.currentlocation=this.form_fields_applicant[i].value;
						}
						}if(this.form_fields_applicant[i].field_name=='otherId_nationality'){
							this.otherIdentityNationality=this.form_fields_applicant[i].value;
						}
						if(this.form_fields_applicant[i].field_name=='phone'){
							this.appliInformcodeCnt=this.form_fields_applicant[i].phone_code;
						}
					}
				}

				if(this.form_fields_applicant_personal){
					for(var i=0;i<this.form_fields_applicant_personal.length;i++){
						if(this.form_fields_applicant_personal[i].field_name=='appli_country'){
							this.county=this.form_fields_applicant_personal[i].value;
						}
						if(this.form_fields_applicant_personal[i].field_name=='emp_phone'){
							this.appliInformPercodeCnt = this.form_fields_applicant_personal[i].phone_code;
						}
					}
				}

				if(this.form_fields_father_detail){
					for(var i=0;i<this.form_fields_father_detail.length;i++){
						if(this.form_fields_father_detail[i].field_name=='father_nationality'){
							this.fatherNationality=this.form_fields_father_detail[i].value;	
						}
						if(this.form_fields_father_detail[i].field_name=='father_birth_country'){
							this.father_birth_country=this.form_fields_father_detail[i].value;
						}
						if(this.form_fields_father_detail[i].field_name=='father_prev_nationality'){
							this.previous_Nationality=this.form_fields_father_detail[i].value;
							
						}
					}
				}

				if(this.form_fields_mother_detail){
					for(var i=0;i<this.form_fields_mother_detail.length;i++){
						if(this.form_fields_mother_detail[i].field_name=='mother_nationality'){
							this.motherNationality=this.form_fields_mother_detail[i].value;
						}
						if(this.form_fields_mother_detail[i].field_name=='mother_prev_nationality'){
							this.mon_previous_Nationality=this.form_fields_mother_detail[i].value;
						}
						if(this.form_fields_mother_detail[i].field_name=='mother_birth_country'){
							this.mother_birth_country=this.form_fields_mother_detail[i].value;
						}
					}
				}

				if(data.ports)
					this.ports = data.ports;

				if(this.form_fields_applicant_personal){
					for(var i=0;i<this.form_fields_applicant_personal.length;i++){
						if(this.form_fields_applicant_personal[i].field_name=='marital_status'){
							this.marital_status=this.form_fields_applicant_personal[i].value;
							this.marital_status_spo = true
						}
						if(this.form_fields_applicant_personal[i].field_name=='spouse_detail'){
							this.spouse_detail='1';
						}
						
						if(this.form_fields_applicant_personal[i].field_name=='is_military'){
							this.is_military=true;
						}

						if(this.form_fields_applicant_personal[i].field_name=='is_military'){
							if(this.form_fields_applicant_personal[i].value=='NO'){
		
							}
						}
					}
				}

				if(this.marital_status){

					if(this.marital_status=='Married' && this.spouse_detail=='1')
					{
						this.spouseName=this.sp_detail.sp_name;
						this.spousePlaveBir=this.sp_detail.sp_birth_place;
						this.sp_nationality=this.sp_detail.sp_nationality;
						this.sp_prev_nationality=this.sp_detail.sp_prev_nationality;	
						this.is_show_sp_detail=true;	
					}
				}
				if(this.military_data){
					if(this.military_data.status=='Yes'){
						$('input[name="is_prev_org"][value="YES"]').prop('checked', true);
						this.Military_field=true;
						this.organization=this.military_data.organization;
						this.designation=this.military_data.designation;
						this.rank=this.military_data.rank;
						this.placeOfPosting=this.military_data.placeOfPosting;
					}else{
						this.Military_field=false;
						this.organization='';
						this.designation=''
						this.rank='';
						this.placeOfPosting='';
					}
				}

				if(this.hospital_data){
					if(this.hospital_data!='' && this.hospital_data!=null)
					{
						this.hospitalName=this.hospital_data.hospitalName;
						this.hospital_address=this.hospital_data.hospital_address;
						this.hospital_district=this.hospital_data.hospital_district;
						this.hospital_phone=this.hospital_data.hospital_phone;
						//this.hospital_phone=this.hospital_phone[1]
						this.hospital_phone_code=this.hospital_data.hospital_phone_code;
						this.hospital_state=this.hospital_data.hospital_state;
						this.type_of_treatment=this.hospital_data.type_of_treatment;
					}
				}

				if(this.company_data){				
					if(this.company_data!='' && this.company_data!=null)
					{
						this.com_name=this.company_data.com_name;
						this.com_address=this.company_data.com_address;
						this.com_phone=this.company_data.com_phone;
						//this.com_phone=this.com_phone[1]; 
						this.com_phone_code=this.company_data.com_phone_code;
						this.com_website=this.company_data.com_website;
					}
				}
				
				if(this.form_fields_applicant){
					for(var i=0;i<this.form_fields_applicant.length;i++){
						if(this.form_fields_applicant[i].field_name=='dob'){
							if(this.form_fields_applicant[i].value!='')
							{
								var ar=this.form_fields_applicant[i].value.split('-');
								var dob_yr=ar[0];
								var dob_mon=ar[1];
								var dob_day=ar[2];
							}
						}	

						if(this.form_fields_applicant[i].field_name=='passport_issue_date'){
							if(this.form_fields_applicant[i].value!='')
							{	
								var ar=this.form_fields_applicant[i].value.split('-');
								var passport_yr=ar[0];
								var passport_mon=ar[1];
								var passport_day=ar[2];
							}
						}	

						if(this.form_fields_applicant[i].field_name=='other_pass_date_of_issue'){
							if(this.form_fields_applicant[i].value!='')
							{	
								if(this.form_fields_applicant[i].value!=null){
									var ar=this.form_fields_applicant[i].value.split('-');
									var other_pass_date_yr = ar[0];
									var other_pass_date_mon = ar[1];
									var other_pass_date_day = ar[2];
								}
							}
						}	

						if(this.form_fields_applicant[i].field_name=='other_pass_date_of_expiry'){
							if(this.form_fields_applicant[i].value!='')
							{	
								if(this.form_fields_applicant[i].value!=null){
									var ar=this.form_fields_applicant[i].value.split('-');
									var other_pass_exp_date_yr = ar[0];
									var other_pass_exp_date_mon = ar[1];
									var other_pass_exp_date_day = ar[2];
								}
							}
						}	

						if(this.form_fields_applicant[i].field_name=='passport_expiry_date'){
							if(this.form_fields_applicant[i].value!='')
							{	
								if(this.form_fields_applicant[i].value!=null){
									var ar=this.form_fields_applicant[i].value.split('-');
									var passport_expiry_date_yr = ar[0];
									var passport_expiry_date_mon = ar[1];
									var passport_expiry_date_day = ar[2];
								}
							}
						}	
					}
				}

				if(this.form_fields_reference){
					for(var i=0;i<this.form_fields_reference.length;i++){
						if(this.form_fields_reference[i].label!=''){
							var str=this.form_fields_reference[i].label;
							this.form_fields_reference[i].label=str.replace("{{country}}", this.visa_for_country);
						}	
						if(this.form_fields_reference[i].field_name=='ref_phone_in'){
							this.referencecodeCnt=this.form_fields_reference[i].phone_code;
						}
						if(this.form_fields_reference[i].field_name=='your_contry_phone'){
							this.ref_referencecodeCnt=this.form_fields_reference[i].phone_code;
						}
					}
				}

				if(this.form_fields_visa_sought){
					for(var i=0;i<this.form_fields_visa_sought.length;i++){
						if(this.form_fields_visa_sought[i].field_name=='last_visited_date_of_issue'){
							if(this.form_fields_visa_sought[i].value!='')
							{	
								if(this.form_fields_visa_sought[i].value!=null){
									var ar=this.form_fields_visa_sought[i].value.split('-');
									var last_visited_date_yr = ar[0];
									var last_visited_date_mon = ar[1];
									var last_visited_date_day = ar[2];
								}
							}
						}	
					}
				}

				if(this.form_fields_father_detail){
					for(var i=0;i<this.form_fields_father_detail.length;i++){
						if(this.form_fields_father_detail[i].field_name=='birthday'){
							if(this.form_fields_father_detail[i].value!='')
							{	
								if(this.form_fields_father_detail[i].value!=null){
									var ar=this.form_fields_father_detail[i].value.split('-');
									var birthday_yr = ar[0];
									var birthday_mon = ar[1];
									var birthday_day = ar[2];
								}
							}
						}	
					}
				}
					
				var cmt=this;
				setTimeout(function(){
					$('#progress_bar_li_0').addClass('active');
					cmt.arrivalData();
					cmt.departureData();
					cmt.previous_date('_dob',dob_day,dob_mon,dob_yr);
					cmt.previous_date('_passport_issue_date',passport_day,passport_mon,passport_yr);
					cmt.previous_date('_other_pass_date_of_issue',other_pass_date_day,other_pass_date_mon,other_pass_date_yr);
					cmt.next_date('_passport_expiry_date',passport_expiry_date_day,passport_expiry_date_mon,passport_expiry_date_yr);
					cmt.previous_date('_last_visited_date_of_issue',last_visited_date_day,last_visited_date_mon,last_visited_date_yr);
					cmt.next_date('_other_pass_date_of_expiry',other_pass_exp_date_day,other_pass_exp_date_mon,other_pass_exp_date_yr);
					if(cmt.marital_status!='' && cmt.marital_status!=null){
						$('.Married_pr').val(cmt.marital_status);
						$('#spouse_Nationality').val(cmt.sp_detail.sp_nationality);
						$('#Prev_Nationality').val(cmt.sp_detail.sp_prev_nationality);
					}
					else{
						$('.Married_pr').val('Single');
					}	
				
					if(cmt.homeCountry=='0' || cmt.homeCountry=='' || cmt.homeCountry==null)
						cmt.homeCountry=cmt.nationalitySelect;
						$('#home_country').val(cmt.homeCountry);
					
					if(cmt.countryOfBirth=='0' || cmt.countryOfBirth=='' || cmt.countryOfBirth==null)
						cmt.countryOfBirth=cmt.nationalitySelect;
						$('#country_of_birth').val(cmt.countryOfBirth);

					if(cmt.pre_Nationality=='0' || cmt.pre_Nationality=='' || cmt.pre_Nationality==null)
						cmt.pre_Nationality=cmt.nationalitySelect;
						$('#acquire_nationality').val(cmt.pre_Nationality);

					if(cmt.appliInformcodeCnt=='0' || cmt.appliInformcodeCnt=='' || cmt.appliInformcodeCnt==null){
						$('#ctnPhn_phone').val(cmt.appliGivenPhone);
					}

					if(cmt.currentlocation=='0' || cmt.currentlocation=='' || cmt.currentlocation==null)
						cmt.currentlocation=cmt.nationalitySelect;
						$('#current_location').val(cmt.currentlocation);

					if(cmt.otherIdentityNationality=='0' || cmt.otherIdentityNationality=='' || cmt.otherIdentityNationality==null)
						cmt.otherIdentityNationality=cmt.nationalitySelect;
						$('#otherId_nationality').val(cmt.otherIdentityNationality);

					if(cmt.county=='0' || cmt.county=='' || cmt.county==null)
						cmt.county=cmt.nationalitySelect;	
					
					if(cmt.appliInformPercodeCnt=='0' || cmt.appliInformPercodeCnt=='' || cmt.appliInformPercodeCnt==null){
						$('#ctnPhn_emp_phone').val(cmt.appliGivenPhone);
					}

					if(cmt.fatherNationality=='0' || cmt.fatherNationality=='' || cmt.fatherNationality==null)
						cmt.fatherNationality=cmt.nationalitySelect;
						$('#father_nationality').val(cmt.fatherNationality);

					if(cmt.previous_Nationality=='0' || cmt.previous_Nationality=='' || cmt.previous_Nationality==null)
						cmt.previous_Nationality=cmt.nationalitySelect;
						$('#father_prev_nationality').val(cmt.previous_Nationality);

					if(cmt.father_birth_country=='0' || cmt.father_birth_country=='' || cmt.father_birth_country==null)
						cmt.father_birth_country=cmt.nationalitySelect;
						$('#father_birth_country').val(cmt.father_birth_country);

					if(cmt.motherNationality=='0' || cmt.motherNationality=='' || cmt.motherNationality==null)
						cmt.motherNationality=cmt.nationalitySelect;
						$('#mother_nationality').val(cmt.motherNationality);

					if(cmt.mon_previous_Nationality=='0' || cmt.mon_previous_Nationality=='' || cmt.mon_previous_Nationality==null)
						cmt.mon_previous_Nationality=cmt.nationalitySelect;
						$('#mother_prev_nationality').val(cmt.mon_previous_Nationality);

					if(cmt.mother_birth_country=='0' || cmt.mother_birth_country=='' || cmt.mother_birth_country==null)
						cmt.mother_birth_country=cmt.nationalitySelect;
						$('#mother_birth_country').val(cmt.mother_birth_country);

					if(cmt.referencecodeCnt=='0' || cmt.referencecodeCnt=='' || cmt.referencecodeCnt==null){
						$('#ctnPhn_ref_phone_in').val(cmt.appliGivenPhone);
					}

					if(cmt.ref_referencecodeCnt=='0' || cmt.ref_referencecodeCnt=='' || cmt.ref_referencecodeCnt==null){
						$('#ctnPhn_your_contry_phone').val(cmt.appliGivenPhone);
					}

					if(cmt.hospital_phone_code=='0' || cmt.hospital_phone_code=='' || cmt.hospital_phone_code==null){
						$('#ctnPhn_hospital').val(cmt.appliGivenPhone);
					}

					if(cmt.com_phone_code=='0' || cmt.com_phone_code=='' || cmt.com_phone_code==null){
						$('#ctnPhn_company').val(cmt.appliGivenPhone);
					}
					cmt.appliGivenName=$('.giveName').val()
					var flg=0;
					$('.cls_appli_doc').each(function(){
						if($(this).hasClass('docreq')){
							if($(this).val()=='' || $(this).val()==null){
								flg=1;
							}
						}
					});
					if(flg==1)
					{
						cmt.is_all_docuemnt=0;
					}else{
						cmt.is_all_docuemnt=1;
					}
					if(cmt.apli_document==undefined){
						cmt.is_all_docuemnt=1;
						cmt.is_doc=false;
						cmt.submitDocument()
					}

				},500); 

			})
	}

	show_sp_detail(){
		this.marital=$('.Married_pr').val()
		if($('.Married_pr').val()=='Married'){ 
			this.is_show_sp_detail=true;
			if(this.sp_nationality=='0' || this.sp_nationality=='' || this.sp_nationality==null)
				this.sp_nationality=this.nationalitySelect;
			if(this.sp_prev_nationality=='0' || this.sp_prev_nationality=='' || this.sp_prev_nationality==null)
				this.sp_prev_nationality=this.nationalitySelect;			
		}else{
			this.is_show_sp_detail=false;
		}
	}

	applicant_next(i,appl_id){
		if(appl_id==this.applicant_id)return true;
		if(this.is_final_submit==1)this.is_show_alert=1;
		if(this.is_show_alert==0){
			$('#modal_btn').trigger('click');
			var cmt=this;
			$( "#cnt_apli").off( "click" );
			$('#cnt_apli').click(function(){
				cmt.field_re(i);
				cmt.general_information = true;
				cmt.applicant_informaction = false;
				cmt.applicant_personal_informaction = false;
				cmt.applicant_father_informaction = false;
				cmt.applicant_reference_informaction = false;
				cmt.applicant_suought_infor = false;
			})
			return true;
		}else{
			this.field_re(i);
			this.general_information = true;
			this.applicant_informaction = false;
			this.applicant_personal_informaction = false;
			this.applicant_father_informaction = false;
			this.applicant_reference_informaction = false;
			this.applicant_suought_infor = false;
			if(this.form_fields_general){
				this.general_information = true;
			}
			else if(this.form_fields_applicant){
				this.applicant_informaction = true;
			}
			else if(this.form_fields_applicant_personal){
				this.applicant_personal_informaction = true;
			}
			else if(this.form_fields_father_detail){
				this.applicant_father_informaction = true;
			}
			else if(this.form_fields_reference){
				this.applicant_reference_informaction = true;
			}
			else if(this.form_fields_visa_sought){
				this.applicant_suought_infor = true;
			}else{
				this.general_information = true;
				this.submit_btn_show = true;
				this.next_btn_genral = true;
			}	
		}
		
	}

	arrivalData(){
		for (var i=1; i<=31; i++){
			if(i==parseInt(this.arrival_day))
				$('.day_tes1_1').append('<option value="' + i + '" selected>' + i + '</option>');
			else	 
				$('.day_tes1_1').append('<option value="' + i + '" >' + i + '</option>');
		}
	    var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
		for (var i=1; i<=12; i++){
			if(i==this.arrival_mon)
				$('.month_tes1_1').append('<option value="' + ("0" + i).slice(-2) + '" selected>' + monthtext[i - 1]  + '</option>');
			else	 
				$('.month_tes1_1').append('<option value="' + ("0" + i).slice(-2) + '">' + monthtext[i - 1]  + '</option>');
		}
		var start_year = new Date().getFullYear();
		for (var i = start_year; i < (start_year+50); i++) {
			if(i==this.arrival_year)
				$('.year_1').append('<option value="' + i + '" selected>' + i + '</option>');
			else	 
				$('.year_1').append('<option value="' + i + '">' + i + '</option>');
		}
	};

	departureData(){
		for (var i=this.arrival_day; i<=31; i++){
			if(i==this.departure_day)
				$('.day_departure_1').append('<option value="' + i + '" selected>' + i + '</option>');
			else	 
				$('.day_departure_1').append('<option value="' + i + '" >' + i + '</option>');
		}
		var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
		for (var i=this.arrival_mon; i<=12; i++){
			if(i==this.departure_mon)
				$('.departure_tes1_1').append('<option value="' + ("0" + i).slice(-2) + '"selected>' + monthtext[i - 1]  + '</option>');
			else	 
				$('.departure_tes1_1').append('<option value="' + ("0" + i).slice(-2) + '">' + monthtext[i - 1]  + '</option>');
		}
		var start_year = new Date().getFullYear();
		for (var i = this.arrival_year; i < (start_year+50); i++) {
			if(i==this.departure_year)
				$('.year_departure_1').append('<option value="' + i + '"selected>' + i + '</option>');
			else	 
				$('.year_departure_1').append('<option value="' + i + '">' + i + '</option>');
		}
	}

	previous_date(vl,day,mon,year){
		for (var i=1; i<=31; i++){
			if(i==day)
				 $('.day'+vl).append('<option value="' + i + '" selected>' + i + '</option>');
			else	 
				$('.day'+vl).append('<option value="' + i + '" >' + i + '</option>');
		}
		var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
		for (var i=1; i<=12; i++){
			if(i==mon)
				$('.month'+vl).append('<option value="' + ("0" + i).slice(-2) + '"selected>' + monthtext[i - 1]  + '</option>');
			else	 
				$('.month'+vl).append('<option value="' + ("0" + i).slice(-2) + '">' + monthtext[i - 1]  + '</option>');
		}
		var start_year = new Date().getFullYear();
		for (var i = start_year; i > start_year - 80; i--) {
			if(i==year)
				$('.year'+vl).append('<option value="' + i + '"selected>' + i + '</option>');
			else	 
				$('.year'+vl).append('<option value="' + i + '">' + i + '</option>');
		}
	}

	next_date(vl,day,mon,year){
		for (var i=1; i<=31; i++){
			if(i==day)
				 $('.day'+vl).append('<option value="' + i + '" selected>' + i + '</option>');
			else	 
				$('.day'+vl).append('<option value="' + i + '" >' + i + '</option>');
		}
		var monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
		for (var i=1; i<=12; i++){
			if(i==mon)
				$('.month'+vl).append('<option value="' + ("0" + i).slice(-2) + '"selected>' + monthtext[i - 1]  + '</option>');
			else	 
				$('.month'+vl).append('<option value="' + ("0" + i).slice(-2) + '">' + monthtext[i - 1]  + '</option>');
		}
		var start_year = new Date().getFullYear();
		for (var i = start_year; i < (start_year+50); i++) {
			if(i==year)
				$('.year'+vl).append('<option value="' + i + '"selected>' + i + '</option>');
			else	 
				$('.year'+vl).append('<option value="' + i + '">' + i + '</option>');
		}
	}

	show_hide_prev_no(){
		this.Semi_Military="Yes"	
		this.Military_field=true;		
	}

	show_hide_prev_yes(){
		this.Semi_Military="No"
		this.Military_field=false;
	}

	check_form(cls,vl){
		$('select').on('change',function(){
			$(this).css('border-color','#b5b5b5');	
		})
		$('input').on('click',function(){
			$(this).css('border-color','#b5b5b5');	
		})
		$('html,body').animate({ scrollTop: $('#scroll_appli').offset().top},'fast');
		var flg=0;
		$('.'+cls).each(function(){
			if($(this).val()=='')
			{
				$(this).css('border-color','red');
				flg=1;
			}
		})
		var cmd=this;
		$('.'+cls+'_dt').each(function(){
			var flg1=0;
			var flg2=0;
			if($(this).hasClass('later_date')){
				var dy=$(this).find('.day').val();
				var mon=$(this).find('.mon').val();
				var year=$(this).find('.year').val();
				var th=$(this);
			
				if($(this).hasClass(cls+'_date')){
					if(dy=='0'){$(this).find('.day').css('border-color','red'); flg1=1;}
					if(mon=='0'){$(this).find('.mon').css('border-color','red'); flg1=1;}
					if(year=='0'){$(this).find('.year').css('border-color','red'); flg1=1;}	

					if(flg1==0)
						flg2= cmd.date_validation_later(dy,mon,year,th);
					else
						flg2=1;	
				}
				else if(dy!=0 || mon!=0 || year!=0)
				{
					if(dy=='0'){$(this).find('.day').css('border-color','red'); flg1=1;}
					if(mon=='0'){$(this).find('.mon').css('border-color','red'); flg1=1;}
					if(year=='0'){$(this).find('.year').css('border-color','red'); flg1=1;}	
					if(flg1==0)
						flg2= cmd.date_validation_later(dy,mon,year,th);
					else
						flg2=1;
				}
			}
			else{
				var dy=$(this).find('.day').val();
				var mon=$(this).find('.mon').val();
				var year=$(this).find('.year').val();
				var th=$(this);
				
				if($(this).hasClass(cls+'_date')){
					
					if(dy=='0'){$(this).find('.day').css('border-color','red'); flg1=1;}
					if(mon=='0'){$(this).find('.mon').css('border-color','red'); flg1=1;}
					if(year=='0'){$(this).find('.year').css('border-color','red'); flg1=1;}	

					if(flg1==0)
					flg2= cmd.date_validation_before(dy,mon,year,th);
				else
				flg2=1;
				}
				else if(dy!=0 || mon!=0 || year!=0)
				{
					if(dy=='0'){$(this).find('.day').css('border-color','red'); flg1=1;}
					if(mon=='0'){$(this).find('.mon').css('border-color','red'); flg1=1;}
					if(year=='0'){$(this).find('.year').css('border-color','red'); flg1=1;}	

					if(flg1==0)
					flg2= cmd.date_validation_before(dy,mon,year,th);
					else
					flg2=1;
				}	
			}

			if(flg==0)
				flg=flg2;

		})

		

		if(flg==1){
			return false;
		}

		if(vl=='1')
		{	
			this.applicant_informaction = false;
			this.general_information = false;
			this.applicant_personal_informaction = false;
			this.applicant_father_informaction = false;
			this.applicant_reference_informaction = false;
			this.applicant_suought_infor = false;
	
			if(this.form_fields_applicant){
				this.applicant_informaction = true;
				this.next_btn_applicant=true;
			}
			else if(this.form_fields_applicant_personal){
				this.applicant_personal_informaction = true;
				this.next_btn_per_info=true;
			}
			else if(this.form_fields_father_detail){
				this.applicant_father_informaction = true;
				this.next_father_btn=true;
			}
			else if(this.form_fields_reference){
				this.applicant_reference_informaction = true;
				this.next_refe_btn=true;
			}
			else if(this.form_fields_visa_sought){
				this.applicant_suought_infor = true;
				this.next_btn_suought=true;
			}else{
				this.applicant_informaction = true;
				if(this.is_final_submit=='0')
					this.submit_btn_show = true;
					this.next_btn_genral = false;
			}	
			var cmd=this;	
		}
		if(vl=='2')
		{

			this.next_btn_applicant=true;
			var flg8=0;
			this.numberval=$('.findNumber').val();
			this.enmailval=$('.findEmail').val();
			if(this.numberval!==undefined){
				if(this.numberval!==''){
					if(!(this.numberval.match(this.regExNumber))){
						$('.findNumber').css('border-color','red');	
						flg8=1;
					}	
				}
			}
			if(this.enmailval!==undefined){
				if(!(this.enmailval.match(this.regExEmail))){
					$('.findEmail').css('border-color','red');	
					flg8=1;
				}
			}
			if(flg8==1)return false;
			
			this.applicant_personal_informaction = false;
			this.general_information = false;
			this.applicant_informaction = false;
			this.applicant_father_informaction = false;
			this.applicant_reference_informaction = false;
			this.applicant_suought_infor = false;
			
			if(this.form_fields_applicant_personal){
				this.applicant_personal_informaction = true;
				this.next_btn_per_info=true;
			}else if(this.form_fields_reference){
				this.applicant_reference_informaction = true;
				this.next_refe_btn=true;
			}else if(this.form_fields_father_detail){
				this.applicant_father_informaction = true;
				this.next_father_btn=true;
			}else if(this.form_fields_visa_sought){
				this.applicant_suought_infor = true;
				this.next_btn_suought=true;
			}else{	
				this.applicant_informaction = true;
				if(this.is_final_submit=='0')
					this.submit_btn_show = true;

				this.next_btn_applicant = false;

				
			}
			var cmd=this;	
		}
		if(vl=='3')
		{
			this.next_btn_per_info=true;
			var flg4=0;
			if(this.Military_field==true){
				if(this.organization==undefined || this.organization==''){
					$('.organization').css('border-color','red');	
					flg4=1;
				}if(this.designation==undefined || this.designation==''){
					$('.designation').css('border-color','red');	
					flg4=1;
				}if(this.rank==undefined || this.rank==''){
					$('.rank').css('border-color','red');	
					flg4=1;
				}if(this.placeOfPosting==undefined || this.placeOfPosting==''){
					$('.prev_emp').css('border-color','red');
					flg4=1;
				}
			}
			 if(this.is_show_sp_detail==true){
				if(this.spouseName==undefined || this.spouseName==''){
					$('.spouseName').css('border-color','red');	
					flg4=1;
				}if($('#spouse_Nationality').val() =='0'){
					$('#spouse_Nationality').css('border-color','red');	
					flg4=1;
				}
			}

			if(flg4==1)return false;
				this.applicant_father_informaction = false;
				this.applicant_informaction = false;
				this.general_information = false;
				this.applicant_personal_informaction = false;
				this.applicant_reference_informaction = false;	
				this.applicant_suought_infor = false;
				if(this.form_fields_father_detail){
					this.applicant_father_informaction = true;
					this.next_father_btn=true;
				}else if(this.form_fields_reference){
					this.applicant_reference_informaction = true;
					this.next_refe_btn=true;
				}else if(this.form_fields_visa_sought){
					this.applicant_suought_infor = true;
					this.next_btn_suought=true;
				}else{
					this.applicant_personal_informaction = true;
					if(this.is_final_submit=='0')
						this.submit_btn_show = true;
						this.next_btn_per_info = false;
				}	
				var cmd=this;	
		}
		if(vl=='4')
		{	this.next_father_btn=true;
			this.applicant_reference_informaction = false;
			this.applicant_father_informaction = false;
			this.applicant_informaction = false;
			this.general_information = false;
			this.applicant_personal_informaction = false;
			this.applicant_suought_infor = false;
			
				if(this.form_fields_reference){
					this.applicant_reference_informaction = true;
					this.next_refe_btn=true;
				}else if(this.form_fields_visa_sought){
					this.applicant_suought_infor = true;
					this.next_btn_suought=true;
				}else{
				this.applicant_father_informaction = true;
				if(this.is_final_submit=='0')
					this.submit_btn_show = true;
					this.next_father_btn = false;
				}	
		}
		if(vl=='5')
		{
			this.next_refe_btn=true;
			$('.referenceNumber').attr('maxlength','15');
			$('.referenceNumber').attr('minlength','6');
			let refNumber=$('.referenceNumber').val();
			if(refNumber!==undefined){
				if(refNumber!=''){
					if(!(refNumber.match(this.regExNumber))){
						$('.referenceNumber').css('border-color','red');	
						return;	
					}
				}
			}
			this.applicant_suought_infor = false;
			this.applicant_reference_informaction = false;
			this.applicant_father_informaction = false;
			this.applicant_informaction = false;
			this.general_information = false;
			this.applicant_personal_informaction = false;	

			if(this.form_fields_visa_sought){
				this.applicant_suought_infor = true;
				this.next_btn_suought=true;
			}else{
				this.applicant_reference_informaction = true;
				if(this.is_final_submit=='0')
					this.submit_btn_show = true;
				this.next_refe_btn = false;
			}	
		}
		if(vl=='6')
		{
			
		var flg=0;
		$('.'+cls).each(function(){
			if($(this).val()=='')
			{
				$(this).css('border-color','red');
				flg=1;
			}
		})

		var cmd=this;
		$('.'+cls+'_dt').each(function(){

			var flg1=0;
			var flg2=0;

			if($(this).hasClass('later_date')){
				var dy=$(this).find('.day').val();
				var mon=$(this).find('.mon').val();
				var year=$(this).find('.year').val();
				var th=$(this);
			
				if($(this).hasClass(cls+'_date')){
					if(dy=='0'){$(this).find('.day').css('border-color','red'); flg1=1; }
					if(mon=='0'){$(this).find('.mon').css('border-color','red'); flg1=1;}
					if(year=='0'){$(this).find('.year').css('border-color','red'); flg1=1;}	

					if(flg1==0)
						flg2= cmd.date_validation_later(dy,mon,year,th);
					else
						flg2=1;	
				}
				else if(dy!=0 || mon!=0 || year!=0)
				{
					if(dy=='0'){$(this).find('.day').css('border-color','red'); flg1=1;}
					if(mon=='0'){$(this).find('.mon').css('border-color','red'); flg1=1;}
					if(year=='0'){$(this).find('.year').css('border-color','red'); flg1=1;}	
					if(flg1==0)
						flg2= cmd.date_validation_later(dy,mon,year,th);
					else
						flg2=1;
				}
			}
			else{
				var dy=$(this).find('.day').val();
				var mon=$(this).find('.mon').val();
				var year=$(this).find('.year').val();
				var th=$(this);
				
				if($(this).hasClass(cls+'_date')){
					
					if(dy=='0'){$(this).find('.day').css('border-color','red'); flg1=1;}
					if(mon=='0'){$(this).find('.mon').css('border-color','red'); flg1=1;}
					if(year=='0'){$(this).find('.year').css('border-color','red'); flg1=1;}	

					if(flg1==0)
					flg2= cmd.date_validation_before(dy,mon,year,th);
				else
				flg2=1;
				}
				else if(dy!=0 || mon!=0 || year!=0)
				{
					if(dy=='0'){$(this).find('.day').css('border-color','red'); flg1=1;}
					if(mon=='0'){$(this).find('.mon').css('border-color','red'); flg1=1;}
					if(year=='0'){$(this).find('.year').css('border-color','red'); flg1=1;}	

					if(flg1==0)
					flg2= cmd.date_validation_before(dy,mon,year,th);
					else
					flg2=1;
				}	
			}

			if(flg==0)
				flg=flg2;
		})
		var flg5=0;
		if(this.company_detail==1){
			if(this.com_name==undefined || this.com_name==''){
				$('.com_name').css('border-color','red');
				var flg5=1;
			}if(this.com_address==undefined || this.com_address==''){
				$('.com_address').css('border-color','red');
				var flg5=1;
			}if(this.com_phone==undefined || this.com_phone==''){
				$('.com_phone').css('border-color','red');
				var flg5=1;
			}if(!this.com_phone.match(this.regExNumber)){
				$('.com_phone').css('border-color','red');
				var flg5=1;
			}if(this.com_phone.length<6){
				$('.com_phone').css('border-color','red');
				var flg5=1;
			}	
			if(flg5==1)return false;				
		}
		
		if(flg==1){
			return false;
		}
			this.applicant_suought_infor = true;
			if(this.is_final_submit=='0')
				this.submit_btn_show = true;
			this.next_btn_suought = false;
		}

		if(((this.progress_bar_step.length)-1)>this.progress_active)
		{
			this.progress_active++;
			for(var i=0;i<this.progress_active;i++)
			{
				$('#progress_bar_li_'+i).removeClass('active');
				$('#progress_bar_li_'+i).addClass('completed');
			}

			$('#progress_bar_li_'+this.progress_active).addClass('active');

		}else{
			var jk=this.progress_active;
			for(var i=0;i<this.progress_active;i++)
			{
				$('#progress_bar_li_'+i).removeClass('active');
				$('#progress_bar_li_'+i).addClass('completed');
			}
			$('#progress_bar_li_'+jk).removeClass('active');
			$('#progress_bar_li_'+(jk)).addClass('completed');
		}
	}

	date_validation_later(dy,mon,year,th)
	{
		var yr=year;
		var mn=mon;
		var dy=dy;
		var curr_year = new Date().getFullYear();
		var curr_mon = (new Date().getMonth())+1;
		var curr_day = new Date().getDate();
		var flg=0;
		if(yr<curr_year){
			flg=1;
			th.find('.year').css('border-color','red');
		}
		else if(yr==curr_year){
			if(mn<curr_mon){	
				flg=1;
				th.find('.mon').css('border-color','red');		
			}else if(mn==curr_mon){	
				if(dy<curr_day)
				{	
					flg=1;		
					th.find('.day').css('border-color','red');
				}
			}
		}
		return flg;
	}

	date_validation_before(dy,mon,year,th)
	{
		var yr=year;
		var mn=mon;
		var dy=dy;
		var curr_year = new Date().getFullYear();
		var curr_mon = (new Date().getMonth())+1;
		var curr_day = new Date().getDate();
		var flg=0;

		if(yr>curr_year){
			flg=1;
			th.find('.year').css('border-color','red');
		}
		else if(yr==curr_year){
			if(mn>curr_mon){
				flg=1;
				th.find('.mon').css('border-color','red');
			}else if(mn==curr_mon){
				if(dy>curr_day)
				{
					flg=1;
					th.find('.day').css('border-color','red');
				}
			}	
		}
		return flg;
	}

	pre_form(pr){
		$('html,body').animate({ scrollTop: $('#scroll_appli').offset().top},'fast');
		if(pr=='1')
		{	
			this.general_information = false;
			this.applicant_informaction = false;
			this.applicant_personal_informaction = false;
			this.applicant_father_informaction = false;
			this.applicant_reference_informaction = false;
			this.applicant_suought_infor = false;
			this.submit_btn_show = false;
			if(this.form_fields_general){
				this.general_information = true;
				this.next_btn_genral = true;
				this.submit_btn_show = false;
			}		
		}
		if(pr=='2')
		{
			this.applicant_personal_informaction = false;
			this.general_information = false;
			this.applicant_informaction = false;
			this.applicant_father_informaction = false;
			this.applicant_reference_informaction = false;
			this.applicant_suought_infor = false;
			this.submit_btn_show = false;
			if(this.form_fields_applicant){
				this.applicant_informaction = true;
				this.next_btn_applicant = true;
			}else{
				this.general_information = true;
				this.next_btn_genral = true;
				this.submit_btn_show = false;
			}		
		}
		if(pr=='3')
		{
			this.applicant_father_informaction = false;
			this.applicant_informaction = false;
			this.general_information = false;
			this.applicant_personal_informaction = false;
			this.applicant_reference_informaction = false;	
			this.applicant_suought_infor = false;
			this.submit_btn_show = false;
			if(this.form_fields_applicant_personal){
				this.applicant_personal_informaction = true;
				this.next_btn_per_info = true
			}else if(this.form_fields_applicant){
				this.applicant_informaction = true;
				this.next_btn_applicant = true;
			}else{
				this.general_information = true;
				this.next_btn_genral = true;
				this.submit_btn_show = false;
			}		
		}
		if(pr=='4')
		{
			
			this.applicant_reference_informaction = false;
			this.applicant_father_informaction = false;
			this.applicant_informaction = false;
			this.general_information = false;
			this.applicant_personal_informaction = false;
			this.applicant_suought_infor = false;
			this.submit_btn_show = false;	
			if(this.form_fields_father_detail){
				
				this.applicant_father_informaction = true;
				this.next_father_btn = true;
			}else if(this.form_fields_applicant_personal){
				
				this.applicant_personal_informaction = true;
				this.next_btn_per_info = true
				
			}else if(this.form_fields_applicant){
				
				this.applicant_informaction = true;
				this.next_btn_applicant = true;
			}else{
			
				this.general_information = true;
				this.next_btn_genral = true;
				this.submit_btn_show = false;
			}	
			
		}
		if(pr=='5')
		{
			this.applicant_reference_informaction = false;
			this.applicant_father_informaction = false;
			this.applicant_informaction = false;
			this.general_information = false;
			this.applicant_personal_informaction = false;
			this.applicant_suought_infor = false;
			this.next_btn_suought=true;
			if(this.form_fields_reference){
				this.applicant_reference_informaction = true;
				this.next_refe_btn = true;
			}else if(this.form_fields_father_detail){
				this.applicant_father_informaction = true;
				this.next_father_btn = true;
			}else if(this.form_fields_applicant_personal){
				this.applicant_personal_informaction = true;
				this.next_btn_per_info = true
			}else if(this.form_fields_applicant){
				this.applicant_informaction = true;
				this.next_btn_applicant = true;
			}else{
				this.general_information = true;
				this.next_btn_genral = true;
				this.submit_btn_show = false;
			}
			this.submit_btn_show = false;	
		}

		if(this.progress_active>0)
			this.progress_active--;
		$('.step').removeClass('completed');
		$('.step').removeClass('active');
		for(var i=0;i<this.progress_active;i++)
		{
			$('#progress_bar_li_'+i).addClass('completed');	
		}
		$('#progress_bar_li_'+this.progress_active).addClass('active');
			
	}

	criminalRecord='No'
	criminalRecordYes(){
		this.criminalRecord='Yes'
	}
	criminalRecordNo(){
		this.criminalRecord='No'
	}

	applicantFormData(){
		var arr={};
		let appli_info;
		$('.form_field').each(function(){
			if($(this).hasClass('phn_a')==true || $(this).hasClass('phn_a_val')==true)
			{
				var f_name=$(this).attr('id');
				var phn_code=$('#ctnPhn_'+f_name).val();
				var phn=$(this).val();				
				arr[f_name]=phn_code+' '+phn;
			}
			else{
				var f_name=$(this).attr('id');
				arr[f_name]=$(this).val();
			}
		});
		
		$('article.date').each(function(){
			var f_name=$(this).attr('id');
			var dy=$('.day_'+f_name).val();
			var mon=$('.month_'+f_name).val();
			var year=$('.year_'+f_name).val();
			arr[f_name]={};
			arr[f_name]['day']=dy;
			arr[f_name]['mon']=mon;
			arr[f_name]['year']=year;
		});
		this.maritalStatus ={
			status:this.marital,
			spouseName:this.spouseName,
			spousePlaveBir:this.spousePlaveBir,
			spouseNationality:$("#spouse_Nationality").val(),
			preNationality:$("#Prev_Nationality").val()
		}
		this.Military_field_Data ={
			status:this.Semi_Military,
			organization:this.organization,
			designation:this.designation,
			rank:this.rank,
			placeOfPosting:this.placeOfPosting
		}
		var Hcod = $('#ctnPhn_hospital').val();
		Hcod = Hcod+' '+this.hospital_phone;
		this.hospital={
			hospitalName:this.hospitalName,
			hospital_address:this.hospital_address,
			hospital_state:this.hospital_state,
			hospital_district:this.hospital_district,
			hospital_phone:Hcod,
			type_of_treatment:this.type_of_treatment,
		}
		var cod = $('#ctnPhn_company').val();
		cod = cod+' '+this.com_phone;
		this.company={
			com_name:this.com_name,
			com_address:this.com_address,
			com_phone:cod,
			com_website:this.com_website,
		}	
		this.applicant={
			criminalRecord:this.criminalRecord,
			applicant:arr,
			maritalStatus:this.maritalStatus,
			Military_field_Data:this.Military_field_Data,
			hospital:this.hospital,
			company:this.company,
			applicant_id:this.applicant_id,
			orderId:this.currentIdUrl,
			is_final_submit:this.is_final_submit
		}
	}

	saveAndExit(){
		if(this.company_detail==1 && this.applicant_suought_infor == true){
			if(this.com_name==undefined || this.com_name==''){
				$('.com_name').css('border-color','red');
				return	
			}if(this.com_address==undefined || this.com_address==''){
				$('.com_address').css('border-color','red');
				return	
			}if(this.com_phone==undefined || this.com_phone==''){
				$('.com_phone').css('border-color','red');
				return
			}if(!this.com_phone.match(this.regExNumber)){
				$('.com_phone').css('border-color','red');
				return
			}					
		}
		this.applicantFormData()
		this.is_final_submit='0'
		this.appliCantInfo()
	}

	submit_form(){
		this.is_final_submit='1'
		this.applicantFormData()
		var cmt=this;
		$('#submit_modal_btn').trigger('click');
		$("#submit_cnt_apli").off( "click" );
		$('#submit_cnt_apli').click(function(){
			cmt.appliCantInfo()	
		})
	}

	changeimage(i){
		$('#file_'+i).click();	
	}

	viewimage(ftype,indx){
		if(ftype=='pdf'){
			var data=indx;
			$(".modal_body").html('<object style="width:100%;height:90%;" data="'+data+'" type="application/pdf"><embed src="'+data+'" type="application/pdf"/></object>');
			$('#popupImage').trigger('click');
			$(".modal_body").addClass('pfdHiW')
		}else{
			var data=$('#fileListUrl_img_'+indx).attr('src');
			$('#popupImage').trigger('click');
			console.log(data)
			$(".modal_body").html("<img src='"+data+"' class='img-responsive' style='width:auto;margin:20px auto;'>");
			$(".modal_body").removeClass('pfdHiW')
		}
	}
	
	fileChange(event,i){
		let imagesExtension = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]));
		var fileName=event.target.files[0].name;
		var fileSize=event.target.files[0].size;
		fileSize=(fileSize/1024).toFixed(1);
		var extns=fileName.substr(fileName.lastIndexOf('.')+1)
		extns=extns.toLowerCase();
		var cmt=this;
		$('#fieldName'+i).html();
		if(extns!="png" && extns!="jpg" && extns!="jpeg" && extns!="pdf"){
			this.fileSizeAndExt="Valid extension : PNG,JPG,JPEG,PDF"
			$('#validExtension').trigger('click');
		}else if(fileSize<5 || fileSize>(5*1024)){
			this.fileSizeAndExt='invalid size minimum 10 KB and maximum 5 MB' 
			$('#validExtension').trigger('click');
		}else{

			if(extns=='pdf')
			{
				var reader = new FileReader();
				reader.onload = function(e) {
					$('#fileListUrl_pdf_'+i).html('<a>View pdf file</a>');
					$('#fileListUrl_pdf_'+i).find('a').click(function(){
						cmt.viewimage('pdf',reader.result);
					});
					cmt.imgUrl=reader.result
					$('#appli_doc_'+i).val(cmt.imgUrl);
				};
				reader.readAsDataURL(event.target.files[0]);
				$('#fileListUrl_pdf_'+i).removeClass("fileUrlPdf");
				$('#fileListUrl_pdf_'+i).show();
				$('#fileListUrl_img_'+i).hide();
				$('#fileListUrl_blank_'+i).hide();
			}else
			{
				var reader = new FileReader();
				reader.onload = function(e) {
					$('#fileListUrl_img_'+i).attr('src',reader.result); 
					$('#fileListUrl_img_'+i).removeClass("fileUrl");
					$('#fileListUrl_img_'+i).show();
					$('#fileListUrl_pdf_'+i).hide();
					$('#fileListUrl_blank_'+i).hide();
					cmt.imgUrl=reader.result
					$('#appli_doc_'+i).val(cmt.imgUrl);
				};
				reader.readAsDataURL(event.target.files[0]);
			}
			if(cmt.fileListUrl!=''){
				$("#btn_dis_"+i).attr("disabled", false);
				$("#btn_dis_"+i).css({'background-color':'#005ea5', 'cursor':'pointer'});
			}	
		}
	}
		
	docUpload(i,field_name){
		this.processmy = false;
		let field=field_name;
		let documentArr:any;
		documentArr={
			order_id:this.currentIdUrl,
			applicant_id:this.applicant_id,
			field_name:field,
			input_img:$('#appli_doc_'+i).val()
		}
		this.orderSummaryService.document(documentArr).subscribe(
			data=>{
				if(data.status=='SUCCESS'){
					this.processmy = true;
					$('.btn_upload_txt_'+i).html('Re-Upload');
					$('#btn_dis_'+i).attr('disabled', true);
					$("#btn_dis_"+i).css({'background-color':'#5aa2d8', 'cursor':'no-drop;'});
					
					$('#apliImgupload_'+i).text('Document Uploaded Successfully.');
					$('#flg_appli_doc_'+i).val(documentArr.input_img);
					
					var flg=0;
					$('.cls_appli_doc').each(function(){
						if($(this).hasClass('docreq')){
							if($(this).val()=='' || $(this).val()==null){
								flg=1;
							}
						}
					})
					if(flg==1)
					{
						this.is_all_docuemnt=0;
					}else{
						this.is_all_docuemnt=1;
					}

				}else if(data.status=='ERROR'){
					this.process = false;
					alert('Please try again');
				}else{
					// do nthg
				}
			})
	}

	appliCantInfo(){
		this.processmy = false;
		$('#profile_trans').hide();
		this.orderSummaryService.userData(this.applicant).subscribe(
			data=>{
				if(data.status=='SUCCESS'){	
					this.processmy = true;
					this.is_show_alert=1;
					if(this.is_final_submit=='1'){
						this.is_disabled=1;
						if(this.is_final_submit=='1' && this.is_document=='1'){
							$('#appli_msg_'+this.applicant_id).hide();
							$('#appli_msg1_'+this.applicant_id).show();
						}
						if(this.is_doc==true){
							$('#tab_detaile1').removeClass("active");
							$('#tab_detaile2').addClass("active in");
							$('#active_User').removeClass("active");
							$('#remove_user').addClass("active");
						}
					}
					else{
						this.suc_alert_msg='All filled information has been saved for this applicant. You can fill complete information any time from your account.';
						$('#valSucSave').trigger('click');
					}
				}else if(data.status=='ERROR'){
					$('#valSucSave').trigger('click');
					this.error_alert_msg='Please try again';
				}else{
					// do nthg
				}
			})
	}

	chekInfo(){
		if($('#chekInfo').prop('checked')==true){
			$("#sub_btn").attr("disabled", false);
			$("#sub_btn").css("cursor", 'pointer');
			$("#sub_btn").css("background-color", 'rgb(5, 94, 165)');
		}else{
			$("#sub_btn").attr("disabled", true);
			$("#sub_btn").css("cursor", 'no-drop');
			$("#sub_btn").css("background-color", '#055da5');
		}
	}

	DocumentChekInfo(){
		var flg=0;
		$('.cls_appli_doc').each(function(){
			if($(this).hasClass('docreq')){
				if($(this).val()=='' || $(this).val()==null){
					flg=1;
				}
			}
		})

		if(flg==1)
		{
			$('#doc_err_msg').html('Please upload all documents.').css('color','red').show();
			$("#DocumentInfo1").prop('checked',false);

			setTimeout(function(){
				$('#doc_err_msg').hide();
			},2000);

			return;
		}else{
			$('#doc_err_msg').hide();
		}

		if($('#DocumentInfo1').prop('checked')==true){
			$("#sub_btn_doc").attr("disabled", false);;
			$("#sub_btn_doc").css("cursor", 'pointer');
			$("#sub_btn_doc").css("background-color", 'rgb(5, 94, 165)');
		}else{
			$("#sub_btn_doc").attr("disabled", true);
			$("#sub_btn_doc").css("cursor", 'no-drop');
			$("#sub_btn_doc").css("background-color", '#5aa2d8');
		}
	}

	submitDocument(){
		this.processmy = true;
		let key;
		$('#appli_doc_').val();
		key=btoa(this.applicant_id+'###'+1);
		var keyImg = {
			key:key
		}
		this.orderSummaryService.submitDocFin(keyImg).subscribe(
			data =>{
				if(data.status == "SUCCESS"){
					this.process = false;
					this.is_document='1';
					this.is_all_docuemnt=0;
					if(this.is_final_submit=='1'){
						$('#appli_msg_'+this.applicant_id).hide();
						$('#appli_msg1_'+this.applicant_id).show();
					}
					$('#document_sus_msg').html('Documents Success Upload').css('color','green').show();
					setTimeout(function(){$('#document_sus_msg').hide();},3000);
				}else if(data.status == "ERROR"){
					this.process = false;
					alert('please try again later');
				}
			})
	}

	specifiName:any;
	specificationsOpen(lbl){
		console.log(lbl)
		this.specifiName = lbl
		if(lbl=='Photo'){
			$("#SpecificationsPhoto").show();
			$("#SpecificationsPassportFrontPage").hide();
			$("#SpecificationsPassportBackPage").hide();
			$("#SpecificationsOther").hide();
			$("#SpecificationsBusinessCard").hide();
			$("#SpecificationsPassport").hide();
			$("#SpecificationsTravelItinerary").hide();
			$("#SpecificationsFlightItinerary").hide();
			$("#SpecificationsHotelBooking").hide();
		}else if(lbl=='Passport Front Page'){
			$("#SpecificationsPassportFrontPage").show();
			$("#SpecificationsPhoto").hide();
			$("#SpecificationsPassportBackPage").hide();
			$("#SpecificationsOther").hide();
			$("#SpecificationsBusinessCard").hide();
			$("#SpecificationsPassport").hide();
			$("#SpecificationsTravelItinerary").hide();
			$("#SpecificationsFlightItinerary").hide();
			$("#SpecificationsHotelBooking").hide();
		}else if(lbl=='Passport Back Page'){
			$("#SpecificationsPassportBackPage").show();
			$("#SpecificationsPassportFrontPage").hide();
			$("#SpecificationsPhoto").hide();
			$("#SpecificationsOther").hide();
			$("#SpecificationsBusinessCard").hide();
			$("#SpecificationsPassport").hide();
			$("#SpecificationsTravelItinerary").hide();
			$("#SpecificationsFlightItinerary").hide();
			$("#SpecificationsHotelBooking").hide();
		}else if(lbl=='Other'){
			$("#SpecificationsOther").show();
			$("#SpecificationsPassportBackPage").hide();
			$("#SpecificationsPassportFrontPage").hide();
			$("#SpecificationsPhoto").hide();
			$("#SpecificationsBusinessCard").hide();
			$("#SpecificationsPassport").hide();
			$("#SpecificationsTravelItinerary").hide();
			$("#SpecificationsFlightItinerary").hide();
			$("#SpecificationsHotelBooking").hide();
		}else if(lbl=='Passport'){
			$("#SpecificationsPassport").show();
			$("#SpecificationsOther").hide();
			$("#SpecificationsPassportBackPage").hide();
			$("#SpecificationsPassportFrontPage").hide();
			$("#SpecificationsPhoto").hide();
			$("#SpecificationsBusinessCard").hide();
			$("#SpecificationsTravelItinerary").hide();
			$("#SpecificationsFlightItinerary").hide();
			$("#SpecificationsHotelBooking").hide();
		}else if(lbl=='Business Card'){
			$("#SpecificationsBusinessCard").show();
			$("#SpecificationsPassport").hide();
			$("#SpecificationsOther").hide();
			$("#SpecificationsPassportBackPage").hide();
			$("#SpecificationsPassportFrontPage").hide();
			$("#SpecificationsPhoto").hide();
			$("#SpecificationsTravelItinerary").hide();
			$("#SpecificationsFlightItinerary").hide();
			$("#SpecificationsHotelBooking").hide();
		}else if(lbl=='Travel Itinerary'){
			$("#SpecificationsTravelItinerary").show();
			$("#SpecificationsBusinessCard").hide();
			$("#SpecificationsPassport").hide();
			$("#SpecificationsOther").hide();
			$("#SpecificationsPassportBackPage").hide();
			$("#SpecificationsPassportFrontPage").hide();
			$("#SpecificationsPhoto").hide();
			$("#SpecificationsFlightItinerary").hide();
			$("#SpecificationsHotelBooking").hide();
		}else if(lbl=='Flight Itinerary'){
			$("#SpecificationsFlightItinerary").show();
			$("#SpecificationsTravelItinerary").hide();
			$("#SpecificationsBusinessCard").hide();
			$("#SpecificationsPassport").hide();
			$("#SpecificationsOther").hide();
			$("#SpecificationsPassportBackPage").hide();
			$("#SpecificationsPassportFrontPage").hide();
			$("#SpecificationsPhoto").hide();
			$("#SpecificationsHotelBooking").hide();
		}else if(lbl=='Hotel Booking'){
			$("#SpecificationsHotelBooking").show();
			$("#SpecificationsFlightItinerary").hide();
			$("#SpecificationsTravelItinerary").hide();
			$("#SpecificationsBusinessCard").hide();
			$("#SpecificationsPassport").hide();
			$("#SpecificationsOther").hide();
			$("#SpecificationsPassportBackPage").hide();
			$("#SpecificationsPassportFrontPage").hide();
			$("#SpecificationsPhoto").hide();
		}
		$('#specificationsOpen').trigger('click');
	}

	logout(){
		this.headerPageComponent.logOut()
	}

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

}