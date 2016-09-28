import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';

import { AuthService } from './auth/services/auth.service';
import { AppComponent } from './app.component';
import { ChannelTreeComponent } from './channel-tree/channel-tree.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCke5fOPd7aPYtmG0sfsTQeZ1wWt_AHzEM",
  authDomain: "ng-chatter-7135c.firebaseapp.com",
  databaseURL: "https://ng-chatter-7135c.firebaseio.com",
  storageBucket: "ng-chatter-7135c.appspot.com",
  messagingSenderId: "388289311246"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    ChannelTreeComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
