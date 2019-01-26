import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientInfoComponent} from './client_info/client_info.component';
import { PaymentPanelComponent} from './payment_panel/payment_panel.component';
import { AboutCompanyComponent} from './about_company/about_company.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientInfoComponent,
    PaymentPanelComponent,
    AboutCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
