import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import { useAuth0 } from '@auth0/auth0-react';

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 25px;

  &:hover{
    text-decoration: underline;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px", marginRight: "15px" })}
`;

const BotonLogin = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <MenuItem onClick={() => loginWithRedirect()}>
        INGRESÁ
      </MenuItem>
    )
  )
}

export default BotonLogin;