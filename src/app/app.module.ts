import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { MyApp } from './app.component';
import { NewBookingPage } from '../pages/new-booking/new-booking';
import { ListPage } from '../pages/list/list';
import { RegistrationPage } from '../pages/registration/registration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { LayoutPage } from '../pages/layout/layout';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NewBookingPage,
    ListPage,
    RegistrationPage,
    LayoutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
   //HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NewBookingPage,
    RegistrationPage,
    ListPage,LayoutPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
