import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mcfundacao';

  constructor (public router: Router) {}

  openLogin() {
    this.router.navigate(['/login.component']);
  }
}
