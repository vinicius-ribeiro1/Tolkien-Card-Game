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

    /*function adicionarCartas(qtdCartas) {
        const mesa = document.querySelector(".table");
        for (let i = 0; i < qtdCartas ; i++) {
            mesa.innerHTML += `
                <div class="card">
                    <div class="front">
                    <img src="imagens/lotr.png" alt="">
                    </div>
                    <div class="back">
                    <img src="imagens/one_ring.gif" alt="">
                    </div>
                </div>
                `;
        } 
    }*/
    

inicio();