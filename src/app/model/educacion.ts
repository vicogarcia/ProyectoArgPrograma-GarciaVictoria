export class Educacion {
    id?: number;
    nombreEdu: string;
    institucion: string;
    ubicacion: string;
    fechaInicio: number;
    fechaFin: number;
    imagen: string;

    constructor(nombreEdu: string, institucion: string, ubicacion: string, fechaInicio: number, fechaFin: number, imagen: string){
        this.nombreEdu= nombreEdu;
        this.institucion= institucion;
        this.ubicacion= ubicacion;
        this.fechaInicio= fechaInicio;
        this.fechaFin= fechaFin;
        this.imagen=imagen;
    }
}
