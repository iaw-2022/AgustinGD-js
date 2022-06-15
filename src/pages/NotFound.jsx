import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import NotFoundComponent from "../components/NotFoundComponent";

const NotFound = (props) => {
  const { productosEnCarrito } = props;
  
  return (
    <div>     
      <Navbar 
        productosEnCarrito={productosEnCarrito}
      />      
      <Announcement/>
      <NotFoundComponent/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default NotFound;