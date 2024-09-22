// Prevenir o zoom com o mouse scroll
window.addEventListener('wheel', (e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault(); // Previne o comportamento de zoom com Ctrl + Scroll
    }
  }, { passive: false });
  
  // Prevenir o zoom com Ctrl + e Ctrl -
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    const zoomKeys = ['+', '-', '='];
  
    // Verifica se a tecla Ctrl está pressionada e a tecla de mais ou menos foi pressionada
    if (e.ctrlKey && (zoomKeys.includes(e.key) || e.key === '0')) {
      e.preventDefault(); // Previne o comportamento de zoom com Ctrl +, Ctrl -, ou reset com Ctrl + 0
    }
  });
  