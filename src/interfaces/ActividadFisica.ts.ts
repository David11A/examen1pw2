import { Actividad } from "./Actividad";


export class ActividadFisica implements Actividad {
    constructor(
      public nombre: string,
      public tipoActividad: string,
      public duracion: number,
      public caloriasPorMinuto: number
    ) {}
  
    calcularCaloriasQuemadas(): number {
      return this.caloriasPorMinuto * this.duracion;
    }
  }