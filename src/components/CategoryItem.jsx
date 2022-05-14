import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { PRODUCT_LIST_PATH } from "../utils/Constants";

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
  ${mobile({ height: "unset" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-align: center;
`;

const Button = styled.button`
    border-color: #F6AE2D;
    padding: 10px;
    background-color: #F6AE2D;
    color: black;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = (props) => {
  const { categoria, setCategoriaSeleccionada } = props

  return (
    <Container>
      <Image src={categoria.img} />
      <Info>
        <Title>{categoria.nombre}</Title>
        <Link onClick={() => setCategoriaSeleccionada(categoria)} to={PRODUCT_LIST_PATH}>
          <Button>COMPRAR AHORA</Button>
        </Link>        
      </Info>
    </Container>
  );
};

export default CategoryItem;
