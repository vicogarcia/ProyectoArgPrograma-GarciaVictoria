import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HysSkill } from 'src/app/model/hys-skill';
import { HysSkillService } from 'src/app/servicios/hys-skill.service';

@Component({
  selector: 'app-edit-hys-skill',
  templateUrl: './edit-hys-skill.component.html',
  styleUrls: ['./edit-hys-skill.component.css']
})
export class EditHysSkillComponent implements OnInit {
  skill: HysSkill = null;
  constructor(private hysSkillService: HysSkillService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hysSkillService.detail(id).subscribe(
      data => {
        this.skill = data;
        
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.hysSkillService.update(id,this.skill).subscribe(
      data => {
        alert("La habilidad se ha modificado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  cancel(): void {

    this.router.navigate(['']);

  }
}
