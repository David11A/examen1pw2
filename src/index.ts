import { Actividad } from './interfaces/Actividad';
import { RegistroDiario } from './interfaces/RegistroDiario.ts';
import { ActividadFisica } from './interfaces/ActividadFisica.ts';

const caminar = new ActividadFisica('Caminar', 'Cardiovascular', 30, 50);
const correr = new ActividadFisica('Correr', 'Cardiovascular', 60, 100);
const yoga = new ActividadFisica('Yoga', 'Flexibilidad', 45, 30);

const registroDiario = new RegistroDiario(new Date());

console.log(`Registro del día ${registroDiario.fecha.toLocaleDateString()}:`);
registroDiario.mostrarActividades();

registroDiario.agregarActividad(caminar);
registroDiario.agregarActividad(correr);
registroDiario.agregarActividad(yoga);

console.log(`Registro del día ${registroDiario.fecha.toLocaleDateString()} después de agregar actividades:`);
registroDiario.mostrarActividades();

registroDiario.eliminarActividad(correr);

console.log(`Registro del día ${registroDiario.fecha.toLocaleDateString()} después de eliminar una actividad:`);
registroDiario.mostrarActividades();

console.log(`Total de calorías quemadas en el día ${registroDiario.fecha.toLocaleDateString()}: ${registroDiario.calcularTotalCaloriasQuemadas()}.`);
