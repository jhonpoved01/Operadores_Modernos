export function crearEstudiante(nombre, ...notas) {
    try {
        for (let nota of notas) {
            if (typeof nota !== 'number') {
                throw new Error("Cuidado: una de las notas no es un número");
            }
        }
        const [primera, ...lasOtras] = notas;
        let suma = 0;
        for (let n of lasOtras) {
            suma = suma + n;
        }
        let promedio = 0;
        if (lasOtras.length > 0) {
            promedio = suma / lasOtras.length;
        }
        return {
            estudiante: nombre,
            notaPrincipal: primera,
            promedioRestante: promedio,
            totalDeNotas: notas.length
        };

    } catch (error) {
        console.log("Error detectado: " + error.message);
    }
}