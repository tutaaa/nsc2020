import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './blank/blank.component';
import { MenuComponent } from './menu/menu.component';
import { ScanComponent } from './scan/scan.component';
import { QueueComponent } from './queue/queue.component';


@NgModule({
  declarations: [
    AppComponent,
    routing,
    BlankComponent,
    MenuComponent,
    ScanComponent,
    QueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
