import { Badge, Tooltip } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { PrecioTotalProductosCarrito, CantidadTotalProductosCarrito } from "../utils/OperacionesCarrito";
import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";
import SeccionAutenticacion from "./SeccionAutenticacion";

const Container = styled.div`
  height: 80px;
  background: white;
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
  ${mobile({ padding: "10px 10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const BrandLogo = styled.img`
  width: 64px;
  length: 64px;
  ${mobile({ display: "none" })}
`;

const BrandName = styled.h1`
  font-weight: bold;
  margin-left: 5px;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    color: "black",
    backgroundColor: "#F6AE2D",
    margin: "0px 10px"
  }
});

const Navbar = (props) => {
  const {productosEnCarrito} = props;
  const precioTotalProductosCarrito = PrecioTotalProductosCarrito(productosEnCarrito);
  const cantidadTotalProductosCarrito = CantidadTotalProductosCarrito(productosEnCarrito);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/categoryList" style={{ textDecoration: "none"}}>
            <MenuItem style={{ color: "black", margin: "0px"}}> CATEGORIAS </MenuItem>
          </Link>
        </Left>
        <Center>
          <BrandLogo 
            src={window.location.origin + "/logoMei.png"}
            alt={"Logo de la vaca Mei."}
            title={"La vaca Mei."}
          />
          <BrandName>MEI!</BrandName>
        </Center>
        <Right>
          <SeccionAutenticacion/>
          <MenuItem style={{ color: "black", marginLeft: "10px"}}>
            <Tooltip title={formatoMonedaArgentina(precioTotalProductosCarrito)}>
              <StyledBadge badgeContent={cantidadTotalProductosCarrito}>              
                <Link to="/cart">
                  <ShoppingCartOutlined style={{ color: "black", margin: "0px 10px"}}/>
                </Link>
              </StyledBadge>
            </Tooltip>            
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
