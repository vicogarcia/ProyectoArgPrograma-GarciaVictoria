import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

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

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe = new Experiencia(this.nombreExp, this.descripExp);
    
    this.experienciaService.save(expe).subscribe(data => {
      alert("Experiencia agregada");
        this.router.navigate([''])
    }, err=> {
      alert("Falló");
        this.router.navigate([''])

    })
    
  }

}
