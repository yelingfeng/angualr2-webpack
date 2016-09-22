import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component'; 
import { AdminComponent } from './admin/admin.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    AdminComponent
  ],
  providers:[
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
