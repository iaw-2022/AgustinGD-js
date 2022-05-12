
export const filtrarNombre = (items, filtro) =>{
    const resultado = items.filter((item) => {
                        if(filtro == ""){
                            return item
                        } else if (item.nombre.toLowerCase().includes(filtro.toLowerCase())) {
                            return item
                        }
                    })
    return resultado;
}
