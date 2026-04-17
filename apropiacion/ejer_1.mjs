export function procesarPedido ({cliente, producto, cantidad}, ...extras){
    return {
        cliente,
        producto,
        cantidad,
        adicionales: extras
    };
}
const pedido1 = procesarPedido(
    {cliente: 'saray', producto: 'Crochet kit', cantidad: 2},
    'agujas extras',
    'lana negra'
);
console.log(pedido1);
