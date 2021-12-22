import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m=>m.DemoModule) },
  { path: 'contactmanager', loadChildren: () => import('./contactmanager/contactmanager.module').then(m=>m.ContactmanagerModule) },
  { path: '**', redirectTo: 'contactmanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
