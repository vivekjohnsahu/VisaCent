import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { NewsService } from '../../services/news/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [NewsService]
})
	export class NewsComponent implements OnInit {

	constructor(
		public ngProgress: NgProgress,
		private newsService:NewsService,
		private router : ActivatedRoute,
		private routers : Router
	) { }

	Error_page:boolean;
	Error_page_msg:string;
	pageHide:boolean;
	newsList:any;

	ngOnInit() {
		this.ngProgress.start();
		$('#profile_trans').hide();
		this.newsService.NewsData().subscribe(
		data => {
				if(data.status=='SUCCESS'){
					this.ngProgress.done();
					this.newsList = data.news_list;
					this.pageHide = true;
				}else if(data.status=='ERROR'){
					this.ngProgress.done();
					this.Error_page = true;
					this.Error_page_msg = 'Oops! News not found!'
					this.pageHide = true;
				}
			})
	}

	continueReading(value){
		this.routers.navigate(['news',value]);
	}

	realtedPost(value){
		this.routers.navigate(['news',value]);
	}

}
