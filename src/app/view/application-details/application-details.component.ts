import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css'],
//   providers: [ ApplicationDetailsService ]
})
	export class ApplicationDetailsComponent implements OnInit {

	field_details:any;

	constructor(
		
	) { }

	ngOnInit() {
		$('#profile_trans').hide();
	}

}
