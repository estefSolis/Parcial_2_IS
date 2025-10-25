const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    nombre: 'Estefany Michelle Peñate Solis',
    expediente: '25871',
    codigo_estudiantil: 'PS22-I04-001'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
