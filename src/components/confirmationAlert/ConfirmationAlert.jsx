import Swal from "sweetalert2"
import "./confirmationAlert.css"

export const confirmation = (onConfirmAction) => {
  Swal.fire({
    icon: 'warning',
    title: '¿Realizar Pedido?',
    showCancelButton: true,
    confirmButtonText: '¡Comprar Ahora!',
    cancelButtonText: "Cancelar",
    customClass: {
      confirmButton: 'sweet_confirmButtonImportant',
      cancelButton: 'sweet_cancelmButtonImportant',
      title: 'sweet_titleImportant',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirmAction()
    }
  })
}