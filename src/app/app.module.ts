import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

import { FcmService } from './shared/service/fcm.service';
import {ToastService} from './shared/service/toast.service';
import { FavoriteCardStore } from './card/shared/card-favorite.store';

const config = {
    apiKey: "AIzaSyD7nOczb9CqSwFnYbsnvJjSLrjWcMLiBII",
    authDomain: "heartstonelib-bb38d.firebaseapp.com",
    databaseURL: "https://heartstonelib-bb38d.firebaseio.com",
    projectId: "heartstonelib-bb38d",
    storageBucket: "heartstonelib-bb38d.appspot.com",
    messagingSenderId: "205527659556"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  	BrowserModule,
  	IonicModule.forRoot(),
  	AppRoutingModule,
  	HttpClientModule, HttpModule,
  	IonicStorageModule.forRoot(),
  	AngularFireModule.initializeApp(config),
  	AngularFirestoreModule
  	],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FcmService,
    ToastService,
    FavoriteCardStore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
