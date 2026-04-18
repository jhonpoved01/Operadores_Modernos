

        /* ------TRANSFERENCIA------ */


        /* Ejercicio 5: Configuración Final */
import confiFinal from './transferencia/eje_5.js';

import { procesarPedido } from './apropiacion/ejer_1.mjs';
const pedido1 = procesarPedido(
    {cliente: 'saray', producto: 'Crochet kit', cantidad: 2},
    'agujas extras',
    'lana negra'
);
console.log(pedido1);

import { agregarInventario } from './apropiacion/ejer_2.js';
const inventarioInicial = ["cámara", "trípode", "micrófono"];
const inventarioActualizado = agregarInventario(inventarioInicial, "Luz LED");
console.log("Original:", inventarioInicial); 
console.log("Nuevo:", inventarioActualizado);


