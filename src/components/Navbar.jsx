import { Badge, Tooltip } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { PrecioTotalProductosCarrito, CantidadTotalProductosCarrito } from "../utils/OperacionesCarrito";
import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";

const Container = styled.div`
  height: 60px;
  background: #F0F8FF;
  position: fixed;  
  width: 100%;
  overflow: hidden;
  z-index: 4;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = (props) => {
  const {productosEnCarrito} = props;
  const precioTotalProductosCarrito = PrecioTotalProductosCarrito(productosEnCarrito);
  const cantidadTotalProductosCarrito = CantidadTotalProductosCarrito(productosEnCarrito);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES </Language>
          <SearchContainer>
            <Input placeholder="Buscar" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTRATE</MenuItem>
          <MenuItem>INGRESÁ</MenuItem>
          <MenuItem>
            <Tooltip title={formatoMonedaArgentina(precioTotalProductosCarrito)}>
              <Badge badgeContent={cantidadTotalProductosCarrito} color="primary">              
                <Link to="/cart">
                  <ShoppingCartOutlined style={{ color: "black"}}/>
                </Link>
              </Badge>
            </Tooltip>            
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
