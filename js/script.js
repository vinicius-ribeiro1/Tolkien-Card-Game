 function inicio() {                                                           // Define quantas cartas serão criadas (min:2 - max: 7)
    let qtdCartas = Number(prompt("Quantas cartas você quer jogar?"));
    if (qtdCartas < 2 || qtdCartas > 7) {
        alert("Número de cartas inválido! Reiniciando...");
        inicio();
    }
    adicionarCartas(qtdCartas);
    
} 
inicio();


    function adicionarCartas(qtdCartas) {
        const mesa = document.querySelector(".table");

        for (let i = 0; i < qtdCartas ; i++) {
            mesa.innerHTML += `
                <div class="card">
                    <div class="imgBackCard">
                    <img src="imagens/lotr.png" alt="">
                    </div>
                </div>
                `;
        } 
    }
    

