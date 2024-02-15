import { RegistroActividades } from "./RegistroActividades";
import { Actividad } from "./Actividad";


export class RegistroDiario implements RegistroActividades {
  constructor(public fecha: Date, public actividades: Actividad[] = []) {}

  agregarActividad(actividad: Actividad): void {
    this.actividades.push(actividad);
    console.log(`Se agregó la actividad ${actividad.nombre} al registro del día ${this.fecha.toLocaleDateString()}.`);
  }

  eliminarActividad(actividad: Actividad): void {
    const indiceActividad = this.actividades.indexOf(actividad);
    if (indiceActividad !== -1) {
      this.actividades.splice(indiceActividad, 1);
      console.log(`Se eliminó la actividad ${actividad.nombre} del registro del día ${this.fecha.toLocaleDateString()}.`);
    }
  }

  calcularTotalCaloriasQuemadas(): number {
    let totalCalorias = 0;
    this.actividades.forEach((actividad) => {
      totalCalorias += actividad.caloriasPorMinuto * actividad.duracion;
    });
    return totalCalorias;
  }

  mostrarActividades(): void {
    console.log(`Actividades del día ${this.fecha.toLocaleDateString()}:`);
    this.actividades.forEach((actividad, indice) => {
      console.log(`${indice + 1}. ${actividad.nombre} - ${actividad.caloriasPorMinuto * actividad.duracion} calorías`);
    });
  }
}


const caminar = new ActividadFisica('Caminar', 'Cardiovascular', 30, 50);
const correr = new ActividadFisica('Correr', 'Cardiovascular', 60, 100);
const yoga = new ActividadFisica('Yoga', 'Flexibilidad', 45, 30);

const registroDiario = new RegistroDiario(new Date());
registroDiario.agregarActividad(caminar);
registroDiario.agregarActividad(correr);
registroDiario.agregarActividad(yoga);
registroDiario.eliminarActividad(correr);
console.log(`Total de calorías quemadas en el día ${registroDiario.fecha.toLocaleDateString()}: ${registroDiario.calcularTotalCaloriasQuemadas()}.`);
registroDiario.mostrarActividades();