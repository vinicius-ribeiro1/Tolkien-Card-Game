 function inicio() {                                                           // Define quantas cartas serão criadas
    let qtdCartas = Number(prompt("Com quantas cartas quer jogar?"));
    if (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 != 0 ) {
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
    

