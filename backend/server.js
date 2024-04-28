const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Puerto en el que escuchará el servidor

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
