import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/servicios/image.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {

  nombrePro: string= '';
  descripPro: string= '';
  link: string='';
  anio:number=0;
  imagen: string='';

  constructor(private proyectoService: ProyectoService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.clearUrl(); 
  }

  onCreate():void{
    this.imagen = this.imageService.urlImg;
    const proy = new Proyecto(this.nombrePro, this.descripPro, this.link, this.anio, this.imagen);
    this.proyectoService.save(proy).subscribe(data => {
      alert("Proyecto agregado");
        this.router.navigate([''])
    }, err=> {
      alert("Falló");
        this.router.navigate([''])

    })
    this.imageService.clearUrl(); 
  }


  uploadImage($event: any) {
    //const id = this.activatedRoute.snapshot.params['id'];   (ESTA LINEA SE ELIMINA)
    const name = "proyecto_" + this.nombrePro; 
    this.imageService.uploadImage($event, name);
  }

  cancel(): void {

    this.imageService.clearUrl();
    this.router.navigate(['']);

  }

}
