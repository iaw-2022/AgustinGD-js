import styled from "styled-components";
import { allCategories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { filtrarNombre } from "../utils/FiltrarJson";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = (props) => {
  const { terminoBusqueda } = props
  
  const categoriasFiltradas = filtrarNombre(allCategories, terminoBusqueda);

  return (
    <Container>
      {categoriasFiltradas.map((categoria) => (
        <CategoryItem categoria={categoria} key={categoria.id} />
      ))}
    </Container>
  );
};

export default Categories;
