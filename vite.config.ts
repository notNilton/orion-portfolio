import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
// Opcional: Adicione outros plugins de otimização, como compressão de arquivos
// import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    // Plugin para carregar componentes específicos do Ant Design sob demanda
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style/index.less`, // Carrega o estilo correspondente
        },
      ],
    }),
    // compression(), // Habilita compressão de arquivos para otimizar o build (opcional)
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // Necessário para o Ant Design
        // Adicione outras opções de configuração do LESS aqui, se necessário
      },
    },
  },
  // Configurações adicionais como build, otimizações ou server podem ser colocadas aqui
  build: {
    // target: 'es2015', // Defina um target específico, se necessário
    // minify: 'terser', // Minificação opcional para melhorar a performance
  },
  server: {
    port: 3000, // Define a porta do servidor de desenvolvimento
    open: true, // Abre automaticamente o navegador ao iniciar o servidor
  },
});
