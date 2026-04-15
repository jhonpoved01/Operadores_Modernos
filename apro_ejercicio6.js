const totalPrimerProducto = (ventas) => {
  const [
    { detalles: { precio, unidades } }
  ] = ventas;

  return precio * unidades;
};

// Ejemplo
const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

console.log(totalPrimerProducto(ventas));