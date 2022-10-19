import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HysSkill } from 'src/app/model/hys-skill';
import { HysSkillService } from 'src/app/servicios/hys-skill.service';

@Component({
  selector: 'app-new-hys-skill',
  templateUrl: './new-hys-skill.component.html',
  styleUrls: ['./new-hys-skill.component.css']
})
export class NewHysSkillComponent implements OnInit {
  nombre: string='';
  porcentaje: number = 0;

  constructor(private hysSkillService: HysSkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new HysSkill(this.nombre, this.porcentaje);
    
    this.hysSkillService.save(skill).subscribe(data => {
      alert("Habilidad agregada");
        this.router.navigate([''])
    }, err=> {
      alert("Falló");
        this.router.navigate([''])

    })
    
  }

}
