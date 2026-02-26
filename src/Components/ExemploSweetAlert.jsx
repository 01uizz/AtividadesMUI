import Swal from 'sweetalert2';

function ExemploSweetAlert(){
Swal.fire({
  title: 'Você tem certeza, de que quer abrir este arquivo?',
  text: "Isso não pode ser revertido!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Sim, abra!',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('OK!', 'Arquivo Aberto.', 'success');
  }
});
}

export default ExemploSweetAlert;