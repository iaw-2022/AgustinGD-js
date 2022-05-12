import styled from "styled-components";
import { allCategories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = (props) => {
  const { terminoBusqueda } = props
  
  return (
    <Container>
      {allCategories.filter((val) => {
        if(terminoBusqueda == ""){
          return val
        } else if (val.title.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
          return val
        }
      }).map((categoria) => (
        <CategoryItem categoria={categoria} key={categoria.id} />
      ))}
    </Container>
  );
};

export default Categories;
