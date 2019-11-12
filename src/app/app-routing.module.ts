import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotalComponent } from '../app/total/total.component'
import { HomeComponent } from '../app/home/home.component'
import { MenuComponent } from './menu/menu.component';
import {ScanComponent} from './scan/scan.component'



const routes: Routes = [ 
  { path:'home' , component: HomeComponent},
  { path:'total' , component: TotalComponent },
  { path: 'menu' , component: MenuComponent },
  {path: 'scan', component: ScanComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = [ TotalComponent , HomeComponent , MenuComponent , ScanComponent]