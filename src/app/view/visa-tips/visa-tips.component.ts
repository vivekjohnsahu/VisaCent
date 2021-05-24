import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-visa-tips',
  templateUrl: './visa-tips.component.html',
  styleUrls: ['./visa-tips.component.css']
})
export class VisaTipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#profile_trans').hide();
  }

}
