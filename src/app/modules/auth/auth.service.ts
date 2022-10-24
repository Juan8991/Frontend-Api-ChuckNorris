import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.logged.asObservable();
  constructor(private router: Router){ }
  logOut(){
    this.logged.next(false);
    sessionStorage.clear();
    this.router.navigate([''])
  }
}
