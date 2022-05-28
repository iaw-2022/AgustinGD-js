import styled from "styled-components";
import Product from "./Product";
import { filtrarNombre } from "../utils/FiltrarJson";
import { ordenar } from "../utils/OrdenarJson";
import React, { useEffect, useState } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = (props) => {
  const { setProductoSeleccionado, sumarAlCarrito, terminoBusqueda, orden, products } = props;  

  if (!products)
    return <div>Cargando Productos...</div>;

  const productosFiltrados = terminoBusqueda ? filtrarNombre(products, terminoBusqueda) : products;  
  orden ? ordenar(productosFiltrados, orden): void(0);

  return (
    <Container>
      {productosFiltrados.map((producto) => (
        <Product
          producto={producto}
          key={producto.id}
          setProductoSeleccionado={setProductoSeleccionado}
          sumarAlCarrito={sumarAlCarrito}
        />
      ))}
    </Container>
  );
};

export default Products;
