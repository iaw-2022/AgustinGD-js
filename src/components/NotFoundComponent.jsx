import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: black;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const NotFoundComponent = () => {  
  return (
    <Container>
      <Title>404</Title>
      <Desc>No se encontró la pagina. 🐄</Desc>
    </Container>
  );
};

export default NotFoundComponent;