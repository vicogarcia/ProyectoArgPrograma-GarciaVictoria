export class Experiencia {
    id? : number;
    nombreExp : string;
    descripExp : string;
    lugar: string;
    fechaInicio: number;
    fechaFin: number;
    imagen: string;

    constructor(nombreExp:string, descripExp:string){
        this.nombreExp= nombreExp;
        this.descripExp= descripExp;
    }
}
