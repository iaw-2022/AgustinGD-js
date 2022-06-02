import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import BotonLogin  from "./BotonLogin";
import ProfileDropDown from './ProfileDropDown';

const SeccionAutenticacion = () => {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? (  
            <ProfileDropDown />
        ) : (
            <BotonLogin />
        )
    );
};
  
export default SeccionAutenticacion;