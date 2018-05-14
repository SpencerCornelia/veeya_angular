import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { EditPropertyGuard } from './guards/edit-property.guard';
import { ProfileGuard } from './guards/profile.guard';
import { RegisterGuard } from './guards/register.guard';
import { RoleGuard } from './guards/role.guard';

import { AddPropertyComponent } from './add-property/add-property.component';
import { AuctionComponent } from './auction/auction.component';
import { CustomizePropertyComponent } from './customize-property/customize-property.component';
import { ConnectionsComponent } from './connections/connections.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { InviteUserComponent } from './invite-user/invite-user.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaceDealAdComponent } from './place-deal-ad/place-deal-ad.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SoldPropertyComponent } from './sold-property/sold-property.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ViewDealAdsComponent } from './view-deal-ads/view-deal-ads.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { ViewPropertiesComponent } from './view-properties/view-properties.component';

import { MyProfileResolve } from './resolvers/my-profile-resolve.service';

const APP_ROUTES: Routes = [
  // edit this to go to root page which will be home page of Veeya
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // edit next few after adding components to match
  { path: 'about', component: AddPropertyComponent },
  { path: 'contact', component: AddPropertyComponent },
  { path: 'support', component: AddPropertyComponent },

  { path: 'addproperty', component: AddPropertyComponent, canActivate:[RoleGuard], data:{userType: 'Wholesaler'} },
  { path: 'auction/:id', component: AuctionComponent, canActivate:[AuthGuard] },
  { path: 'connections', component: ConnectionsComponent, canActivate:[AuthGuard] },
  { path: 'customizeproperty/:id', component: CustomizePropertyComponent, canActivate:[RoleGuard], data:{userType: 'Investor'} },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'generateReport/:id', component: GenerateReportComponent, canActivate:[RoleGuard], data:{userType: 'Investor'} },
  { path: 'inviteuser', component: InviteUserComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'placeDealAd', component: PlaceDealAdComponent, canActivate:[RoleGuard], data:{userType: 'Investor'} },
  { path: 'profile/:id', component: MyProfileComponent, canActivate:[ProfileGuard], resolve: { user: MyProfileResolve } },
  { path: 'properties', component: ViewPropertiesComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate:[RegisterGuard] },
  { path: 'search', component: SearchComponent, canActivate:[AuthGuard] },
  { path: 'soldproperty/:id', component: SoldPropertyComponent, canActivate:[AuthGuard] },
  { path: 'uploadlist', component: UploadListComponent, canActivate:[AuthGuard] },
  { path: 'user/:id', component: UserProfileComponent, canActivate:[AuthGuard] },
  { path: 'view/:id', component: ViewPropertyComponent, canActivate:[AuthGuard] },
  { path: 'viewDealAds', component: ViewDealAdsComponent, canActivate:[AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES
      /*{ enableTracing: true } for debugging only */
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}