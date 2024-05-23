const Professor = require('./Professor');

async function authenticate(email, password, cesarCode) {
  try {
    console.log('Datos recibidos:');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Cesar Code:', cesarCode);

    const professor = await Professor.findOne({ where: { email } });
    if (!professor) {
      console.log('El profesor no existe en la base de datos.');
      return false; // El profesor no existe
    }

    console.log('Datos del profesor encontrado en la base de datos:', professor);

    // Verificar la contraseña y el código César
    if (professor.contrasena === password && professor.clave_encriptada === cesarCode) {
      console.log('Inicio de sesión exitoso.');
      return true; // Autenticación exitosa
    } else {
      console.log('Inicio de sesión fallido: La contraseña o el código César son incorrectos.');
      return false; // La contraseña o el código César son incorrectos
    }
  } catch (error) {
    console.error('Error durante la autenticación:', error);
    return false;
  }
}

module.exports = { authenticate };


