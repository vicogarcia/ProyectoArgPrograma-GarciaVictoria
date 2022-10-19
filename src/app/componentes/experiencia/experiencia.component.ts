import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  constructor(private experienciaService:ExperienciaService, private tokenService: TokenService) { }

isLogged = false;


  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
}

cargarExperiencia():void{
  this.experienciaService.lista().subscribe(data => { this.expe = data;})
}

delete(id?: number){
    if(id != undefined){
      this.experienciaService.delete(id).subscribe(
        data => {
          alert("Se ha borrado la experiencia");
          this.cargarExperiencia();
        },err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
}

}
