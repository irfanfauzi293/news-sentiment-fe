import Swal from 'sweetalert2'

export function successMessage(title) {
  return Swal.fire({
    icon: 'success',
    title: title,
    showConfirmButton: false
  })
}

export function errorMessage(title, text) {
  return Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    showConfirmButton: false
  })
}
