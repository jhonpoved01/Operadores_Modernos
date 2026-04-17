

        /* ------TRANSFERENCIA------ */


        /* Ejercicio 5: Configuración Final */
import confiFinal from './transferencia/eje_5.js';
import { procesarPedido } from './apropiacion/ejer_1.mjs';
const pedido1 = procesarPedido(
    {cliente: 'saray', producto: 'Crochet kit', cantidad: 3},
    'agujas extras',
    'lana negra',
    'patrón avanzado'
);
console.log(pedido1);