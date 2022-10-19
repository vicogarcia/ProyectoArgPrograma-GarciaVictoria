import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HardysoftskillComponent } from './componentes/hardysoftskill/hardysoftskill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { interceptorProvider} from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';
import { EditproyectoComponent } from './componentes/proyectos/editproyecto.component';
import { NewHysSkillComponent } from './componentes/hardysoftskill/new-hys-skill.component';
import { EditHysSkillComponent } from './componentes/hardysoftskill/edit-hys-skill.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PortadaComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    LoginComponent,
    AcercaDeComponent,
    HeaderComponent,
    HardysoftskillComponent,
    FooterComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectoComponent,
    EditproyectoComponent,
    NewHysSkillComponent,
    EditHysSkillComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
