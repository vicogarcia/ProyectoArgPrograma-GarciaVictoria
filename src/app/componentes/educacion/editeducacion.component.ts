import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  educacion: Educacion = null;
  constructor(private educacionService: EducacionService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data => {
        this.educacion = data;
        
      }, err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.imagen = this.imageService.url
    this.educacionService.update(id,this.educacion).subscribe(
      data => {
        alert("La educacion se ha modificado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id= this.activatedRouter.snapshot.params['id'];
    const name = `educacion_`+ id;
    this.imageService.uploadImage($event, name);
  }
}
