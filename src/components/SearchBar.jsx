import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`;

const SearchBar = (props) => {
    const { setTerminoBusqueda } = props    
    return (
        <Container>
            <Language>ES </Language>
            <SearchContainer>
            <Input
                placeholder="Buscar"
                onChange={(event) => {
                    setTerminoBusqueda(event.target.value);
                }}
            />
            <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
        </Container>
    );
};

export default SearchBar;