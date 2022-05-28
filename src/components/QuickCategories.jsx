import styled from "styled-components";
import { mobile } from "../responsive";
import QuickCategoryItem from "./QuickCategoryItem";
import apiBase from "../api/apiBase";
import React, { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const QuickCategories = (props) => {
  const { setCategoriaSeleccionada } = props
  const [randomCategories, setRandomCategories] = useState([]);

  useEffect(() => {    
    const fetchRandomCategories = async () => {
      try{
        const response = await apiBase.get("/categorias/random/3")
        setRandomCategories(response.data)
      } catch (err){
        console.log("ayayay")
      }
    }

    fetchRandomCategories();
  }, []);

  return (
    <Container>
      {randomCategories.map((categoria) => (
        <QuickCategoryItem
          categoria={categoria}
          key={categoria.id}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
      ))}
    </Container>
  );
};

export default QuickCategories;
