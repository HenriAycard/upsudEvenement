import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FirebaseProvider } from '../providers/firebase/firebase';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BdePage } from '../pages/bde/bde';
import { LoginPage } from '../pages/login/login';
import { CreateEvenementPage } from '../pages/create-evenement/create-evenement';

import { HttpModule } from '@angular/http';




const firebaseConfig = {
  apiKey: "AIzaSyAgVyUy1OXRN-hu-QFZodcagOjMXGvWy8Q",
  authDomain: "upsud-c706d.firebaseapp.com",
  databaseURL: "https://upsud-c706d.firebaseio.com",
  projectId: "upsud-c706d",
  storageBucket: "gs://upsud-c706d.appspot.com/",
  messagingSenderId: "1021973609387"
};

@NgModule({
  declarations: [
    MyApp,
    BdePage,
    LoginPage,
    CreateEvenementPage,
    HomePage,
    TabsPage
  ],
  imports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BdePage,
    LoginPage,
    CreateEvenementPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
