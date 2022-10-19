import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proy: Proyecto[] = [];
  constructor(private proyectoService:ProyectoService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
}

cargarProyecto():void{
  this.proyectoService.lista().subscribe(data => { this.proy = data;})
}

delete(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          alert("Se ha borrado el proyecto");
          this.cargarProyecto();
        },err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }
}

}
