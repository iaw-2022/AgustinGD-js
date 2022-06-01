import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartProduct from "../components/CartProduct";
import { tablet } from "../responsive";
import { PrecioTotalProductosCarrito, CantidadTotalProductosCarrito } from "../utils/OperacionesCarrito";
import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";
import apiBase from "../api/apiBase";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import { ORDER_LIST_PATH } from "../utils/Constants";
import { useState } from "react";
import { newPromise, updatePromise } from "../components/Alerts";
import Loading from "../components/Loading";
import { confirmation } from "../components/confirmationAlert/ConfirmationAlert";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${tablet({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

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
  border: none;
  background-color: #F6AE2D;
  color: black;
  display: none;
  ${tablet({ display: "unset" })}
`;

const TopTexts = styled.div`
  
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 310px;
  @media only screen and (max-width: 1360px) {
    height: 350px;
  }
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  border-color: #F6AE2D;
  background-color: #F6AE2D;
  width: 100%;
  padding: 10px;
  color: black;
  font-weight: 600;
`;

const Cart = (props) => {
  const { productosEnCarrito, sumarAlCarrito, restarAlCarrito, removerDelcarrito, limpiarCarrito } = props;
  const precioTotalProductosCarrito = PrecioTotalProductosCarrito(productosEnCarrito);
  const cantidadTotalProductosCarrito = CantidadTotalProductosCarrito(productosEnCarrito);
  const subtotal = formatoMonedaArgentina(precioTotalProductosCarrito);
  const funnyTax = formatoMonedaArgentina(399.99);
  const funnyDiscount = formatoMonedaArgentina(-399.99);
  const { getAccessTokenSilently, isLoading, isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [orderNowDisabled, setOrderNowDisabled] = useState(false);

  const mostrarProductosCarrito = () => {
    const productosCarrito = [];
    var producto = {};

    for (var i = 0; i < productosEnCarrito.length; i++) {
      producto = productosEnCarrito[i];

      if (i === 0) {
        productosCarrito.push(
          <CartProduct producto={producto} key={producto.id} sumarAlCarrito={sumarAlCarrito} restarAlCarrito={restarAlCarrito} removerDelcarrito={removerDelcarrito} />
        )
      } else {
        productosCarrito.push(
          <Hr key={producto.nombre} />,
          <CartProduct producto={producto} key={producto.id} sumarAlCarrito={sumarAlCarrito} restarAlCarrito={restarAlCarrito} removerDelcarrito={removerDelcarrito} />
        )
      };
    };

    return productosCarrito;
  }

  const orderHandler = () => {
    !orderNowDisabled && confirmation(procesarPedido)
  }

  const procesarPedido = async () => {
    const pedidos = armarPedidos();
    var id = null;
    setOrderNowDisabled(true);

    try {
      if (pedidos.length === 0) {
        console.log("No hay productos en el carrito");
      } else if (!isAuthenticated) {
        loginWithRedirect()
      } else {
        const promiseMessage = "Procesando Pedido"
        id = newPromise(promiseMessage);

        await guardarPedidoApi(pedidos)
          .then(() => setTimeout(apiSuccess, 1500, id))
      }
    } catch (e) {
      setTimeout(apiError, 1500, id)
    }
  }

  const armarPedidos = () => {
    return productosEnCarrito.reduce((pedidosAux, productoEnCarrito) =>
      [...pedidosAux, {
        producto_id: productoEnCarrito.id,
        cantidad: productoEnCarrito.cantidad
      }], []
    )
  };

  const guardarPedidoApi = async (pedidos) => {
    const token = await getAccessTokenSilently();
    const header = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    await apiBase.post('/pedidos/cliente', pedidos, header);
  };

  const apiSuccess = (id) => {
    const mensajeError = "Pedidos Cargados Exitosamente";
    const type = "success";

    updatePromise(id, type, mensajeError);
    limpiarCarrito();
    navigate(ORDER_LIST_PATH);
    setOrderNowDisabled(false);
  }

  const apiError = (id) => {
    const mensajeError = "Hubo un error al procesar el pedido, intente denuevo...";
    const type = "error"

    updatePromise(id, type, mensajeError);
    setOrderNowDisabled(false);
  }
  if (isLoading)
    return <Loading message={"Cargando Carrito..."} />

  return (
    <Container>
      <Navbar productosEnCarrito={productosEnCarrito} />
      <Announcement />
      <Wrapper>
        <Title>TU CARRITO DE COMPRAS</Title>
        <Top>
          <TopTexts>
            <TopText>Carrito de compras({cantidadTotalProductosCarrito})</TopText>
          </TopTexts>
          <TopButton
            type="filled"
            onClick={() => orderHandler()}
          >
            COMPRAR AHORA
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {mostrarProductosCarrito()}
          </Info>
          <Summary>
            <SummaryTitle>RESUMEN DEL PEDIDO</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{subtotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Impuesto al Oxigeno</SummaryItemText>
              <SummaryItemPrice>{funnyTax}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Descuento por Agradable Sujeto</SummaryItemText>
              <SummaryItemPrice>{funnyDiscount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{subtotal}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={() => orderHandler()}>
              COMPRAR AHORA
            </Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
