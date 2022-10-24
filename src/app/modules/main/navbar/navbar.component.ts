import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  visibility$=this.authService.loggedIn$;

  constructor(private authService :AuthService) { }

  ngOnInit() {
  }
  logOut(){
    this.authService.logOut();
  }

}
