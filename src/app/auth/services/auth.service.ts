import { Injectable } from '@angular/core';
import {
  AuthMethods,
  AuthProviders,
  FirebaseAuth,
  FirebaseAuthState
} from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  constructor(public _auth: FirebaseAuth) {
    _auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(): firebase.Promise<FirebaseAuthState> {
    return this._auth.login({ provider: AuthProviders.Google, method: AuthMethods.Popup })
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signOut(): void {
    this._auth.logout();
  }
}
