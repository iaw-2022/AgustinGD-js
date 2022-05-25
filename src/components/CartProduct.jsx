import { Add, Remove, DeleteOutline } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { formatoMonedaArgentina } from "../utils/FormatoMonedaArgentina";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const BoldText = styled.b`
  color: #33658A !important;
`;

const ProductId = styled.span``;

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
  border-radius: 10px;
  border: 1px solid #33658A;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;  
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;   
  align-items: center;
  ${mobile({ marginBottom: "20px" })}
`;

const CartProduct = (props) => {
    const {producto, sumarAlCarrito, restarAlCarrito, removerDelcarrito} = props;
    return (
      <Product>
      <ProductDetail>
        <Image src={producto.imagen_dir} />
        <Details>
          <ProductName>
            <BoldText>Producto:</BoldText> {producto.nombre}
          </ProductName>
          <ProductId>
            <BoldText>Precio/Unidad:</BoldText> {formatoMonedaArgentina(producto.precioPorUnidad)}
          </ProductId>
          <ProductSize>
            <BoldText></BoldText>
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Add 
            onClick={() => sumarAlCarrito(producto)}
            style={{
              cursor: "pointer",
              color: "#ED6A5E",
            }} 
          />
          <ProductAmount>{producto.cantidad}</ProductAmount>
          {(producto.cantidad !== 1) ?
           (
            <Remove
            onClick={() => restarAlCarrito(producto)}
            style={{
              cursor: "pointer",
              color: "#ED6A5E",
            }} 
           />
           ) : (
            <DeleteOutline
            onClick={() => removerDelcarrito(producto)}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              color: "#ED6A5E"
            }}
            />
          )}
          
        </ProductAmountContainer>
        <PriceContainer>
          <ProductPrice>{formatoMonedaArgentina(producto.cantidad * producto.precioPorUnidad)}</ProductPrice>
          { (producto.cantidad !== 1) && (
              <DeleteOutline
              onClick={() => removerDelcarrito(producto)}
              style={{
                cursor: "pointer",
                fontSize: "35px",
                color: "#ED6A5E"
              }}
            />
          )}
                   
        </PriceContainer>        
      </PriceDetail>
      </Product>
    );
  };
  
  export default CartProduct;