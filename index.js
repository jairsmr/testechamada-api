const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota para receber logs via POST
app.post('/logs', (req, res) => {
    const logData = req.body;
    
    // Aqui você pode processar ou salvar os logs
    console.log('Log recebido:', logData);

    res.status(200).json({ message: 'dLog recebido com sucesso!' });
});

// Inicializar servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});