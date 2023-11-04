function calcularTotal() {
  const nombre = document.getElementById("nombre");
  const apell = document.getElementById("apellido");
  const mail = document.getElementById("email");
  const cant = document.getElementById("cantidad");
  const Valor = document.getElementById("categoria");

  if (/^(?!.* $)[A-Z][a-z ]+$/.test(nombre.value)) {
    nombre.classList.remove("is-invalid");
  } else if (nombre.value === "") {
    nombre.classList.add("is-invalid");
    nombre.focus();
    return;
  }

  function validarMail(mail) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/.test(mail.value);
  }
  if (!validarMail(mail)) {
    mail.classList.add("is-invalid");
    mail.focus();
    return;
  } else {
    mail.classList.remove("is-invalid");
  }

  let resumenTotal = 0;

  if (Valor.value == 0) {
    resumenTotal = 200 * cant.value;
  }
  if (Valor.value == 1) {
    resumenTotal = (200 * 0.8) * cant.value;
  }
  if (Valor.value == 2) {
    resumenTotal = (200 * 0.5) * cant.value;
  }
  if (Valor.value == 3) {
    resumenTotal = (200 * 0.15) * cant.value;
  }

  document.getElementById("totalPagar").innerText = "$"+resumenTotal;
}

function borrarFormulario() {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const mail = document.getElementById("email");
  const cant = document.getElementById("cantidad");
  const Valor = document.getElementById("categoria");
  nombre.value = ""
  mail.value = ""
  cant.value = ""
  Valor.value = ""
  apellido.value = ""
  document.getElementById("totalPagar").innerText = " ";
}

const BTNCLIK = document.getElementById("btnResumen");
BTNCLIK.addEventListener("click",calcularTotal);
const BTNCLIKDELETE = document.getElementById("btnBorrar");
BTNCLIKDELETE.addEventListener("click", borrarFormulario)