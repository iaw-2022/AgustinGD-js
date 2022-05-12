import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import { useAuth0 } from "@auth0/auth0-react";

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-style: italic;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Perfil = () => {    
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && ( 
        <MenuItem>
            {user.name}
        </MenuItem>
        )
    )
};
  
export default Perfil;