import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useAuth0 } from "@auth0/auth0-react";
import { Route } from 'react-router-dom'

const OrderList = (props) => {
  const { productosEnCarrito } = props;
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Cargando...</div>

  return (
    <>
        {isAuthenticated ? (
            <div>    
                <Navbar 
                    productosEnCarrito={productosEnCarrito}
                />      
                <Announcement/>
                <Footer/>
            </div>            
        ) : (
            <Route path= {window.history.back()} />
        )}
        
    </>
  );
};

export default OrderList;