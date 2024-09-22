/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // Outras variáveis de ambiente personalizadas podem ser declaradas aqui
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  