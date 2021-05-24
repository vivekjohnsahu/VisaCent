import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { VisaStatusService } from '../../services/visa-stutas/visa-status.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visa-status',
  templateUrl: './visa-status.component.html',
  styleUrls: ['./visa-status.component.css'],
  providers: [VisaStatusService]
})
export class VisaStatusComponent implements OnInit {

	applicationId:any;
	passportNo:any;
	key:{};
	StutasError:boolean;
	StutasErrorMsg:any;
	formPage:boolean;
	applicationData:any;
	order_detail_data:any;
	process:boolean;
	cntryList:any;
	is_login_user

	constructor(
		private visaStatusService:VisaStatusService,
		private routers : Router,
		private router : ActivatedRoute,
	) { }

	ngOnInit() {
		$('#profile_trans').hide();
		this.cntryList = JSON.parse(localStorage.getItem('countrylist'));
	}

	statusUser(){
		let flag=0;
		if(this.applicationId=='' || this.applicationId==null || this.applicationId==undefined){
			$('.appliCls').addClass('borderColor');
			flag=1;
		}if(this.passportNo=='' || this.passportNo==null || this.passportNo==undefined ){
			$('.passCls').addClass('borderColor');
			flag=1;
		}if(flag==1){
			return;
		}
		this.process = true;
		var key = this.applicationId+'###'+this.passportNo;
		var user = JSON.parse(localStorage.getItem('user'));
		this.is_login_user
		if(user!==null){
			this.is_login_user = 1
		}else{
			this.is_login_user = 0
		} 
		this.key={
			key:btoa(key),
			is_login:this.is_login_user
		}
		this.visaStatusService.visaStatus(this.key).subscribe(
			data =>{
				if(this.is_login_user!== 1){
					localStorage.setItem('user',JSON.stringify(data.user_data));
				}
				if(data.status=='SUCCESS'){
					this.formPage = true;
					this.process = false;
					this.applicationData = data.applicant_data;
					this.applicationData =new Array(this.applicationData)
					this.applicationData = this.applicationData[0]
					this.order_detail_data = data.order_detail;
					this.order_detail_data = new Array(this.order_detail_data)
					var d = new Date(this.order_detail_data[0].arrival_date);
				}else if(data.status=='PAYMENT'){
					this.routers.navigate(["payment",btoa(this.applicationId)]);
				}else if(data.status=='UNCOMPLETE'){
					this.routers.navigate(["order-summary",btoa(this.applicationId)]);
				}else if(data.status=='ERROR'){
					this.process = false;
					this.StutasError = true;
					this.StutasErrorMsg = data.msg;
                    
                    $(document).ready(function(){
						setTimeout(function(){
                            $('#myalert').fadeOut('fast');}, 3000);
                            $('#myalert').fadeIn();
					    })
				}
			})		
	}

	removclsAppli(){
		$('.appliCls').removeClass('borderColor');
		this.StutasError = false;
	}
	removclsPass(){
		$('.passCls').removeClass('borderColor');
		this.StutasError = false;
	}

}
