import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import QuickCategories from "../components/QuickCategories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "./../components/Slider";
import apiBase from "../api/apiBase";
import { mostrarError } from "./../components/Alerts";

const Home = (props) => {
  const {productosEnCarrito, setProductoSeleccionado, sumarAlCarrito, setCategoriaSeleccionada} = props;
  const [products, setProducts] = useState(null);

  useEffect(() => {    
    const fetchRandomProducts = async () => {
      try{
        const response = await apiBase.get("/productos/random/10")
        setProducts(response.data)
      } catch (err){
        mostrarError("No se pudieron Recuperar los Productos, Refresque la pagina porfavor...")
      }
    }

    fetchRandomProducts();
  }, []);
  
  return (
    <div>   
      <Navbar 
        productosEnCarrito={productosEnCarrito}
      />      
      <Announcement/>
      <Slider/>
      <QuickCategories setCategoriaSeleccionada={setCategoriaSeleccionada} />
      <Products 
        setProductoSeleccionado={setProductoSeleccionado} 
        sumarAlCarrito={sumarAlCarrito}
        products={products}
      />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
