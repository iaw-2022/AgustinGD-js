import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = (props) => {
  const {seleccionarProducto, sumarAlCarrito} = props;
  return (
    <Container>
      {popularProducts.map((producto) => (
        <Product producto={producto} key={producto.id} seleccionarProducto={seleccionarProducto} sumarAlCarrito={sumarAlCarrito}/>
      ))}
    </Container>
  );
};

export default Products;
