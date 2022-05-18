import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PRODUCT_PATH } from "../utils/Constants";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #33658A;
  position: relative;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F6AE2D;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #f59e02;
    transform: scale(1.1);
  }
`;

const Product = (props) => {
  const {producto, setProductoSeleccionado, sumarAlCarrito} = props;
  
  return (
    <Container>
      <Circle />
      <Image src={producto.img} />
      <Info>
        <Icon onClick={() => sumarAlCarrito(producto)}>
          <ShoppingCartOutlined style={{ color: "black"}}/>
        </Icon>
        <Link onClick={() => setProductoSeleccionado(producto)} to={PRODUCT_PATH}>
          <Icon>
            <SearchOutlined style={{ color: "black"}}/>
          </Icon>
        </Link>  
      </Info>
    </Container>
  );
};

export default Product;
