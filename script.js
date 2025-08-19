const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma fase de reflexão sobre sua vida e suas escolhas. Como você prefere iniciar esse processo?",
        alternativas: [
            {
                texto: "Eu busco respostas em livros ou recursos externos.",
                afirmacao: "Eu busco respostas fora de mim."
            },
            {
                texto: "Eu prefiro refletir sozinho e procurar as respostas dentro de mim.",
                afirmacao: "Eu encontro as respostas dentro de mim."
            }
        ]
    },
    {
        enunciado: "Ao identificar um desafio em sua vida, como você tende a reagir?",
        alternativas: [
            {
                texto: "Tento analisar racionalmente todos os aspectos antes de agir.",
                afirmacao: "Eu priorizo a análise racional em meus desafios."
            },
            {
                texto: "Eu sigo meu instinto e tomo decisões mais espontâneas.",
                afirmacao: "Eu sigo minha intuição quando enfrento desafios."
            }
        ]
    },
    {
        enunciado: "Você percebe que tem dificuldade em lidar com críticas. Como lida com essa situação?",
        alternativas: [
            {
                texto: "Fico chateado, mas tento aprender com o feedback para melhorar.",
                afirmacao: "Eu vejo as críticas como uma oportunidade de evolução."
            },
            {
                texto: "Sinto-me desconfortável e, às vezes, tento evitar críticas no futuro.",
                afirmacao: "Eu tento proteger-me de críticas, mesmo que isso signifique não crescer."
            }
        ]
    },
    {
        enunciado: "Durante um momento de incerteza, qual atitude você toma?",
        alternativas: [
            {
                texto: "Procuro me conectar com pessoas que me ofereçam apoio emocional.",
                afirmacao: "Eu busco o apoio dos outros quando estou em dúvida."
            },
            {
                texto: "Tento resolver tudo por conta própria e encaro a situação sozinho.",
                afirmacao: "Eu prefiro enfrentar a incerteza de forma independente."
            }
        ]
    },
    {
        enunciado: "Em um processo de autoconhecimento, qual aspecto você considera mais importante?",
        alternativas: [
            {
                texto: "Entender minhas motivações e objetivos de vida.",
                afirmacao: "Eu busco entender o que me motiva."
            },
            {
                texto: "Compreender os meus sentimentos e emoções mais profundos.",
                afirmacao: "Eu busco entender o que sinto e como me afeto."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
