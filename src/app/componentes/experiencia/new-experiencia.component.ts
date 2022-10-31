import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string='';
  descripExp: string = '';
  lugar: string='';
  fechaInicio: number=0;
  fechaFin: number=0;
  imagen: string='';

  constructor(private experienciaService: ExperienciaService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.clearUrl(); 
  }

  onCreate():void{
    this.imagen = this.imageService.urlImg;
    const expe = new Experiencia(this.nombreExp,this.descripExp,this.lugar,this.fechaInicio,this.fechaFin,this.imagen);
    this.experienciaService.save(expe).subscribe(data => {
      alert("Experiencia agregada");
        this.router.navigate([''])
    }, err=> {
      alert("Falló");
        this.router.navigate([''])

    })
    this.imageService.clearUrl();
  }

  uploadImage($event: any) {
    //const id = this.activatedRoute.snapshot.params['id'];   (ESTA LINEA SE ELIMINA)
    const name = "explab_" + this.nombreExp; 
    this.imageService.uploadImage($event, name);
  }

  cancel(): void {

    this.imageService.clearUrl();
    this.router.navigate(['']);

  }

}
