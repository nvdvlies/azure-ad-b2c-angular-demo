import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MsalModule, MsalInterceptor } from '@azure/msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot({
      clientID: '875f4002-f526-422c-ad8e-b3ddbce25841',
      authority: 'https://login.microsoftonline.com/tfp/AzureB2CDemo3.onmicrosoft.com/B2C_1_signin/',
      redirectUri: 'http://localhost:4200',
      consentScopes: [
        '875f4002-f526-422c-ad8e-b3ddbce25841'
      ],
      protectedResourceMap : [
        ['https://localhost:44340/api/', ['875f4002-f526-422c-ad8e-b3ddbce25841']]
      ]
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
