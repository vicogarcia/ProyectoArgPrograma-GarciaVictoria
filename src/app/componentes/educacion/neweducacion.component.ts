import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

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

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const edu = new Educacion(this.nombreEdu, this.institucion, this.ubicacion, this.fechaInicio, this.fechaFin, this.imagen);
    
    this.educacionService.save(edu).subscribe(data => {
      alert("Educacion agregada");
        this.router.navigate([''])
    }, err=> {
      alert("Falló");
        this.router.navigate([''])

    })
    
  }

}
