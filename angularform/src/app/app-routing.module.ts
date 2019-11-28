import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactComponent } from './react/react.component';
import { TemplateformComponent } from './templateform/templateform.component';


const routes: Routes = [
  
 {path:'',component:HomeComponent},
 {path:'react',component:ReactComponent},
 {path:'template',component:TemplateformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
