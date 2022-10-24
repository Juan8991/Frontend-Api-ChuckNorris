import { Component, OnInit } from '@angular/core';
import { JokeFromBackend, JokeToBackend } from 'src/app/core/models/joke.model';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import swal from'sweetalert2';

@Component({
  selector: 'app-get-jokes',
  templateUrl: './get-jokes.component.html',
  styleUrls: ['./get-jokes.component.css']
})
export class GetJokesComponent implements OnInit {
  joke!:JokeToBackend;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  getJoke(){
    const storage=sessionStorage.getItem('user');
    const userId=Number(storage);
    this.apiService.generateJoke().subscribe({
      next:(res: any)=>{
        console.log(res);
        this.joke={
          iconUrl:res.icon_url,
          id:res.id,
          url:res.url,
          value:res.value,
          userId:userId
        };
        console.log("joke:",this.joke)
      },
      error:(error:HttpErrorResponse)=>{},
      complete:()=> {}
    });
  }
  addFavorite(){
    this.apiService.saveJoke(this.joke).subscribe({
      next:(res: any)=>{},
      error:(error:HttpErrorResponse)=>{},
      complete:()=> {
        swal.fire({
          title:"Chiste añadido a favoritos",
          icon:"success"
        })
      }
    })
  }
}
