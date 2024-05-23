const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authController = require('./authController');
const Professor = require('./Professor');
const cesarMiddleware = require('./CesarMiddleware');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la página de inicio!');
});

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.contrasena; // Accede al campo contrasena
  const cesarCode = req.body.clave_encriptada; // Accede al campo clave_encriptada
  const authenticated = await authController.authenticate(email, password, cesarCode);
  if (authenticated) {
    // Redirige al usuario a la página de dashboard en caso de inicio de sesión exitoso
    res.redirect('/dashboard');
  } else {
    res.send('Inicio de sesión fallido');
  }
});

// Ruta para la página de dashboard
app.get('/dashboard', (req, res) => {
  // Renderiza la página HTML del dashboard
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

