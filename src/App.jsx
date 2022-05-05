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

  const [productosEnCarrito, setproductosEnCarrito] = useState([]);

  const sumarAlCarrito = (producto) => {
    const existe = productosEnCarrito.find((x) => x.id === producto.id);
    if (existe) {
      setproductosEnCarrito(
        productosEnCarrito.map((x) =>
          x.id === producto.id ? { ...existe, cantidad: existe.cantidad + 1 } : x
        )
      );
    } else {
      setproductosEnCarrito([...productosEnCarrito, { ...producto, cantidad: 1 }]);
    }
  };

  const restarAlCarrito = (producto) => {
    const existe = productosEnCarrito.find((x) => x.id === producto.id);
    if (existe.cantidad === 1) {
      setproductosEnCarrito(productosEnCarrito.filter((x) => x.id !== producto.id));
    } else {
      setproductosEnCarrito(
        productosEnCarrito.map((x) =>
          x.id === producto.id ? { ...existe, cantidad: existe.cantidad - 1 } : x
        )
      );
    }
  };
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home productosEnCarrito={productosEnCarrito} seleccionarProducto={seleccionarProducto} sumarAlCarrito={sumarAlCarrito} />} />
        <Route path="/cart" element={<Cart productosEnCarrito={productosEnCarrito} sumarAlCarrito={sumarAlCarrito} restarAlCarrito={restarAlCarrito}/>} />
        <Route path="/product" element={<Product productosEnCarrito={productosEnCarrito} productoSeleccionado={productoSeleccionado} sumarAlCarrito={sumarAlCarrito} />} />
        <Route path="/productlist" element={<ProductList productosEnCarrito={productosEnCarrito} seleccionarProducto={seleccionarProducto} sumarAlCarrito={sumarAlCarrito}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  //return <Home/>;
};

export default App;