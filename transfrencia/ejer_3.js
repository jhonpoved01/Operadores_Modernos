export const procesarCompra = (cliente, productos) => {
  try {
    if (
      !cliente?.nombre || !cliente?.correo ||
      !Array.isArray(productos) ||
      !productos.every(p => p?.nombre && typeof p.precio === "number")
    ) {
      throw new Error("Datos de cliente o productos inválidos");
    }

    const clienteInfo = { ...cliente };
    const [primerProducto, ...resto] = productos;

    const totalProductos = productos.length;
    const precioTotal = productos.reduce((acc, p) => acc + p.precio, 0);

    return {
      cliente: clienteInfo,
      totalProductos,
      precioTotal,
      primerProducto
    };
  } catch (e) {
    console.error(e.message);
  }
};