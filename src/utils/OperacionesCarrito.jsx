export const CantidadTotalProductosCarrito = (productosEnCarrito) => {    
    return (
        productosEnCarrito.reduce((total, producto) => total + producto.cantidad, 0)
    );
};

export const PrecioTotalProductosCarrito = (productosEnCarrito) => {    
    return (
        productosEnCarrito.reduce((total, producto) => total + (producto.cantidad * producto.precioPorUnidad), 0)
    );
};