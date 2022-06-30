import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Component/about/about.component';
import { UsersComponent } from './Component/users/users.component';
import { ContactComponent } from './Component/contact/contact.component';
import { UserComponent } from './Component/user/user.component';
import { AddressComponent } from './Component/address/address.component';
import { CompanyComponent } from './Component/company/company.component';
import { ViewComponent } from './Component/view/view.component';
import { ProductComponent } from './Component/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './shared/service.service';
import { ActiveGuard } from './Guards/active.guard';
import { ActivateChildGuard } from './Guards/activate-child.guard';
import { DeactivateGuard } from './Guards/deactivate.guard';
import { LoadLazyGuard } from './Guards/load-lazy.guard';
import { AddUserComponent } from './Component/add-user/add-user.component';
import { ResolveGuard } from './Guards/resolve.guard';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UsersComponent,
    ContactComponent,
    UserComponent,
    AddressComponent,
    CompanyComponent,
    ViewComponent,
    ProductComponent,
    AddUserComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [ServiceService,ActiveGuard,ActivateChildGuard,DeactivateGuard,LoadLazyGuard,ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
