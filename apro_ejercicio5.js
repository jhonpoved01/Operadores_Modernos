const actualizarPerfil = (perfil, ...nuevosDatos) => {
  return nuevosDatos.reduce(
    (perfilActual, cambios) => ({ ...perfilActual, ...cambios }),
    { ...perfil } 
  );
};

const perfil = { nombre: "Luis", edad: 20, ciudad: "Bogotá" };

const actualizado = actualizarPerfil(
  perfil,
  { edad: 22 },
  { ciudad: "Medellín" },
  { profesion: "Diseñador" }
);

console.log(actualizado);