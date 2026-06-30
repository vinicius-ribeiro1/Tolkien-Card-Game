function inicio() {
    const numCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número par entre 4 e 14"));

    if (isNaN(numCartas) || numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
        alert("Número inválido! Digite apenas números pares de 4 a 14.");
        inicio();
    } else {
        console.log("Iniciando...")
        return renderizarCartas(numCartas);
    }
}



function virarCarta(carta) {
    carta.classList.toggle('flip');
}

const baralho = [
    { id: 1, img: "imagens/sauron.gif" },
    { id: 2, img: "imagens/aragorn.gif" },
    { id: 3, img: "imagens/frodo.gif" },
    { id: 4, img: "imagens/gandalf.gif" },
    { id: 5, img: "imagens/legolas.gif" },
    { id: 6, img: "imagens/gollum.gif" },
    { id: 7, img: "imagens/sam.gif" },
]

function comparador() {
    return Math.random() - 0.5;
}

function renderizarCartas(numCartas) {
    const cartasEmJogo = [];
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

inicio();