// En el archivo Professor.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Asegúrate de importar la instancia correcta de Sequelize

const Professor = sequelize.define('profesores', {
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true // Especifica que esta columna es la clave primaria
  },
 nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  palabra_original: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  clave_encriptada: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Desactiva la creación automática de las columnas "createdAt" y "updatedAt"
});

module.exports = Professor;

