import { ToastContainer, toast, Flip} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCartRounded } from "@material-ui/icons";
import styled from "styled-components";


const StyledToastContainer = styled(ToastContainer).attrs({
    className: 'toast-container',
    toastClassName: 'toast',
    bodyClassName: 'body',
    progressClassName: 'progress',
})`
    /* .toast-container */
    
  
     /* .toast is passed to toastClassName */
    .toast {
        color: black;
    }
  
    button[aria-label="close"] {
      
    }
  
    /* .body is passed to bodyClassName */
    .body {}
  
    /* .progress is passed to progressClassName */
    .progress {
        color: #F6AE2D;
        background-color: #F6AE2D;
    }
`;

export const Alerta = () =>{
    return (
        <StyledToastContainer
            position="top-center"
            transition={Flip}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
        />
    )
}

export const mostrarAlertaExito = (mensaje) =>{
    toast( mensaje, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export const mostrarAlertaCarrito = (mensaje) =>{

    toast.success( mensaje, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        icon: <ShoppingCartRounded style={{color:"#F6AE2D"}}/>,
    });
}