export function fusionarCatalogos(a, b) {
    try {
        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("Ambos parámetros deben ser listas");
        }
        const catalogoCompleto = [...a, ...b];
        const catalogoOrdenado = catalogoCompleto.sort((item1, item2) => {
            return item1.precio - item2.precio;
        });
        return catalogoOrdenado;

    } catch (error) {
        console.log("Error en la fusión: " + error.message);
        return [];
    }
}