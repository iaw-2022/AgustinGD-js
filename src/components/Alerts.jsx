import { ToastContainer, toast, zoom, bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Alerta = () =>{
    return (
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export const mostrarAlertaExito = (mensaje) =>{
    toast.success( mensaje, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }); 
}