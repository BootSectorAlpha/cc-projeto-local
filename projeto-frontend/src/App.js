import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3002/files')
      .then(response => setFiles(response.data))
      .catch(error => console.error('Erro ao obter a lista de arquivos:', error));
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      console.error('Nenhum arquivo selecionado.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3002/upload', formData)
      .then(response => {
        console.log(response.data);
        setFile(null);
        axios.get('http://localhost:3002/files')
          .then(response => setFiles(response.data))
          .catch(error => console.error('Erro ao obter a lista de arquivos:', error));
      })
      .catch(error => console.error('Erro ao fazer upload do arquivo:', error));
  };

  const handleDelete = (fileName) => {
    axios.delete(`http://localhost:3002/delete/${fileName}`)
      .then(response => {
        console.log(response.data);
        axios.get('http://localhost:3002/files')
          .then(response => setFiles(response.data))
          .catch(error => console.error('Erro ao obter a lista de arquivos:', error));
      })
      .catch(error => console.error('Erro ao excluir o arquivo:', error));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f8f8', minHeight: '100vh' }}>
      <h1 style={{ color: '#e91e63', marginBottom: '20px' }}>Upload de Arquivos</h1>
      <input type="file" onChange={handleFileChange} />
      <button
        style={{
          backgroundColor: '#e91e63',
          color: '#fff',
          padding: '10px',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          margin: '10px'
        }}
        onClick={handleUpload}
      >
        Enviar
      </button>

      <h2 style={{ color: '#e91e63', marginTop: '20px' }}>Arquivos</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {files.map((fileName, index) => (
          <li key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
            <span>{fileName}</span>
            <button
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e91e63',
                color: '#e91e63',
                padding: '5px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                marginTop: '10px'
              }}
              onClick={() => handleDelete(fileName)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
