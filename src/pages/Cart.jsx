import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartProduct from "../components/CartProduct";
import { mobile } from "../responsive";
import { PrecioTotalProductosCarrito, CantidadTotalProductosCarrito } from "../utils/OperacionesCarrito";
import { Link } from "react-router-dom";
import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
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
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

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
  height: 50vh;
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
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = (props) => {
  const {productosEnCarrito, sumarAlCarrito, restarAlCarrito, removerDelcarrito} = props;
  const precioTotalProductosCarrito = PrecioTotalProductosCarrito(productosEnCarrito);
  const cantidadTotalProductosCarrito = CantidadTotalProductosCarrito(productosEnCarrito);

  const mostrarProductosCarrito = () =>{
    const productosCarrito = [];
    var producto = {};
    
    for (var i=0; i < productosEnCarrito.length; i++) {
      producto = productosEnCarrito[i];

      if(i === 0){
        productosCarrito.push(
          <CartProduct producto={producto} key={producto.id} sumarAlCarrito={sumarAlCarrito} restarAlCarrito={restarAlCarrito} removerDelcarrito={removerDelcarrito}/>
        )
      } else{
        productosCarrito.push(          
            <Hr />,
            <CartProduct producto={producto} key={producto.id} sumarAlCarrito={sumarAlCarrito} restarAlCarrito={restarAlCarrito} removerDelcarrito={removerDelcarrito}/>          
        )
      };
    };

    return productosCarrito;
  }

  return (
    <Container>
      <Navbar productosEnCarrito={productosEnCarrito}/>
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton >CONTINUE SHOPPING</TopButton>
          </Link>          
          <TopTexts>
            <TopText>Shopping Bag({cantidadTotalProductosCarrito})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {mostrarProductosCarrito()}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{formatoMonedaArgentina(precioTotalProductosCarrito)}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
