export const formatoMonedaArgentina = (valor) => {
    return Intl.NumberFormat("es-AR",{
        style: 'currency',
        currency: 'ARS',
    }).format(valor)
}