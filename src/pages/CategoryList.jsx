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

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Header = styled.h1`
  text-align: center;
`;

const ProductList = (props) => {
  const { productosEnCarrito } = props;
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  return (
    <Container>
      <Navbar productosEnCarrito={productosEnCarrito}/>
      <Announcement />
      <Top>
        <SearchBar setTerminoBusqueda={setTerminoBusqueda} />
        <Header>Comprar por Categoria</Header>
        <Link to="/">        
          <TopButton >CONTINUE SHOPPING</TopButton>
        </Link>
      </Top>
      <Categories terminoBusqueda={terminoBusqueda} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;