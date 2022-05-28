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
import ScrollToTop from "./utils/ScrollToTop";
import { productoSeleccionadoDefault, categoriaSeleccionadaDefault } from "./utils/DefaultData";
import {
  HOME_PATH,
  SHOPPING_CART_PATH,
  PRODUCT_PATH,
  PRODUCT_LIST_PATH,
  CATEGORY_LIST_PATH,  
  ORDER_LIST_PATH,  
} from "./utils/Constants"

const App = () => {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categoriaSeleccionadaDefault);

  const [productoSeleccionado, setProductoSeleccionado] = useState(() => {
    const localData = localStorage.getItem('productoSeleccionado');
    return localData ? JSON.parse(localData) : productoSeleccionadoDefault;
  });

  useEffect(()=> {
    localStorage.setItem('productoSeleccionado', JSON.stringify(productoSeleccionado))
  }, [productoSeleccionado]);

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
      <ScrollToTop/>
      <Routes>
        <Route path={HOME_PATH} element={<Home 
            productosEnCarrito={productosEnCarrito} 
            setProductoSeleccionado={setProductoSeleccionado} 
            sumarAlCarrito={sumarAlCarrito}
            setCategoriaSeleccionada={setCategoriaSeleccionada}
        />} />
        <Route path={SHOPPING_CART_PATH} element={<Cart 
            productosEnCarrito={productosEnCarrito} 
            sumarAlCarrito={sumarAlCarrito} 
            restarAlCarrito={restarAlCarrito} 
            removerDelcarrito={removerDelcarrito} 
            limpiarCarrito={limpiarCarrito}
        />} />
        <Route path={`${PRODUCT_PATH}/:product_name`} element={<Product 
          productosEnCarrito={productosEnCarrito} 
          productoSeleccionado={productoSeleccionado} 
          sumarAlCarrito={sumarAlCarrito} 
        />} />
        <Route path={`${PRODUCT_LIST_PATH}/:category_name`} element={<ProductList 
          productosEnCarrito={productosEnCarrito} 
          setProductoSeleccionado={setProductoSeleccionado} 
          sumarAlCarrito={sumarAlCarrito}
          categoriaSeleccionada={categoriaSeleccionada}
        />} />
        <Route path={CATEGORY_LIST_PATH} element={<CategoryList 
          productosEnCarrito={productosEnCarrito}
          setCategoriaSeleccionada={setCategoriaSeleccionada} 
        />} />
        <Route path={ORDER_LIST_PATH} element={<OrderList 
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