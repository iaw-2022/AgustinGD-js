import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import SimpleCategories from "./../components/SimpleCategories"

const Container = styled.div``;

const Header = styled.h1`
  text-align: center;
`;

const CategoryContainer = styled.div`
  justify-content: center;
  padding: 20px 100px 30px 100px;
  background-color: lightgrey;
`;

const ProductList = (props) => {
  const { productosEnCarrito } = props;

  return (
    <Container>
      <Navbar productosEnCarrito={productosEnCarrito}/>
      <Announcement />
      <CategoryContainer>
        <Header>Comprar por Categoria</Header>
        <SimpleCategories />
      </CategoryContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;