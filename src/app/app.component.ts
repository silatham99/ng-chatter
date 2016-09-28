import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public AuthService: AuthService) {}

  signIn() {
    this.AuthService.signIn();
  }

  signOut() {
    this.AuthService.signOut();
  }
}
