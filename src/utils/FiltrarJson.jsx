
export const filtrarNombre = (items, filtro) =>{
    const resultado = items.filter(matchName(items, filtro))
    return resultado;
}

const matchName = (item, filtro) => {
    if(filtro === ""){
        return item
    } else if (item.nombre.toLowerCase().includes(filtro.toLowerCase())) {
        return item
    }
}