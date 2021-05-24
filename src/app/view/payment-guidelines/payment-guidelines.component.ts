import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-payment-guidelines',
  templateUrl: './payment-guidelines.component.html',
  styleUrls: ['./payment-guidelines.component.css']
})
export class PaymentGuidelinesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#profile_trans').hide();
  }

}
