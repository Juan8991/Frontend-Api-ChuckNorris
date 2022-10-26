import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForm } from 'src/app/core/models/user.model';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import swal from'sweetalert2';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  visible:boolean = true;
  changetype:boolean =true;
  user!:UserForm;
 

  constructor(
    private apiService:ApiService,
    private router: Router,
    private authService:AuthService){ }


    loginForm=new FormGroup({
      email: new FormControl('', { validators: [Validators.required,Validators.email]}),
      password: new FormControl('', { validators: [Validators.required]})
    })
  ngOnInit() {

  }
  changeVisibility(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  submitUser(){
    const emailUser = this.loginForm.get('email')?.value;
    const passwordUser = this.loginForm.get('password')?.value;
    this.user={
      email:emailUser,
      password:passwordUser
    }
    this.apiService.verifyUser(this.user).subscribe({
      next:(res:number)=>{
        sessionStorage.clear();
        sessionStorage.setItem("user",res.toString());
        this.authService.logged.next(true);
      },
      error:(error:HttpErrorResponse)=>{
        let code:number=error.status;
        if(code===401){
          swal.fire({
            title:"Credenciales Incorrectas!",
            icon:"error"
          })
        }else if(code===404){
          swal.fire({
            title:"Usuario no encontrado",
            icon:"error"
          })
        }
      },
      complete:()=>{
        this.router.navigate(['/jokes'])
      }
    })

  }

}
