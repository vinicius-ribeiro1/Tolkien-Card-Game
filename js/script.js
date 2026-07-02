const baralho = [
    { id: 1, img: "imagens/sauron.gif" },
    { id: 2, img: "imagens/aragorn.gif" },
    { id: 3, img: "imagens/frodo.gif" },
    { id: 4, img: "imagens/gandalf.gif" },
    { id: 5, img: "imagens/legolas.gif" },
    { id: 6, img: "imagens/gollum.gif" },
    { id: 7, img: "imagens/sam.gif" },
]

const cartasEmJogo = [];
let cartasViradas = [];
let acertos = 0;
let numCartas = 0;
let tentativas = [];


function inicio() {
    numCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número par entre 4 e 14"));

    if (isNaN(numCartas) || numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
        alert("Número inválido! Digite apenas números pares de 4 a 14.");
        inicio();
    } else {
        console.log("Iniciando...")
        return renderizarCartas(numCartas);
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function renderizarCartas(numCartas) {

    for (let i = 0; i < numCartas / 2; i++) {
        cartasEmJogo.push(baralho[i], baralho[i]);
    }

    cartasEmJogo.sort(comparador);

    let mesa = document.querySelector(".table");

    for (let i = 0; i < cartasEmJogo.length; i++) {
        mesa.innerHTML += `
            <div class="card" onclick="virarCarta(this)">
            <div class="front">
                <img src="${cartasEmJogo[i].img}" alt="">
            </div>
            <div class="back">
                <img src="imagens/lotr.png" alt="">
            </div>
        </div>
        `;
    }
}


function desvirarCartas(carta1, carta2) {
    carta1.classList.remove("flip");
    carta2.classList.remove("flip");
    cartasViradas = [];
}


function virarCarta(elemento) {
    if (elemento.classList.contains("flip") || cartasViradas.length === 2) {
        return;
    }

    elemento.classList.add("flip");
    cartasViradas.push(elemento);
    tentativas.push(elemento);

    if (cartasViradas.length === 2) {
        const carta1 = cartasViradas[0];
        const carta2 = cartasViradas[1];
        const img1 = carta1.querySelector(".front img").src;
        const img2 = carta2.querySelector(".front img").src;

        if (img1 === img2) {
            cartasViradas = [];
            acertos = acertos + 1;
            verificarVitoria();
        } else {
            setTimeout(function () {
                desvirarCartas(carta1, carta2);
            }, 1000);
        }
    }4
}

function verificarVitoria() {
    if (acertos === numCartas / 2) {
        setTimeout(function () {
            alert(`Você ganhou em ${tentativas.length} jogadas!!!`);
        }, 300);
    }
}


inicio();
