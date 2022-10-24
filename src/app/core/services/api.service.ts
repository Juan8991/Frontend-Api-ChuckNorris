import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForm } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { JokeFromBackend } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private http: HttpClient) { }
  verifyUser(user: UserForm): any{
    return this.http.get(`${environment.backend.checkCredentials}/${user.email}/${user.password}`,{responseType: 'text'});
  }
  generateJoke():any{
    return this.http.get<JokeFromBackend>(`${environment.backend.generatejoke}`);
  }

  saveJoke(joke:JokeFromBackend){
    return this.http.post(`${environment.backend.saveJoke}`, { ...joke });
  }
}

