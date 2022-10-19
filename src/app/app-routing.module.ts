import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';
import { EditproyectoComponent } from './componentes/proyectos/editproyecto.component';
import { NewHysSkillComponent } from './componentes/hardysoftskill/new-hys-skill.component';
import { EditHysSkillComponent } from './componentes/hardysoftskill/edit-hys-skill.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'nuevaExp', component:NewExperienciaComponent},
  {path: 'editExp/:id', component:EditExperienciaComponent},
  {path: 'nuevaEdu', component:NeweducacionComponent},
  {path: 'editEdu/:id', component:EditeducacionComponent},
  {path: 'nuevoProy', component:NewproyectoComponent},
  {path: 'editProy/:id', component:EditproyectoComponent},
  {path: 'nuevaSkill', component:NewHysSkillComponent},
  {path: 'editHyS/:id', component:EditHysSkillComponent},
  {path: 'editAcerca-de/:id', component:EditAcercaDeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
