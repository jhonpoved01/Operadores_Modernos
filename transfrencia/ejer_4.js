export const estadisticas = (jugadores) => {
  try {
    if (!Array.isArray(jugadores)) throw new Error("Formato inválido");

    const [{ stats: { puntos: puntosPrimero } }] = jugadores;

    const puntosTotales = jugadores.reduce(
      (acc, { stats: { puntos } }) => acc + puntos,
      0
    );

    const lista = jugadores.map(j => ({ ...j }));

    return { puntosPrimero, puntosTotales, lista };
  } catch (e) {
    return { error: e.message };
  }
};