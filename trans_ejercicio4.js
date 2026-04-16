const estadisticas = (arr) => {
  try {
    if (!Array.isArray(arr) || !arr.length) throw Error("Datos inválidos");

    arr.forEach(j => {
      if (!j.nombre || !j.stats || typeof j.stats.puntos !== "number") {
        throw Error("Estructura incorrecta");
      }
    });

    const [{ stats: { puntos } }] = arr;

    const copia = [...arr];

    const total = copia.reduce((a, j) => a + j.stats.puntos, 0);

    return {
      primero: puntos,
      total,
      jugadores: copia
    };

  } catch (e) {
    console.error("Error:", e.message);
  }
};

// Ejemplo
const jugadores = [
  { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
  { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];

console.log(estadisticas(jugadores));