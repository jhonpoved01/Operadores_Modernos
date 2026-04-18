export function registrarActividad(actividad) {
    try {
        const { nombre, fecha } = actividad;
        if (!nombre || !fecha) {
            throw new Error("te falta el nombre o la fecha");
        }
        console.log("Excelente Guardamos: " + nombre + " para el " + fecha);

    } catch (error) {
        console.log("Hubo un problema: " + error.message);
    }
}
