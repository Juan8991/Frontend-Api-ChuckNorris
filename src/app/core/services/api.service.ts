import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForm } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { JokeFromBackend, JokesToShow, JokeToBackend } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private http: HttpClient) { }
  verifyUser(user: UserForm): any{
    return this.http.get(`${environment.backend.checkCredentials}/${user.email}/${user.password}`);
  }
  generateJoke():any{
    return this.http.get<JokeFromBackend>(`${environment.backend.generatejoke}`);
  }

  saveJoke(joke:JokeToBackend){
    return this.http.post(`${environment.backend.saveJoke}`, { ...joke });
  }

  getMyJokes(){
    const storage=sessionStorage.getItem('user');
    const userId=Number(storage);
    return this.http.get<JokesToShow>(`${environment.backend.getMyjokes}/${userId}`);
  }
}

