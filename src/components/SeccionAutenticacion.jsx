import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import OpcionesUsuario  from "./OpcionesUsuario";
import BotonLogin  from "./BotonLogin";
import BotonLogout  from "./BotonLogout";

const SeccionAutenticacion = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
        {isAuthenticated ? (
            <>
                <BotonLogout />
                <OpcionesUsuario />                
            </>
        ) : (
            <BotonLogin />
        )}
        </>
    );
};
  
export default SeccionAutenticacion;