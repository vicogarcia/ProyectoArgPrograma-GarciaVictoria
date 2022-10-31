import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  explab: Experiencia = null;
  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data => {
        this.explab = data;
        
      }, err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.explab.imagen = this.imageService.urlImg
    this.experienciaService.update(id,this.explab).subscribe(
      data => {
        alert("La experiencia se ha modificado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id= this.activatedRouter.snapshot.params['id'];
    const name = `explab_`+ id;
    this.imageService.uploadImage($event, name);
  }

  cancel(): void {

    this.imageService.clearUrl();
    this.router.navigate(['']);

  }
}
