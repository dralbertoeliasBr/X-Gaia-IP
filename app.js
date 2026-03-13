// app.js - Voz, navegação e inteligência básica

// Voz de saída
function falar(texto) {
  if ('speechSynthesis' in window) {
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    fala.rate = 1.0;
    fala.pitch = 1.0;
    speechSynthesis.speak(fala);
  } else {
    alert('Voz não disponível.');
  }
}

// Navegação
function ir(pagina) {
  const tela = document.getElementById('tela');
  tela.innerHTML = `<h2>${pagina.charAt(0).toUpperCase() + pagina.slice(1)}</h2>`;
  if (pagina === 'falar') {
    falar('Olá! Eu sou XGaia. Fale o que você precisa.');
  } else if (pagina === 'sobre') {
    falar('Sou sua IA pessoal por voz, feita pra aprender com você.');
  } else {
    falar('Bem-vindo ao início.');
  }
}

// Inteligência: aprende e guarda preferências
let preferencias = {}; // memória viva

function aprender(chave, valor) {
  preferencias = valor;
  Banco.salvar('preferencias', { chave: chave, valor: valor });
  falar(`Entendi e guardei: ${chave} = ${valor}.`);
}

// Processa fala (chama quando ouvir)
function processarFala(texto
