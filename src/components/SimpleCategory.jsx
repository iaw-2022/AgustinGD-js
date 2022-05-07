import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Title = styled.a`
    color: black;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const ListItem = styled.li``;

const CategoryItem = ({ item }) => {
  return (
    <ListItem>
        <Title>{item.title}</Title>
    </ListItem>
  );
};

export default CategoryItem;
