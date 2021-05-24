import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { EmbassiesPageComponent } from './view/embassy-and-consulate/worldwide/embassies-page.component';
import { EmbassiesDetailsComponent } from './view/embassies/embassies-details.component';
import { VisaTableComponent } from './view/requirement/visa-table.component';
import { EmbassiesCitysComponent } from './view/embassy/embassies-citys.component';
import { EmbassiesCountryComponent } from './view/embassy-and-consulate-of/embassies-country.component';
import { EmbassiesComponent } from './view/embassy-and-consulate-in/embassies.component';
import { ConsulateInComponent } from './view/consulates-general/consulate-in.component';
import { DetailformComponent } from './view/apply-online/detailform.component';
import { FaqComponent } from './view/faq/faq.component';
import { PrivacyComponent } from './view/privacy/privacy.component';
import { ConsulateGeneralComponent } from './view/consulate-general/consulate-general.component';
import { ApplyEVisaComponent } from './view/apply-e-visa/apply-e-visa.component';
import { AboutUsComponent } from './view/about-us/about-us.component';

import { ContactUsComponent } from './view/contact-us/contact-us.component';
import { TermsComponent } from './view/terms-and-conditions/terms.component';
import { PaymentGuidelinesComponent } from './view/payment-guidelines/payment-guidelines.component';
import { VisaStatusComponent } from './view/visa-status/visa-status.component';
import { OrderSummaryComponent } from './view/order-summary/order-summary.component';
import { NewsComponent } from './view/news/news.component';
import { VisaTipsComponent } from './view/visa-tips/visa-tips.component';
import { PaymentComponent } from './view/payment/payment.component';
import { ApplicationDetailsComponent } from './view/application-details/application-details.component';
import { LoginComponent } from './view/login/login.component';
import { NewsDetailComponent } from './view/news-detail/news-detail.component';
import { MyProfileComponent } from './view/my-profile/my-profile.component';
import { ApplyVisaComponent } from './view/apply-visa/apply-visa.component';

	export const routes: Routes = [
		{ 
			path: '', redirectTo: 'home', pathMatch: 'full'
		},
		{
			path: '',
			component: HomePageComponent,
			data: {
				title: 'home'
			}
		},
		{
			path: 'embassy-and-consulate/worldwide',
			component: EmbassiesPageComponent,
			data: {
				title: 'embassy-and-consulate/worldwide'
			}
		},
		{
			path: 'embassies/:value',
			component: EmbassiesDetailsComponent,
			data: {
				title: 'embassies'
			}
		},
		{
			path: 'requirement/:value',
			component: VisaTableComponent,
			data: {
				title: 'requirement'
			}
		},
		{
			path: 'embassy/:value',
			component: EmbassiesCitysComponent,
			data: {
				title: 'embassy'
			}
		},
		{
			path: 'consulate-general/:value',
			component: ConsulateGeneralComponent,
			data: {
				title: 'consulate-general'
		}
		},
		{
			path: 'embassy-and-consulate-of/:id',
			component: EmbassiesCountryComponent,
			data: {
				title: 'embassy-and-consulate-of'
		}
		},
		{
			path: 'embassy-and-consulate-in/:id',
			component: EmbassiesComponent,
			data: {
				title: 'embassy-and-consulate-in'
		}
		},
		{
			path: 'consulates-general/:value',
			component: ConsulateInComponent,
			data: {
				title: 'consulates-general'
		}
		},
		{
			path: 'apply-online/:value',
			component: DetailformComponent,
			data: {
				title: 'apply-online'
		}
		},
		{
			path: 'faq',
			component: FaqComponent,
			data: {
				title: 'faq'
		}
		},
		{
			path: 'privacy',
			component: PrivacyComponent,
			data: {
				title: 'privacy'
		}
		},
		{
			path: 'apply-e-visa',
			component: ApplyEVisaComponent,
			data: {
				title: 'apply-e-visa'
		}
		},
		{
			path: 'about-us',
			component: AboutUsComponent,
			data: {
				title: 'about-us'
		}
		},


		{
			path: 'contact-us',
			component: ContactUsComponent,
			data: {
				title: 'contact-us'
		}
		},

		{
			path: 'terms-and-conditions',
			component: TermsComponent,
			data: {
				title: 'terms-and-conditions'
		}
		},

		{
			path: 'payment-guidelines',
			component: PaymentGuidelinesComponent,
			data: {
				title: 'payment-guidelines'
		}
		},

		{
			path: 'visa-status',
			component: VisaStatusComponent,
			data: {
				title: 'visa-status'
		}
		},

		{
			path: 'order-summary/:id',
			component: OrderSummaryComponent,
			data: {
				title: 'order-summary'
		}
		},

		{
			path: 'order-summary/:id/:vl',
			component: OrderSummaryComponent,
			data: {
				title: 'order-summary'
		}
		},

		{
			path: 'news',
			component: NewsComponent,
			data: {
				title: 'news'
		}
		},

		{
			path: 'visa-tips',
			component: VisaTipsComponent,
			data: {
				title: 'visa-tips'
		}
		},

		{
			path: 'payment/:id',
			component: PaymentComponent,
			data: {
				title: 'payment'
		}
		},

		{
			path: 'application-details/:id',
			component: ApplicationDetailsComponent,
			data: {
				title: 'application-details'
		}
		},
		{
			path: 'login',
			component: LoginComponent,
			data: {
				title: 'login'
		}
		},
        
        {
			// /:slug
			path: 'news/:value',
			component: NewsDetailComponent,
			data: {
				title: 'news-detail'
		}
		},
		{
			path: 'my-profile',
			component: MyProfileComponent,
			data: {
				title: 'my-profile'
		}
		},
		{
			path: 'my-profile/:value',
			component: MyProfileComponent,
			data: {
				title: 'my-profile'
		}
		},
		{
			path: 'apply-visa/:value',
			component: ApplyVisaComponent,
			data: {
				title: 'apply-visa'
		}
		},

		{ 
			path: '**', redirectTo: '', pathMatch: 'full' 
		},
		
	];
@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}