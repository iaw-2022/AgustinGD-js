import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge, Tooltip } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { PrecioTotalProductosCarrito, CantidadTotalProductosCarrito } from "../utils/OperacionesCarrito";
import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";
import SeccionAutenticacion from "./SeccionAutenticacion";
import { 
  HOME_PATH,
  CATEGORY_LIST_PATH,
  SHOPPING_CART_PATH,
 } from "../utils/Constants";

const Container = styled.div`
  height: 80px;
  background: white;
  position: fixed;  
  width: 100%;
  overflow: hidden;
  z-index: 4;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
  color: black;
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

  &:hover{
    text-decoration: underline;
  }

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
          <Link to={CATEGORY_LIST_PATH} style={{ textDecoration: "none"}}>
            <MenuItem style={{ color: "black", margin: "0px"}}> CATEGORIAS </MenuItem>
          </Link>
        </Left>
        <Link to={HOME_PATH} style={{ textDecoration: "none"}}>
          <Center>          
              <BrandLogo 
                src={window.location.origin + "/logoMei.png"}
                alt={"Logo de la vaca Mei."}
                title={"La vaca Mei."}
              />
              <BrandName>MEI!</BrandName>                    
          </Center>
        </Link>
        <Right>
          <SeccionAutenticacion/>
          <MenuItem style={{ color: "black", marginLeft: "10px"}}>
            <Tooltip title={formatoMonedaArgentina(precioTotalProductosCarrito)}>
              <StyledBadge badgeContent={cantidadTotalProductosCarrito}>              
                <Link to={SHOPPING_CART_PATH}>
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
