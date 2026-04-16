const procesarCompra = (usr, items) => {
  try {
    if (!usr.nombre || !usr.correo) throw Error("Cliente inválido");
    if (!Array.isArray(items) || !items.length) throw Error("Lista inválida");

    items.forEach(i => {
      if (!i.nombre || typeof i.precio !== "number") throw Error("Item inválido");
    });

    const cliente = { ...usr }; 
    const [primero] = items;    

    return {
      cliente,
      total: items.length,
      suma: items.reduce((a, i) => a + i.precio, 0),
      primero
    };

  } catch (e) {
    console.error("Error:", e.message);
  }
};


console.log(
  procesarCompra(
    { nombre: "Pedro", correo: "p@correo.com" },
    [{ nombre: "Lapiz", precio: 5 }, { nombre: "Borrador", precio: 3 }]
  )
);