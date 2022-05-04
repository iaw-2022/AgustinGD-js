export const CantidadTotalProductosCarrito = (productosEnCarrito) => {    
    return (
        productosEnCarrito.length
    );
};

export const PrecioTotalProductosCarrito = (productosEnCarrito) => {    
    return (
        productosEnCarrito.reduce((total, producto) => total + (producto.cantidad * producto.precioPorUnidad), 0)
    );
};