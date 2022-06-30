import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { AddUserComponent } from './Component/add-user/add-user.component';
import { AddressComponent } from './Component/address/address.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ProductComponent } from './Component/product/product.component';
import { UserComponent } from './Component/user/user.component';
import { UsersComponent } from './Component/users/users.component';
import { ViewComponent } from './Component/view/view.component';
import { ActivateChildGuard } from './Guards/activate-child.guard';
import { ActiveGuard } from './Guards/active.guard';
import { DeactivateGuard } from './Guards/deactivate.guard';
import { LoadLazyGuard } from './Guards/load-lazy.guard';
import { ResolveGuard } from './Guards/resolve.guard';



const routes: Routes = [
 
  {path:'',redirectTo:'users',pathMatch:"full"},
  {path:'users',component:UsersComponent,canActivate:[ActiveGuard],canDeactivate:[DeactivateGuard],
  // resolve : {    // Resolve Guard
  //   data : ResolveGuard
  // }

},
  {path:'user/:id',component:UserComponent},  // parameter route
  {path:'about',component:AboutComponent,   // named outlet
  children:[
    {path:'address',outlet:"add"  ,component:AddressComponent},
    {path:'company',outlet:"com" ,component:AddressComponent}
  ]
},
  {path:'contact',component:ContactComponent, canActivateChild:[ActivateChildGuard], // child routes
  children:[
    {path:'view',component:ViewComponent},
    {path:'product',component:ProductComponent}
  ]

},
{path:'adduser',component:AddUserComponent,   // resolve guard
resolve:{
  data: ResolveGuard
}


},
 
  { path: 'lazy', loadChildren: () => import('./LazyModule/lazy/lazy.module').then(m => m.LazyModule),canLoad:[LoadLazyGuard] },   // canload guard 
  {path:"**",component:UsersComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





