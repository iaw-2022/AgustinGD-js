import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { Alerta } from "../components/Alerts";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SelectOption from "../components/SelectOption";
import { opcionesProducto } from "../utils/OrdenarJson";

const Container = styled.div``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

const Title = styled.h1`
  color: black;
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  align-items: center;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const ProductList = (props) => {
  const {productosEnCarrito, setProductoSeleccionado, sumarAlCarrito, categoriaSeleccionada} = props;
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [orden, setOrden] = useState("");

  return (
    <Container>
      <Alerta/> 
      <Navbar productosEnCarrito={productosEnCarrito}/>
      <Announcement />
      <Top>
        <Title>{categoriaSeleccionada.nombre}</Title>
      </Top>      
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Categorias:</FilterText>
          <SearchBar setTerminoBusqueda={setTerminoBusqueda} />
        </Filter>
        <Filter>
          <FilterText>Ordenar Categorias:</FilterText>
          <SelectOption 
            opciones={opcionesProducto}
            setOrden={setOrden}
          />         
        </Filter>       
      </FilterContainer>
      <Products 
        setProductoSeleccionado={setProductoSeleccionado} 
        sumarAlCarrito={sumarAlCarrito}
        terminoBusqueda={terminoBusqueda}
        orden={orden}
      />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
