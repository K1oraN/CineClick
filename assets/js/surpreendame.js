// Lista de arquivos HTML locais
const arquivosHTML = [
    'SCARFACE.html',
    'LALALAND.html',
    'KINGSMAN.html',
    'INTERESTELAR.html'
    'AVENTURASDEPI.html'
    'CAPITAMARVEL.html'
];

// Função que redireciona para um arquivo aleatório
function surpreendaMe() {
    const arquivoAleatorio = arquivosHTML[Math.floor(Math.random() * arquivosHTML.length)];
    window.location.href = arquivoAleatorio;
}


