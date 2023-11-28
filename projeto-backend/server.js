// server.js
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const fs = require('fs');

const app = express();
const port = 3002;

app.use(cors());
app.use(fileUpload());

const uploadPath = './uploads/';

app.post('/upload', (req, res) => {
  const { files } = req;

  if (!files || Object.keys(files).length === 0) {
    return res.status(400).send('Nenhum arquivo foi enviado.');
  }

  const file = files.file;

  const filePath = `${uploadPath}${file.name}`;

  if (fs.existsSync(filePath)) {
    return res.send('Arquivo duplicado. Upload ignorado.');
  }

  file.mv(filePath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Arquivo enviado com sucesso.');
  });
});

app.get('/files', (req, res) => {
  const fileList = fs.readdirSync(uploadPath);
  res.json(fileList);
});

app.delete('/delete/:fileName', (req, res) => {
  const { fileName } = req.params;
  const filePath = `${uploadPath}${fileName}`;

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.send('Arquivo deletado com sucesso.');
  } else {
    res.status(404).send('Arquivo n�o encontrado.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
