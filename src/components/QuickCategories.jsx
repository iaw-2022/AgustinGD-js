import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import QuickCategoryItem from "./QuickCategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const QuickCategories = () => {
  return (
    <Container>
      {categories.map((categoria) => (
        <QuickCategoryItem categoria={categoria} key={categoria.id} />
      ))}
    </Container>
  );
};

export default QuickCategories;