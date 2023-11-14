import Swal from 'sweetalert2'
const confirmButtonText = 'Close'

export function successMessage(title, showConfirmButton = true) {
  return Swal.fire({
    icon: 'success',
    title: title,
    showConfirmButton,
    confirmButtonText
  })
}

export function errorMessage(title, text, showConfirmButton = true) {
  return Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    showConfirmButton,
    confirmButtonText
  })
}
