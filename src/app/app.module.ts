import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

import { AppComponent } from './app.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { FooterPageComponent } from './view/footer-page/footer-page.component';
import { HeaderPageComponent } from './view/header-page/header-page.component';
import { EmbassiesPageComponent } from './view/embassy-and-consulate/worldwide/embassies-page.component';
import { EmbassiesDetailsComponent } from './view/embassies/embassies-details.component';
import { VisaTableComponent } from './view/requirement/visa-table.component';
import { EmbassiesCitysComponent } from './view/embassy/embassies-citys.component';
import { EmbassiesCountryComponent } from './view/embassy-and-consulate-of/embassies-country.component';
import { EmbassiesComponent } from './view/embassy-and-consulate-in/embassies.component';
import { ConsulateInComponent } from './view/consulates-general/consulate-in.component';
import { SortPipePipe } from './pipe/sort-pipe.pipe';
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
import { NgProgressModule } from 'ngx-progressbar';
import { PaymentComponent } from './view/payment/payment.component';
import { ApplicationDetailsComponent } from './view/application-details/application-details.component';
import { LoginComponent } from './view/login/login.component';
import { NewsDetailComponent } from './view/news-detail/news-detail.component';
import { MyProfileComponent } from './view/my-profile/my-profile.component';
import { ApplyVisaComponent } from './view/apply-visa/apply-visa.component';

@NgModule({
	declarations: 
	[
		AppComponent,
		HomePageComponent,
		FooterPageComponent,
		HeaderPageComponent,
		EmbassiesPageComponent,
		EmbassiesDetailsComponent,
		VisaTableComponent,
		EmbassiesCitysComponent,
		EmbassiesCountryComponent,
		EmbassiesComponent,
		ConsulateInComponent,
		SortPipePipe,
		DetailformComponent,
		FaqComponent,
		PrivacyComponent,
		ConsulateGeneralComponent,
		ApplyEVisaComponent,
		AboutUsComponent,
		ContactUsComponent,
		TermsComponent,
		PaymentGuidelinesComponent,
		VisaStatusComponent,
		OrderSummaryComponent,
		NewsComponent,
		VisaTipsComponent,
		PaymentComponent,
		ApplicationDetailsComponent,
		LoginComponent,
		NewsDetailComponent,
		MyProfileComponent,
		ApplyVisaComponent,
		// Autosize
	],

	imports: 
	[
		BrowserModule,
		AppRoutingModule,
		HttpModule,
		FormsModule,
		RecaptchaModule.forRoot(),
		NgProgressModule,
		TextareaAutosizeModule
	],

	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
