import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KYC_DetailsComponent } from './KYC_Details/KYC_Details.component';
import { Aadhar_verificationsComponent } from './Aadhar_verifications/Aadhar_verifications.component';
import { Passport_verificationsComponent } from './Passport_verifications/Passport_verifications.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { KycdetailsComponent } from './kycdetails/kycdetails.component';
import { KycsharedComponent } from './kycshared/kycshared.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KycapprovalComponent } from './kycapproval/kycapproval.component';

@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    KYC_DetailsComponent,
		Aadhar_verificationsComponent,
		
    Passport_verificationsComponent,
		
    LoginComponent,
		
    UserComponent,
		
    KycdetailsComponent,
		
    KycsharedComponent,
		
    MyprofileComponent,
		
    DashboardComponent,
		
    KycapprovalComponent
		
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
