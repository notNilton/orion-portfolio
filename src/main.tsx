import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Não há necessidade de incluir '.tsx'
import './styles/Global.scss';

function renderApp() {
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    console.error('Root element not found! Make sure the element with id="root" is present in your index.html.');
  }
}

// Chama a função para inicializar a aplicação
renderApp();
