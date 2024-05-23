const cesarMiddleware = (req, res, next) => {
  const cesarCode = req.body.clave_encriptada; // Cambiar de req.query a req.body y actualizar el nombre del campo

  if (!cesarCode) {
    return res.status(400).json({ error: 'Se requiere el código César.' });
  }

  const message = req.body.contrasena; // Utilizar la contraseña como mensaje y actualizar el nombre del campo

  if (!message) {
    return res.status(400).json({ error: 'Se requiere una contraseña para cifrar.' }); // Mensaje actualizado
  }

  const encryptedMessage = message
    .split('')
    .map(char => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode - 65 + cesarCode) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + cesarCode) % 26) + 97);
      } else {
        return char;
      }
    })
    .join('');

  req.encryptedMessage = encryptedMessage;
  next();
};

module.exports = cesarMiddleware;

