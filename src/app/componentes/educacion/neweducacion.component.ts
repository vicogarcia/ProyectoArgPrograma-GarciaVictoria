import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {

  nombreEdu: string='';
  institucion: string='';
  ubicacion: string='';
  fechaInicio: number=0;
  fechaFin: number=0;
  imagen: string='';

  constructor(private educacionService: EducacionService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.clearUrl(); 
  }

  onCreate():void{
    this.imagen = this.imageService.urlImg;
    const edu = new Educacion(this.nombreEdu, this.institucion, this.ubicacion, this.fechaInicio, this.fechaFin, this.imagen);
    this.educacionService.save(edu).subscribe(data => {
      alert("Educacion agregada");
        this.router.navigate([''])
    }, err=> {
      alert("Falló");
        this.router.navigate([''])

    })
    this.imageService.clearUrl(); 
    
  }
  
  uploadImage($event: any) {
      //const id = this.activatedRoute.snapshot.params['id'];   (ESTA LINEA SE ELIMINA)
      const name = "educacion_" + this.nombreEdu; 
      this.imageService.uploadImage($event, name);
    }

    cancel(): void {

      this.imageService.clearUrl();
      this.router.navigate(['']);
  
    }

}
