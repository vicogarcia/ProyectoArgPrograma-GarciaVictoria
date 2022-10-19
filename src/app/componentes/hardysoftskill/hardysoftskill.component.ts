import { Component, OnInit } from '@angular/core';
import { HysSkill } from 'src/app/model/hys-skill';
import { HysSkillService } from 'src/app/servicios/hys-skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-hardysoftskill',
  templateUrl: './hardysoftskill.component.html',
  styleUrls: ['./hardysoftskill.component.css']
})
export class HardysoftskillComponent implements OnInit {
  hys: HysSkill[] = [];
  constructor(private hysSkillService:HysSkillService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarHys();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
}

cargarHys():void{
  this.hysSkillService.lista().subscribe(data => { this.hys = data;})
}

delete(id?: number){
    if(id != undefined){
      this.hysSkillService.delete(id).subscribe(
        data => {
          alert("Se ha borrado la habilidad");
          this.cargarHys();
        },err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
}

}
