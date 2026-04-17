/*
Motor de configuración avanzada
Requerimiento:
Dispones de estas configuraciones:
const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
const extraConfig = { nivel: 2, tema: "oscuro" };
Crea la función configFinal(...configs) que:
1. Reciba múltiples configuraciones usando rest.
2. Use spread para mezclarlas todas en un solo objeto final sin mutar ninguna.
3. Valide con try...catch que cada elemento recibido sea un objeto.
4. Retorne un objeto final con una propiedad adicional:
o validacion: true si todo salió bien
Resultado esperado:
Un objeto final consolidado, estable y construido con prácticas de programación segura,
que refleje el uso combinado de todos los conceptos de la guía.
*/

const baseConfig = { 
    modo: "producción", 
    lenguaje: "es", 
    nivel: 1 
};

const extraConfig = { 
    nivel: 2, 
    tema: "oscuro" 
};

export default function confiFinal(...configs) {
    try {
        configs.forEach((config, index) => {
            if (typeof config !== "object" || config === null || Array.isArray(config)) {
                throw new Error(`El elemento en la posición ${index} no es un objeto válido`);
            }
        });

        const finalConfig = configs.reduce((acc, config) => ({
            ...acc,
            ...config
        }), {});

        return {
            ...finalConfig,
            validacion: true
        };

    } catch (error) {
        console.error(error.message);
        return {
            validacion: false,
            error: error.message
        };
    }
}   