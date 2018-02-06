import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { KYC_DetailsComponent } from './KYC_Details/KYC_Details.component';
import { Aadhar_verificationsComponent } from './Aadhar_verifications/Aadhar_verifications.component';
import { Passport_verificationsComponent } from './Passport_verifications/Passport_verifications.component';
import { KycdetailsComponent } from './kycdetails/kycdetails.component'
import {LoginComponent} from './login/login.component'
import {KycsharedComponent} from './kycshared/kycshared.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {KycapprovalComponent} from './kycapproval/kycapproval.component'

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path:"",redirectTo:'user',pathMatch:'full'},
    {path:'user' ,component:UserComponent,children:[
    {path:'profile',component:DashboardComponent,
        children:[
          {path: 'mykyc', component: KycdetailsComponent},
          {path: 'sharingWith', component: KycsharedComponent},
          {path: 'info', component: MyprofileComponent}
        ]   
        },
        {path: 'KYC_Details', component: KYC_DetailsComponent},
        {path: 'kyc_approval', component: KycapprovalComponent}
        
      ]},		
		{ path: 'Aadhar_verifications', component: Aadhar_verificationsComponent},
		
		{ path: 'Passport_verifications', component: Passport_verificationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
