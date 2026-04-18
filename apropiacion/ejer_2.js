const inventario = ["cámara", "trípode", "micrófono"];
export function agregarInventario(lista, nuevoItem) {
    const nuevaLista = [...lista, nuevoItem];
    console.log(`El inventario ahora tiene ${nuevaLista.length} ítem`);
    return nuevaLista;
}
