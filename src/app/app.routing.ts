import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './Home/home.component';
import {AdminComponent} from './admin_panel/admin_panel.component';

export const AppRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);
