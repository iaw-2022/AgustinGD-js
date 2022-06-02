import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useState } from "react";
import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";
import { Alerta } from "../components/Alerts";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 400;
  color: #33658a;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const UnitPrice = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  padding-top: 50px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #33658A;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border-color: #F6AE2D;
  background-color: #F6AE2D;
  cursor: pointer;
  font-weight: 500;
`;

const Product = (props) => {
  const {productosEnCarrito, productoSeleccionado, sumarAlCarrito} = props;

  const [cantidadASumar, setCantidadASumar] = useState(1);  

  const sumarCantidad = () => { setCantidadASumar(cantidadASumar+1) };

  const restarCantidad = () => {
   if (cantidadASumar > 1)  setCantidadASumar(cantidadASumar-1) ;
  };

  return (
    <Container>
      <Alerta/> 
      <Navbar productosEnCarrito={productosEnCarrito}/>
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={productoSeleccionado.img} />
        </ImgContainer>
        <InfoContainer>
          <Title> <b>{productoSeleccionado.nombre}</b> con id: {productoSeleccionado.id}</Title>
          <Desc> {productoSeleccionado.descripcion} </Desc>
          <UnitPrice>
          {formatoMonedaArgentina(productoSeleccionado.precioPorUnidad)} (la unidad)
          </UnitPrice>
          <Price>{formatoMonedaArgentina(cantidadASumar * productoSeleccionado.precioPorUnidad)}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove 
                onClick={() => restarCantidad()}
                style={{
                  cursor: "pointer",
                  color: "#ED6A5E",
                }}
              />
              <Amount>{cantidadASumar}</Amount>
              <Add 
                onClick={() => sumarCantidad()}
                style={{
                  cursor: "pointer",
                  color: "#ED6A5E",
                }}
              />
            </AmountContainer>
            <Button onClick={() => sumarAlCarrito(productoSeleccionado, cantidadASumar)}>AÑADIR AL CARRITO</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
