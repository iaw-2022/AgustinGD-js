import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import Categories from "../components/Categories"
import SearchBar from "./../components/SearchBar"
import { useState } from "react";
import SelectOption from "../components/SelectOption";
import { opcionesNombre } from "./../utils/OrdenarJson"

const Container = styled.div``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
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
  const { productosEnCarrito, setCategoriaSeleccionada } = props;
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [orden, setOrden] = useState("");

  return (
    <Container>
      <Navbar productosEnCarrito={productosEnCarrito}/>
      <Announcement />
      <Top>        
        <Title>COMPRAR POR CATEGORIA</Title>
      </Top>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Categorias:</FilterText>
          <SearchBar setTerminoBusqueda={setTerminoBusqueda} />
        </Filter>
        <Filter>
          <FilterText>Ordenar Categorias:</FilterText>
          <SelectOption 
            opciones={opcionesNombre}
            setOrden={setOrden}
          />         
        </Filter>       
      </FilterContainer>
      <Categories 
        terminoBusqueda={terminoBusqueda}
        orden={orden}
        setCategoriaSeleccionada={setCategoriaSeleccionada} 
      />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;