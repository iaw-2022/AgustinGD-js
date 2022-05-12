import React from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import { useAuth0 } from '@auth0/auth0-react';

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const BotonLogout = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <MenuItem onClick={() => logout()}>
        CERRAR SESIÓN
      </MenuItem>
    )
  )
};

export default BotonLogout;