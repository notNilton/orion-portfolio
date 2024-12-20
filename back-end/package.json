// server.js
require("dotenv").config(); // Carrega variáveis de ambiente do arquivo .env
const http = require("http");
const app = require("./app"); // Importa o app configurado
const { connectDB } = require("./config/db"); // Função de conexão com o banco de dados

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Cria o servidor HTTP
const server = http.createServer(app);

// Conecta ao banco de dados e inicializa o servidor
connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err.message);
    process.exit(1); // Finaliza o processo em caso de erro crítico
  });
