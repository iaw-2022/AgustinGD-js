import styled from "styled-components";
import { popularProducts as productos } from "../data";
import Product from "./Product";
import { filtrarNombre } from "../utils/FiltrarJson";
import { ordenar } from "../utils/OrdenarJson";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = (props) => {
  const { setProductoSeleccionado, sumarAlCarrito, terminoBusqueda, orden } = props;

  const productosFiltrados = filtrarNombre(productos, terminoBusqueda);
  ordenar(productosFiltrados, orden);

  return (
    <Container>
      {productosFiltrados.map((producto) => (
        <Product
          producto={producto}
          key={producto.id}
          setProductoSeleccionado={setProductoSeleccionado}
          sumarAlCarrito={sumarAlCarrito}
        />
      ))}
    </Container>
  );
};

export default Products;
