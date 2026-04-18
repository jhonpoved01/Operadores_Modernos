export function configurarUsuario(defaults, personalizadas) {
    const configuracionFinal = { ...defaults, ...personalizadas };
    const { idioma } = configuracionFinal;
    return idioma;
}