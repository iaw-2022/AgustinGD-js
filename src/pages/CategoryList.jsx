import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import Categories from "../components/Categories"
import SearchBar from "./../components/SearchBar"
import { useState, useEffect } from "react";

const Container = styled.div``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  align-items: center;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const ProductList = (props) => {
  const { productosEnCarrito } = props;
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  return (
    <Container>
      <Navbar productosEnCarrito={productosEnCarrito}/>
      <Announcement />
      <Top>        
        <Title>Comprar por Categoria</Title>
        <Link to="/">        
          <TopButton >CONTINUE SHOPPING</TopButton>
        </Link>
      </Top>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Categorias:</FilterText>
          <SearchBar setTerminoBusqueda={setTerminoBusqueda} />
        </Filter>       
      </FilterContainer>
      <Categories terminoBusqueda={terminoBusqueda} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;