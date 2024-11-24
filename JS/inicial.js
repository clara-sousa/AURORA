document.addEventListener("DOMContentLoaded", function() {
    // Exibe um alerta de boas-vindas ao carregar a página
    alert("Bem-vindo ao nosso site!");

    // Verifica se o usuário já aceitou ou rejeitou os cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    
    // Se não houver registro, exibe o wrapper de cookies
    if (!cookiesAccepted) {
        document.getElementById("cookie-wrapper").style.display = "flex";
    }

    // Função para aceitar os cookies
    document.getElementById("accept-cookies").addEventListener("click", function() {
        // Armazena a aceitação dos cookies no localStorage
        localStorage.setItem("cookiesAccepted", "true");
        // Oculta o wrapper de cookies
        document.getElementById("cookie-wrapper").style.display = "none";
    });

    // Função para rejeitar os cookies
    document.getElementById("reject-cookies").addEventListener("click", function() {
        // Armazena a rejeição dos cookies no localStorage
        localStorage.setItem("cookiesAccepted", "false");
        // Oculta o wrapper de cookies
        document.getElementById("cookie-wrapper").style.display = "none";
    });
});
const quotes = [
    "A liberdade de ser você mesmo é o maior presente que alguém pode conquistar. - Leah Fora de Sintonia, página 201.",
    "Às vezes, as pessoas precisam apenas de um exemplo para perceber que elas também podem ser autênticas. - Heartstopper: Volume Um, página 34.",
    "Nossas vidas são um mosaico, e o amor é a peça que completa o quadro. - Duas Garotas se Beijando, página 110.",
    "Não há maior agonia do que guardar uma história não contada dentro de você. - Eu Sei Por Que o Pássaro Canta na Gaiola, página 87.",
    "Nós aceitamos o amor que achamos que merecemos. - As Vantagens de Ser Invisível, página 24.",
    "Você não deveria ter que se desculpar por ser quem é. - Simon vs. A Agenda Homo Sapiens, página 123.",
    "Não é um sentimento que precisa ser compreendido, mas sim aceito. - O Pequeno Príncipe, página 58.",
    "Às vezes, as pessoas não têm um destino, têm apenas um caminho. O mais importante é o que fazem dele.  - O Jogo do Anjo,página 133",
    "Antes, eu tinha a ignorância como uma bênção. Agora vejo que a consciência é uma maldição. - Flores para Algernon, página 193.",
    "O amor verdadeiro não conhece barreiras; transcende todas as limitações. - Simon vs. A Agenda Homo Sapiens, página 89.",
    "O mundo é vasto demais para restringir o amor. - Heartstopper: Volume Um, página 54.",
    "A maior tragédia da vida é não descobrir quem somos. - 1984, página 127.",
    "Não há regras que definam como o coração deve amar. - Red, White & Royal Blue, página 101.",
    "A humanidade vive em conflito com a própria capacidade de pensar. - Admirável Mundo Novo, página 75.",
    "A coragem de ser quem somos muda o curso da história. - Garoto Encontra Garoto, página 98.",
    "A solidão é o preço que pagamos pelo avanço da inteligência. - Flores para Algernon, página 211.",
    "Se formos livres para pensar, não seremos cativos do medo. - O Processo, página 113.",
    "A liberdade de amar é a maior revolução de todas. - Leah Fora de Sintonia, página 157.",
    "Amar sem medo é a maior forma de resistência que existe. - Duas Garotas se Beijando, página 63.",
    "As palavras nos libertam ou nos aprisionam, depende apenas de como as usamos. - O Nome do Vento, página 187."
];
  let currentQuoteIndex = 0;

  function showNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    document.getElementById("current-quote").innerText = quotes[currentQuoteIndex];
  }

  function showPreviousQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    document.getElementById("current-quote").innerText = quotes[currentQuoteIndex];
  }
document.getElementById("year").textContent = new Date().getFullYear();

