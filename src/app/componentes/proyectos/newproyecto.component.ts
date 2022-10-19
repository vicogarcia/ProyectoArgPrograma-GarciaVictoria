import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
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

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proy = new Proyecto(this.nombrePro, this.descripPro, this.link, this.anio, this.imagen);
    
    this.proyectoService.save(proy).subscribe(data => {
      alert("Proyecto agregado");
        this.router.navigate([''])
    }, err=> {
      alert("Falló");
        this.router.navigate([''])

    })
    
  }

}
