import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
const routes: Routes = [
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'portada', component:PortadaComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'login', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
