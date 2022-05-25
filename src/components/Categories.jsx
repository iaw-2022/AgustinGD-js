import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { filtrarNombre } from "../utils/FiltrarJson";
import { ordenar } from "../utils/OrdenarJson";
import apiBase from "../api/apiBase";
import React, { useEffect, useState, useRef } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories =  (props) => {
  const { terminoBusqueda, orden, setCategoriaSeleccionada } = props
  const [categories, setCategories] = useState(null);

  useEffect(() => {
      const fetchRandomCategories = async () => {
        try{
          const response = await apiBase.get("/categorias")
          setCategories(response.data)
        } catch (err){
          console.log("ayayay")
        }
      }
  
      fetchRandomCategories();  
  }, []);

  

  if (!categories) 
    return <div>Cargando Categorias...</div>;

  const categoriasFiltradas = terminoBusqueda ? filtrarNombre(categories, terminoBusqueda) : categories;
  orden ? ordenar(categoriasFiltradas, orden): void(0);

  return (
    <Container>
      {categoriasFiltradas.map((categoria) => (
        <CategoryItem 
          categoria={categoria}
          key={categoria.id}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
      ))}
    </Container>
  );
};

export default Categories;
