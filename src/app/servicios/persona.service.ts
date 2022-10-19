import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private perURL= 'https://portfoliobkd.herokuapp.com/persona/';

  constructor(private httpClient: HttpClient) {   }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.perURL + 'lista');
  }

  public detail(id: number): Observable<any>{
    return this.httpClient.get<any>(this.perURL + `detail/${id}`);
  }

  /*public save(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.perURL + 'create', persona);
  }*/

  public update(id:number, persona: Persona): Observable<any>{
    return this. httpClient.put<any>(this.perURL + `update/${id}`, persona);
  }

  /*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.perURL + `delete/${id}`);
  }*/

}
