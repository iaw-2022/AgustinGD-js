import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import apiBase from "../api/apiBase";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SelectOption from "../components/SelectOption";
import { opcionesProducto } from "../utils/OrdenarJson";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Loading from "../components/Loading";
import { mostrarError } from "./../components/Alerts";

const Container = styled.div``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const Title = styled.h1`
  color: black;
  margin: 20px;
`;

const Description = styled.h1`
  color: black;
  font-style: italic;
  font-size: 24px;
  word-wrap: break-word;
  margin: 20px;
  ${mobile({ marginTop: "0px", textAlign: "center" })}
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
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
  const { productosEnCarrito, setProductoSeleccionado, sumarAlCarrito, categoriaSeleccionada } = props;
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [orden, setOrden] = useState("");
  const { category_name } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState(null);
  const categoryNotFound = (category) && (category.length === 0);

  useEffect(() => {
    if (!categoriaSeleccionada) {
      const fetchCategory = async () => {
        try {
          const response = await apiBase.get(`/categorias/${category_name}`)
          const data = response.data.length === 0 ? response.data : response.data[0];
          setCategory(data)
        } catch (err) {
          mostrarError("No se pudieron Recuperar los Productos, refresque la pagina porfavor...")
        }
      }

      fetchCategory();
    } else {
      setCategory(categoriaSeleccionada);
    }
  }, [category_name, categoriaSeleccionada]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiBase.get(`/productos/categoria/${category.id}`)
        setProducts(response.data)
      } catch (err) {
        mostrarError("No se pudieron Recuperar los Productos, refresque la pagina porfavor...")
      }
    }
    if (category && !Array.isArray(category))
      fetchProducts();
  }, [category]);



  if (!category)
    return <Loading message={"Cargando Productos de la Categoria..."} />

  if (categoryNotFound)
    return (<NotFound productosEnCarrito={productosEnCarrito} />)

  return (
    <Container>
      <Navbar productosEnCarrito={productosEnCarrito} />
      <Announcement />
      <Top>
        <Title>{category.nombre}</Title>
        <Description>"{category.descripcion}"</Description>
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
        products={products}
      />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
