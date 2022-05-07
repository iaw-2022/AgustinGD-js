import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "./../components/Slider";

const Home = (props) => {
  const {productosEnCarrito, seleccionarProducto, sumarAlCarrito} = props;
  
  return (
    <div>      
      <Navbar 
        productosEnCarrito={productosEnCarrito}
      />
      <Announcement/>
      <Slider/>
      <Categories/>
      <Products 
        seleccionarProducto={seleccionarProducto} 
        sumarAlCarrito={sumarAlCarrito}
      />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
