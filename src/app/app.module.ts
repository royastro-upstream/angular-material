import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService as AuthGuard } from './contactmanager/services/auth-guard.service';

const routes: Routes = [      
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m=>m.DemoModule) },
  { path: 'contactmanager', canActivate: [AuthGuard], loadChildren: () => import('./contactmanager/contactmanager.module').then(m=>m.ContactmanagerModule) },  
  { path: '**', redirectTo: 'demo' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
