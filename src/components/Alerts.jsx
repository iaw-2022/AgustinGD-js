import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCartRounded } from "@material-ui/icons";
import styled from "styled-components";


const StyledToastContainer = styled(ToastContainer).attrs({
    className: 'toast-container',
    toastClassName: 'toast',
    bodyClassName: 'body',
    progressClassName: 'progress',
})` 
  
     /* .toast is passed to toastClassName */
    .toast {
        color: black;
    }
  
    /* .progress is passed to progressClassName */
    .Toastify__progress-bar--error {
        color: red;
        background-color: red;
    }

    .Toastify__progress-bar--success {
        color: green;
        background-color: green;
    }

    .Toastify__progress-bar--info {
        color: #F6AE2D;
        background-color: #F6AE2D;
    }
`;

export const Alerta = () => {
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

export const mostrarError = (mensaje) => {
    toast.error(mensaje, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined
    });
}

export const mostrarAlertaCarrito = (mensaje) => {
    toast.info(mensaje, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        icon: <ShoppingCartRounded style={{ color: "#F6AE2D" }} />,
    });
}

export const newPromise = (message) =>{
    return toast.loading(message);
}
export const updatePromise = (id, type, message) => {
    toast.update(
        id,
        {
            render: message,
            type: type,
            isLoading: false,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        }
    );
}