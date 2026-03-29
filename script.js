let indice = 0;
let dinheiro = 0;

let premios = [
    1000, 2000, 5000, 10000, 20000,
    50000, 100000, 200000, 500000, 1000000
];

let perguntas = [
    {
        pergunta: "Qual a capital do Brasil?",
        opcoes: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        correta: 1
    },
    {
        pergunta: "Quanto é 5 x 5?",
        opcoes: ["10", "20", "25", "30"],
        correta: 2
    },
    {
        pergunta: "Qual planeta é conhecido como planeta vermelho?",
        opcoes: ["Terra", "Marte", "Júpiter", "Saturno"],
        correta: 1
    },
    {
        pergunta: "Quem descobriu o Brasil?",
        opcoes: ["Dom Pedro", "Cabral", "Colombo", "Napoleão"],
        correta: 1
    },
    {
        pergunta: "Qual é a raiz quadrada de 144?",
        opcoes: ["10", "11", "12", "13"],
        correta: 2
    },
    {
        pergunta: "Em que ano o homem pisou na Lua?",
        opcoes: ["1965", "1969", "1972", "1980"],
        correta: 1
    },
    {
        pergunta: "Qual linguagem é usada na web?",
        opcoes: ["Python", "C", "HTML", "Java"],
        correta: 2
    },
    {
        pergunta: "Qual é o maior oceano do mundo?",
        opcoes: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        correta: 3
    },
    {
        pergunta: "Quem criou a teoria da relatividade?",
        opcoes: ["Newton", "Einstein", "Tesla", "Galileu"],
        correta: 1
    },
    {
        pergunta: "Qual o valor de 2^10?",
        opcoes: ["512", "1024", "2048", "4096"],
        correta: 1
    },
        {
        pergunta: "Qual o maior país do mundo em área?",
        opcoes: ["China", "Canadá", "Rússia", "Estados Unidos"],
        correta: 2
    },
    {
        pergunta: "Qual elemento químico tem o símbolo 'O'?",
        opcoes: ["Ouro", "Oxigênio", "Osmium", "Olívio"],
        correta: 1
    },
    {
        pergunta: "Qual é a capital da França?",
        opcoes: ["Lyon", "Marselha", "Paris", "Nice"],
        correta: 2
    },
    {
        pergunta: "Quantos segundos tem 1 hora?",
        opcoes: ["3600", "1800", "600", "7200"],
        correta: 0
    },
    {
        pergunta: "Quem pintou a Mona Lisa?",
        opcoes: ["Van Gogh", "Leonardo da Vinci", "Michelangelo", "Picasso"],
        correta: 1
    },
    {
        pergunta: "Qual é o menor número primo?",
        opcoes: ["0", "1", "2", "3"],
        correta: 2
    },
    {
        pergunta: "Em que país fica a Torre de Pisa?",
        opcoes: ["Espanha", "Itália", "França", "Alemanha"],
        correta: 1
    },
    {
        pergunta: "Qual é a fórmula da água?",
        opcoes: ["H2O", "CO2", "O2", "NaCl"],
        correta: 0
    },
    {
        pergunta: "Quem escreveu 'Dom Quixote'?",
        opcoes: ["Miguel de Cervantes", "Shakespeare", "Fernando Pessoa", "Machado de Assis"],
        correta: 0
    },
    {
        pergunta: "Qual é a cor resultante da mistura de azul e amarelo?",
        opcoes: ["Verde", "Roxo", "Laranja", "Marrom"],
        correta: 0
    }
];

function iniciarJogo() {
    embaralharPerguntas(perguntas); 

    document.getElementById("inicio").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    mostrarPergunta();
}

function mostrarPergunta() {
    let p = perguntas[indice];

    document.getElementById("valor").innerText = "Valendo R$ " + premios[indice];
    document.getElementById("pergunta").innerText = p.pergunta;

    let respostasDiv = document.getElementById("respostas");
    respostasDiv.innerHTML = "";

    p.opcoes.forEach((opcao, i) => {
        let btn = document.createElement("button");
        btn.innerText = opcao;
        btn.onclick = () => confirmarResposta(i);
        respostasDiv.appendChild(btn);
    });
}

function confirmarResposta(opcao) {
    let certeza = confirm("Tem certeza da resposta?");
    if (certeza) {
        verificarResposta(opcao);
    }
}

function verificarResposta(opcao) {
    let correta = perguntas[indice].correta;

    if (opcao === correta) {
        dinheiro = premios[indice];
        indice++;

        if (indice >= perguntas.length) {
            fimDeJogo(true);
        } else {
            mostrarPergunta();
        }
    } else {
        fimDeJogo(false);
    }
}

function pararJogo() {
    let confirmar = confirm("Deseja parar e levar R$ " + dinheiro + "?");

    if (confirmar) {
        document.getElementById("jogo").style.display = "none";
        document.getElementById("fim").style.display = "block";

        document.getElementById("mensagemFinal").innerText =
            "Você decidiu parar e ganhou R$ " + dinheiro + " 💰";
    }
}

function fimDeJogo(vitoria) {
    document.getElementById("jogo").style.display = "none";
    document.getElementById("fim").style.display = "block";

    if (vitoria) {
        document.getElementById("mensagemFinal").innerText =
            "PARABÉNS! Você ganhou R$ 1.000.000 💰";
    } else {
        document.getElementById("mensagemFinal").innerText =
            "Você perdeu! Ganhou R$ " + dinheiro;
    }
}
function embaralharPerguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}