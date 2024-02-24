// Formulario de ingreso
const
  paciente = document.querySelector('#paciente'),
  funcionario = document.querySelector('#funcionario'),
  familiar = document.querySelector('#familiar'),
  botonIngresar = document.querySelector('#botonIngresar'),
  email = document.querySelector('#email'),
  clave = document.querySelector('#clave'),
  formIngreso = document.querySelector('#formIngreso')
  ;

// Usuarios
let emails = ["tomas@adalid.com", "daniela@adalid.com", "johana@dinamita.com"];
let claves = ["tomas123", "daniela.com", "dinamita"];
let roles =  [0, 1, 2];

/*  roles: 0 - paciente, 1 - familiar, y 2 funcionario*/
let rol = 0;

/* Eventos onclick de los botones */
paciente.onclick = () => {
  rol = 0;
  generarAlerta("Ingresarás como paciente")
}

familiar.onclick = () => {
  rol = 1;
  generarAlerta("Ingresarás como familiar")
}

funcionario.onclick = () => {
  rol = 2;
  generarAlerta("Ingresarás como funcionario")
}

formIngreso.onsubmit = (event) => {
  event.preventDefault();
  let emailIngresado = email.value;
  if (!emails.includes(emailIngresado)) {
    generarAlertaError("El correo ingresado no existe");
    return;
  } else {
    let claveIngresada = clave.value;
    if (claves[emails.indexOf(emailIngresado)] != claveIngresada) {
      generarAlertaError("La clave ingresada es incorrecta");
      return;
    }
    if (roles[emails.indexOf(emailIngresado)] != rol) {
      generarAlertaError("El rol ingresado no coincide con el del usuario");
      return;
    }
    generarAlerta("Bienvenido 😁, en 5 segundos te llevamos a tu sitio 🚀");
    let rolUsuario = roles[emails.indexOf(emailIngresado)];
    switch (rolUsuario) {
      case 0:
        redireccionarEnSegundos(5, "perfil_usuario.html");
        break;
      case 1:
        redireccionarEnSegundos(5, "familiar.html");
        break;
      case 2:
        redireccionarEnSegundos(5, "funcionario.html");
        break;
    }
  }

  console.log(emailIngresado)
}

function generarAlerta(texto) {
  Swal.fire(texto);
}

function redireccionarEnSegundos(segundos, url) {
  setTimeout(function () {
    window.location.href = url;
  }, segundos * 1000);
}

function generarAlertaError(texto) {
  Swal.fire({
    icon: 'error',
    title: 'Oops... 😔',
    text: texto,
  }
  )
}