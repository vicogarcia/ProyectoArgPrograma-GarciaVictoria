import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HysSkill } from '../model/hys-skill';

@Injectable({
  providedIn: 'root'
})
export class HysSkillService {
  hysURL = 'https://portfoliobkd.herokuapp.com/hys/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<HysSkill[]>{
    return this.httpClient.get<HysSkill[]>(this.hysURL + 'lista');
  }

  public detail(id: number): Observable<any>{
    return this.httpClient.get<any>(this.hysURL + `detail/${id}`);
  }

  public save(hys: HysSkill): Observable<any>{
    return this.httpClient.post<any>(this.hysURL + 'create', hys);
  }

  public update(id:number, hys: HysSkill): Observable<any>{
    return this. httpClient.put<any>(this.hysURL + `update/${id}`, hys);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.hysURL + `delete/${id}`);
  }
}
