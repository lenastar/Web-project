import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RootComponent} from './root/root.component';

import {HeaderComponent} from './header/header.component';
import {ClientInfoComponent} from './client_info/client_info.component';
import {PaymentPanelComponent} from './payment_panel/payment_panel.component';
import {AboutCompanyComponent} from './about_company/about_company.component';
import {FormsModule} from '@angular/forms';
import {ROUTING} from './app.routing';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './Home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './admin_panel/admin_panel.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    ClientInfoComponent,
    PaymentPanelComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
