import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { ORDER_LIST_PATH } from '../utils/Constants';

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
        <Link to={ORDER_LIST_PATH} style={{ textDecoration: "none", color: "black"}}>
            <MenuItem>
                {user.name}
            </MenuItem>
        </Link> 
        )
    )
};
  
export default Perfil;