function inicio() {
    const numCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha um número par entre 4 e 14"));

    if (isNaN(numCartas) || numCartas < 4 || numCartas > 14 || numCartas % 2 !== 0) {
        alert("Número inválido! Digite apenas números pares de 4 a 14.");
        inicio();
    } else {
        console.log("Iniciando...")
        return distribuirCartas(numCartas)
    }
}

function virarCarta(carta) {
    carta.classList.toggle('flip');
}

const baralho = [
    { id: 1, img: "onering.gif" },
    { id: 2, img: "aragorn.gif" },
    { id: 3, img: "frodo.gif" },
    { id: 4, img: "gandalf.gif" },
    { id: 5, img: "legolas.gif" },
    { id: 6, img: "gollum.gif" },
    { id: 7, img: "sam.gif" },
]





inicio();