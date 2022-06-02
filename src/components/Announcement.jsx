import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  padding-top: 80px;
  background-color: #86BBD8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ paddingTop: "50px" })}
`;

const Announcement = () => {
  
  return <Container>¡Super Oferta! Envío Gratis con Pedidos Superiores a $500</Container>;
};

export default Announcement;
