import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion : Educacion[] = [];
  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }
  isLogged = false;


  ngOnInit(): void {
      this.cargarEducacion();
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
  }

  cargarEducacion():void{
    this.educacionService.lista().subscribe(data => { this.educacion = data;})
  }


  delete(id?: number){
    if(id != undefined){
      this.educacionService.delete(id).subscribe(
        data => {
          alert("Se ha borrado la educacion");
          this.cargarEducacion();
        },err => {
          alert("No se pudo borrar la educacion");
        }
      )
    }
}

}
