export const totalPrimerProducto = ([{ detalles: { precio, unidades } }]) =>
  precio * unidades;