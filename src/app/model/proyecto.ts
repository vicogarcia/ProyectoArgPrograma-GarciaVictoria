export class Proyecto {
    id?: number;
    nombrePro: string;
    descripPro: string;
    link: string;
    anio:number;
    imagen: string;

    constructor(nombrePro: string, descripPro: string, link: string, anio:number, imagen: string){
        this.nombrePro=nombrePro;
        this.descripPro=descripPro;
        this.link=link;
        this.anio=anio;
        this.imagen=imagen;
    }
}
