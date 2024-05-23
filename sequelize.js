const { Sequelize } = require('sequelize');

// Crear una nueva instancia de Sequelize con la configuración de tu base de datos
const sequelize = new Sequelize('postgres', 'martarodrigo', 'debisilda13', {
  host: 'localhost',
  dialect: 'postgres',
});


// Verificar la conexión a la base de datos
async function verificarConexion() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

verificarConexion();

module.exports = sequelize;


