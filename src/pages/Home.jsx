import React from "react";
import Announcement from "../components/Announcement";
import QuickCategories from "../components/QuickCategories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "./../components/Slider";
import { Alerta } from "../components/Alerts";

const Home = (props) => {
  const {productosEnCarrito, setProductoSeleccionado, sumarAlCarrito, setCategoriaSeleccionada} = props;
  
  return (
    <div>
      <Alerta/>      
      <Navbar 
        productosEnCarrito={productosEnCarrito}
      />      
      <Announcement/>
      <Slider/>
      <QuickCategories setCategoriaSeleccionada={setCategoriaSeleccionada} />
      <Products 
        setProductoSeleccionado={setProductoSeleccionado} 
        sumarAlCarrito={sumarAlCarrito}
      />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
