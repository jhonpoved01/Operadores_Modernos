const evaluar = (...valores) => {
  try {
    
    valores.forEach(v => {
      if (typeof v !== "number" || isNaN(v)) {
        throw new Error("Todos los valores deben ser numéricos");
      }
    });


    const copia = [...valores];

    
    const promedio =
      copia.reduce((acc, num) => acc + num, 0) / copia.length;

    return promedio;

  } catch (error) {
    console.error("Error:", error.message);
  }
};

console.log(evaluar(10, 20, 30));     
console.log(evaluar(10, "hola", 30)); 