import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PlacegiftcardComponent } from './placegiftcard/placegiftcard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VieworderComponent } from './vieworder/vieworder.component';


const routes: Routes = [
  {path:'Index',component:IndexComponent,children:[
    {path:'placegiftcard',component:PlacegiftcardComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'vieworder',component:VieworderComponent},
  
  ]},
  {path:'',redirectTo:'Index',pathMatch:'full'},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
