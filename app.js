

        /* ------TRANSFERENCIA------ */


        /* Ejercicio 5: Configuración Final */
import confiFinal from './transferencia/eje_5.js';
//1
import { procesarPedido } from './apropiacion/ejer_1.mjs';
const pedido1 = procesarPedido(
    {cliente: 'saray', producto: 'Crochet kit', cantidad: 2},
    'agujas extras',
    'lana negra'
);
console.log(pedido1);
//2
import { agregarInventario } from './apropiacion/ejer_2.js';
const inventarioInicial = ["cámara", "trípode", "micrófono"];
const inventarioActualizado = agregarInventario(inventarioInicial, "Luz LED");
console.log("Original:", inventarioInicial); 
console.log("Nuevo:", inventarioActualizado);
//3
import { registrarActividad } from './apropiacion/ejer_3.js';
registrarActividad({ nombre: "Tejer bufanda", fecha: "Hoy" });
registrarActividad({ nombre: "Hacer ejercicio", fecha: "Mañana" });
//4
import { configurarUsuario } from './apropiacion/ejer_4.js';
const defaults = { tema: "claro", idioma: "es" };
const personalizadas = { tema: "oscuro", idioma: "en" };
const idiomaFinal = configurarUsuario(defaults, personalizadas);
console.log("El idioma que quedó es: " + idiomaFinal); 
//ejercicio 7
import { evaluar } from "./evaluar.js";

console.log(evaluar(10, 20, 30));     // 20
console.log(evaluar(10, "x", 30));    // Error: Todos los valores deben ser numéricos

//puntos transferencia
//1
import { crearEstudiante } from './apropiacion/ejer_5.js';
const resultado = crearEstudiante("Saray", 5, 4, 3);
console.log(resultado);
crearEstudiante("Miguel", 5, "hola");
//2
import { fusionarCatalogos } from './apropiacion/ejer_6.js';
const catalogoA = [
    { id: 1, nombre: "Curso JavaScript", precio: 40 },
    { id: 2, nombre: "Curso HTML", precio: 35 }
];
const catalogoB = [
    { id: 3, nombre: "Curso CSS", precio: 30 }
];
const resultado = fusionarCatalogos(catalogoA, catalogoB);
console.log("Catálogo unido y ordenado:");
console.log(resultado);