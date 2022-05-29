import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import React, { useEffect, useState } from "react";
import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";
import { useParams } from "react-router-dom";
import apiBase from "../api/apiBase";
import NotFound from "./NotFound";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
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
  font-weight: bold;
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
  const { productosEnCarrito, productoSeleccionado, sumarAlCarrito } = props;
  const [cantidadASumar, setCantidadASumar] = useState(1);
  const { product_name } = useParams();
  const [product, setProduct] = useState(null);
  const productNotFound = (product) && (product.length === 0);

  const sumarCantidad = () => { setCantidadASumar(cantidadASumar + 1) };

  const restarCantidad = () => {
    if (cantidadASumar > 1) setCantidadASumar(cantidadASumar - 1);
  };

  useEffect(() => {
    if (!productoSeleccionado) {
      const fetchProduct = async () => {
        try {
          const response = await apiBase.get(`/productos/${product_name}`)
          const data = response.data.length === 0 ? response.data : response.data[0];
          setProduct(data)
        } catch (err) {
          console.log("ayayay")
        }
      }

      fetchProduct();
    } else {
      setProduct(productoSeleccionado);
    }
  }, [product_name, productoSeleccionado]);

  if (!product) {
    return <div>Cargando...</div>
  }

  if (productNotFound)
    return (<NotFound productosEnCarrito={productosEnCarrito} />)

  return (
    <Container>
      <Navbar productosEnCarrito={productosEnCarrito} />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.imagen_dir} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.nombre}</Title>
          <Desc> {product.descripcion} </Desc>
          <UnitPrice>
            {formatoMonedaArgentina(product.precioPorUnidad)} (la unidad)
          </UnitPrice>
          <Price>{formatoMonedaArgentina(cantidadASumar * product.precioPorUnidad)}</Price>
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
            <Button onClick={() => sumarAlCarrito(product, cantidadASumar)}>AÑADIR AL CARRITO</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
