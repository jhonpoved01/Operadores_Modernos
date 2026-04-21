export const evaluar = (...valores) => {
  try {
    if (!valores.every(v => typeof v === "number" && !isNaN(v))) {
      throw new Error("Todos los valores deben ser numéricos");
    }
    return [...valores].reduce((a, b) => a + b, 0) / valores.length;
  } catch (e) {
    console.error(e.message);
  }
};