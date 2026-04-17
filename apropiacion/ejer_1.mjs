export function procesarPedido ({cliente, producto, cantidad}, ...extras){
    return {
        cliente,
        producto,
        cantidad,
        adicionales: extras
    };
}
