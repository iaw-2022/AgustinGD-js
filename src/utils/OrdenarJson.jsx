export const ASCENDENTE_NOMBRE = "Nombre (asc)";
export const DESCENDENTE_NOMBRE = "Nombre (desc)";
export const ASCENDENTE_PRECIO = "Precio (asc)";
export const DESCENDENTE_PRECIO = "Precio (desc)";
export const RANDOM = "Random";

export const opcionesNombre = [RANDOM, ASCENDENTE_NOMBRE, DESCENDENTE_NOMBRE];
export const opcionesPrecio = [RANDOM, ASCENDENTE_PRECIO, DESCENDENTE_PRECIO];
export const opcionesProducto = [RANDOM, ASCENDENTE_PRECIO, DESCENDENTE_PRECIO, ASCENDENTE_NOMBRE, DESCENDENTE_NOMBRE];

export const ordenar = (items, orden) =>{
    switch(orden) {
        case ASCENDENTE_NOMBRE:
            items.sort((a,b) => a.nombre > b.nombre ? 1: -1);
            break;
        case DESCENDENTE_NOMBRE:
            items.sort((a,b) => a.nombre < b.nombre ? 1: -1);
            break;
        case ASCENDENTE_PRECIO:
            items.sort((a,b) => a.precioPorUnidad > b.precioPorUnidad ? 1: -1);
            break;
        case DESCENDENTE_PRECIO:
            items.sort((a,b) => a.precioPorUnidad < b.precioPorUnidad ? 1: -1);
            break;
        case RANDOM:
            items.sort(function(){ return Math.random() - 0.5});
            break;
        default:
            break;
    }
}