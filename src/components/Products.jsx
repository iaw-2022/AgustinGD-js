import styled from "styled-components";
import Product from "./Product";
import { filtrarNombre } from "../utils/FiltrarJson";
import { ordenar } from "../utils/OrdenarJson";
import apiBase from "../api/apiBase";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = (props) => {
  const { setProductoSeleccionado, sumarAlCarrito, terminoBusqueda, orden } = props;  
  const { category_name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const fetchRandomProducts = async () => {
      try{
        const response = (category_name) ? 
          await apiBase.get("/productos") : 
          await apiBase.get("/productos/random/4")
        setProducts(response.data)
      } catch (err){
        console.log("ayayay")
      }
    }

    fetchRandomProducts();
  }, [category_name]);

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
