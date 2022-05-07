import styled from "styled-components";
import { allCategories } from "../data";
import { mobile } from "../responsive";
import SimpleCategory from "./SimpleCategory";

const Container = styled.div`
    border-style: solid;
    padding: 40px 20px 40px 40px;
    margin-top: 20px;
    background-color: white;
    size: 800px 800px;
    ${mobile({  padding: "30px 0px" })}
`;

const UnorderedList = styled.ul`
    padding: 0px;
    list-style: none;
    column-count: 3;    
    ${mobile({  columnCount: "unset", textAlign: "center" })}
`;

const Categories = () => {
  return ( 
    <Container>
        <UnorderedList>
        {allCategories.map((item) => (
            <SimpleCategory item={item} key={item.id} />
        ))}
        </UnorderedList>
    </Container>    
  );
};

export default Categories;