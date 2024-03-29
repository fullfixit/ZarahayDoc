import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistreComponent } from './component/registre/registre.component';


const routes: Routes = [
  { 
    component: RegistreComponent, 
    path: ''},
  { 
    loadComponent: () => import('../app/component/actualite/actualite.component').then(m => m.ActualiteComponent),
    path: 'home'
  },
  { 
    loadComponent: () => import('../app/component/sign/sign.component').then(m => m.SignComponent),
    path: 'sign'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
