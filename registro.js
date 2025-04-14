function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const perfil = document.getElementById("perfil").value;
  const oficio = document.getElementById("oficio").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const descripcion = document.getElementById("descripcion").value;

  // Validamos si las contraseñas coinciden
  const password = document.getElementById("password").value;
  const confirmarPassword = document.getElementById("confirmarPassword").value;

  if (password !== confirmarPassword) {
    alert("Las contraseñas no coinciden.");
    return false;
  }

  const usuario = {
    nombre,
    telefono,
    email,
    perfil,
    oficio,
    ubicacion,
    descripcion,
  };


  localStorage.setItem('usuario', JSON.stringify(usuario));

  alert("Registro exitoso. Ahora puedes ver tu perfil.");
  location.href = 'index.html';
  return false;
}
