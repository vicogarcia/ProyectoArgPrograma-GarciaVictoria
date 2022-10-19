import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public uploadImage($event:any){
    const file = $event.target.file[0];
  }

}
