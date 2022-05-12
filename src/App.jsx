import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryList from "./pages/CategoryList";
import { mostrarAlertaCarrito } from "./components/Alerts";
import OrderList from "./pages/OrderList"

const App = () => {
  const productoSeleccionadoDefault = { 
    id: 0,
    nombre: "NOMBRE DEFAULT",
    descripcion: "DESCRIPCION DEFAULT", 
    img:"https://res.cloudinary.com/dtkj9tvgw/image/upload/c_lpad,h_1000,w_1000/v1651656544/app-granja/carne_x679mb.png"
  };

  const categoriaSeleccionadaDefault = { 
    id: 0,
    nombre: "CATEGORIA DEFAULT", 
    img:"https://res.cloudinary.com/dtkj9tvgw/image/upload/c_lpad,h_1000,w_1000/v1651656544/app-granja/carne_x679mb.png"
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categoriaSeleccionadaDefault);

  const [productoSeleccionado, setProductoSeleccionado] = useState(() => {
    const localData = localStorage.getItem('productoSeleccionado');
    return localData ? JSON.parse(localData) : productoSeleccionadoDefault;
  });

  useEffect(()=> {
    localStorage.setItem('productoSeleccionado', JSON.stringify(productoSeleccionado))
  }, [productoSeleccionado]);

  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const [productosEnCarrito, setproductosEnCarrito] = useState(() => {
    const localData = localStorage.getItem('productosEnCarrito');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(()=> {
    localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito))
  }, [productosEnCarrito]);
  
  const sumarAlCarrito = (producto, cantidadElegida) => {
    const cantidadASumar = cantidadElegida ? cantidadElegida : 1;
    const existe = productosEnCarrito.find((x) => x.id === producto.id);
    
    if (existe) {
      setproductosEnCarrito(
        productosEnCarrito.map((x) =>
          x.id === producto.id ? { ...existe, cantidad: existe.cantidad + cantidadASumar } : x
        )
      );
    } else {
      setproductosEnCarrito([...productosEnCarrito, { ...producto, cantidad: cantidadASumar }]);         
    }
    
    mostrarAlertaCarrito(`${producto.nombre} x ${cantidadASumar}`);
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

  const removerDelcarrito = (producto) => {
    const existe = productosEnCarrito.find((x) => x.id === producto.id);
    if (existe) {
      setproductosEnCarrito(productosEnCarrito.filter((x) => x.id !== producto.id));
    }
  };

  const limpiarCarrito = () => {
    setproductosEnCarrito([]);
  };
   
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home 
            productosEnCarrito={productosEnCarrito} 
            seleccionarProducto={seleccionarProducto} 
            sumarAlCarrito={sumarAlCarrito}
            setCategoriaSeleccionada={setCategoriaSeleccionada}
        />} />
        <Route path="/cart" element={<Cart 
            productosEnCarrito={productosEnCarrito} 
            sumarAlCarrito={sumarAlCarrito} 
            restarAlCarrito={restarAlCarrito} 
            removerDelcarrito={removerDelcarrito} 
            limpiarCarrito={limpiarCarrito}
        />} />
        <Route path="/product" element={<Product 
          productosEnCarrito={productosEnCarrito} 
          productoSeleccionado={productoSeleccionado} 
          sumarAlCarrito={sumarAlCarrito} 
        />} />
        <Route path="/productlist" element={<ProductList 
          productosEnCarrito={productosEnCarrito} 
          seleccionarProducto={seleccionarProducto} 
          sumarAlCarrito={sumarAlCarrito}
          categoriaSeleccionada={categoriaSeleccionada}
        />} />
        <Route path="/categoryList" element={<CategoryList 
          productosEnCarrito={productosEnCarrito}
          setCategoriaSeleccionada={setCategoriaSeleccionada} 
        />} />
        <Route path="/orderList" element={<OrderList 
          productosEnCarrito={productosEnCarrito} 
        />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
  //return <Home/>;
};

export default App;