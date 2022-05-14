import { Search } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`;

const Language = styled.span`
    color: #ED6A5E;
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`    
    background-color: #ED6A5E;
    box-shadow: inset  2px 2px 4px rgba(0,0,0,0.6);
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "0px" })}
`;

const Input = styled.input`
    background-color: #ED6A5E;
    border: none;
    color: white;
    height: 28px;
    ::placeholder{
        color: #e8e3e3;
    }
    ${mobile({ width: "105px" })}
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
            <Search
                style={{
                    color: "white",
                    fontSize: 16
                }}
            />
            </SearchContainer>
        </Container>
    );
};

export default SearchBar;