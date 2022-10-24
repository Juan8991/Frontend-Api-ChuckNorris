import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/core/guards/is-logged-in.guard';
import { GetJokesComponent } from './get-jokes/get-jokes.component';
import { MyJokesComponent } from './my-jokes/my-jokes.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
    //canActivateChild: [IsLoggedInGuard],
  },
  {
    path: 'jokes',
    component:GetJokesComponent,
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'myjokes',
    component:MyJokesComponent,
    canActivate: [IsLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
