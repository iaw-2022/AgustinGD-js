import { Add, Remove, ClearRounded } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex-direction: row;
`;

const Image = styled.img`
  width: 200px;
  float: left;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  float: left;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Actions = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  float: right;
  ${mobile({ display: "none" })}
`;

const ActionsMobile = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  float: right;
  display: none;
  ${mobile({ display: "unset" })}
`;

const CartProduct = (props) => {
    const {producto, sumarAlCarrito, restarAlCarrito, removerDelcarrito} = props;
    return (
        <Product>
          <ProductDetail>
            <Image src={producto.img} />
            <Details>         
              <ProductName>
                <b>Producto:</b> {producto.nombre}
              </ProductName>
              <ProductId>
                <b>ID:</b> {producto.id}
              </ProductId>
              <ProductColor color="black" />
              <ProductSize>
                <b>Size:</b> 37.5
              </ProductSize>
            </Details>
            <ActionsMobile>
              <ClearRounded style={{cursor: "pointer", fontSize: "40px"}} onClick={() => removerDelcarrito(producto)}/>
            </ActionsMobile>         
          </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add style={{cursor: "pointer"}} onClick={() => sumarAlCarrito(producto)}/>
            <ProductAmount>{producto.cantidad}</ProductAmount>
            <Remove style={{cursor: "pointer"}} onClick={() => restarAlCarrito(producto)}/>
          </ProductAmountContainer>         
          <ProductPrice>{formatoMonedaArgentina(producto.precioPorUnidad)}</ProductPrice>
        </PriceDetail>
        <Actions>
            <ClearRounded style={{cursor: "pointer", fontSize: "40px", float: "right"}} onClick={() => removerDelcarrito(producto)}/>
        </Actions>
        </Product>
    );
  };
  
  export default CartProduct;