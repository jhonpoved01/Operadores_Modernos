export const actualizarPerfil = (perfil, ...nuevosDatos) =>
  nuevosDatos.reduce((acc, dato) => ({ ...acc, ...dato }), { ...perfil });