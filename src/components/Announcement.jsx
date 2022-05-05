import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  padding-top: 60px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  
  return <Container>¡Super Oferta! Envío Gratis con Pedidos Superiores a $500</Container>;
};

export default Announcement;
