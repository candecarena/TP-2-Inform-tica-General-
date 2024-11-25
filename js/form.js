const submitBtn = document.getElementById('submitBtn');
const validate = (e) => {
  e.preventDefault();
  const banda = document.getElementById('inputNombre');
  const direccionEmail = document.getElementById('inputEmail');
  const localidad = document.getElementById('inputLocalidad');
  if (banda.value === "") {
    alert("Por favor completa el nombre de tu banda");
    banda.focus();
    return false;
  }

  if (direccionEmail.value === "") {
    alert("Por favor completa la direccion de Email");
    direccionEmail.focus();
    return false;
  }

  if (!emailIsValid(direccionEmail.value)) {
    alert("Por favor completa con una direccion de Email verdadera");
    direccionEmail.focus();
    return false;
  }

  if (localidad.value === "") {
    alert("Por favor completa con tu localidad");
    localidad.focus();
    return false;
  }

  return true; // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

