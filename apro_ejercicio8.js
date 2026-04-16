const fusionarColecciones = (lista1, lista2) => {
  try {
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
      throw new Error("Ambos parámetros deben ser arreglos");
    }


    const fusion = [...lista1, ...lista2];

    return fusion;

  } catch (error) {
    console.error("Error:", error.message);
  }
};
console.log(fusionarColecciones([1, 2], [3, 4]));
console.log(fusionarColecciones([1, 2], "no es arreglo"));