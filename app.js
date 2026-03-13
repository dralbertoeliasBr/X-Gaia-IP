// app.js - Voz e navegação
function falar(texto) {
  if ('speechSynthesis' in window) {
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    fala.rate = 1.0;
    fala.pitch = 1.0;
    speechSynthesis.speak(fala);
  } else {
    alert('Voz não disponível no seu navegador.');
  }
}

function ir(pagina) {
  const tela = document.getElementById('tela');
  tela.innerHTML = `<h2>${pagina.charAt(0).toUpperCase() + pagina.slice(1)}</h2>`;
  if (pagina === 'falar') {
    falar('Olá! Eu sou XGaia. Fale o que você precisa.');
  } else if (pagina === 'sobre') {
    falar('Sou uma IA pessoal por voz, feita pra inclusão digital. Aprendo com você.');
  } else {
    falar('Bem-vindo ao início.');
  }
}

// Inicia na tela inicial
document.addEventListener('DOMContentLoaded', () => {
  ir('inicio');
});
