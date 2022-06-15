
export const filtrarNombre = (items, filtro) =>{    
    const resultado = items.filter( item => matchName(item, filtro))
    return resultado;
}

const matchName = (item, filtro) => {
    return (filtro === "") || (item.nombre.toLowerCase().includes(filtro.toLowerCase()))
}