import { Component, OnInit } from '@angular/core';
import { JokesToShow, JokeToBackend } from 'src/app/core/models/joke.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-my-jokes',
  templateUrl: './my-jokes.component.html',
  styleUrls: ['./my-jokes.component.css']
})
export class MyJokesComponent implements OnInit {
  jokesList:JokeToBackend[]=[];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getMyJokes().subscribe({
      next:(res) => {
        res.jokes.forEach((joke)=>{
          this.jokesList.push({
            iconUrl: joke.iconUrl,
            id:joke.id,
            url:joke.url,
            value:joke.value ,
            userId:joke.userId
          });
        })

        console.log("mis jokes:",this.jokesList)
      }
    })
  }

}
