import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(
    { id: 0,
      nombre: "NOMBRE DEFAULT",
      descripcion: "DESCRIPCION DEFAULT", 
      img:"https://res.cloudinary.com/dtkj9tvgw/image/upload/c_lpad,h_1000,w_1000/v1651656544/app-granja/carne_x679mb.png"
    });

  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
    console.log(producto);
  };
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home seleccionarProducto={seleccionarProducto}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product productoSeleccionado={productoSeleccionado}/>} />
        <Route path="/productlist" element={<ProductList seleccionarProducto={seleccionarProducto}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  //return <Home/>;
};

export default App;