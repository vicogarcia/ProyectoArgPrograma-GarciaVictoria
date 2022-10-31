import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/servicios/image.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proy: Proyecto = null;
  constructor(private proyectoService: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data => {
        this.proy = data;
        
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proy.imagen = this.imageService.urlImg
    this.proyectoService.update(id,this.proy).subscribe(
      data => {
        alert("El proyecto se ha modificado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id= this.activatedRouter.snapshot.params['id'];
    const name = `proyecto_`+ id;
    this.imageService.uploadImage($event, name);
  }

  cancel(): void {

    this.imageService.clearUrl();
    this.router.navigate(['']);

  }
}
