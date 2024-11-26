function Carro(velocicdadeMax = 200, Delta = 5) {
    // Método privado
    let velocicdadeatual = 0;

    // Método público para acelerar
    this.acelerar = function () {
        if (velocicdadeatual + Delta <= velocicdadeMax) {
            velocicdadeatual += Delta;
        } else {
            velocicdadeatual = velocicdadeMax;
        }
    };

    // Método público para obter a velocidade atual
    this.getVelocidadeAtual = function() {
        return velocicdadeatual;
    };
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual()); // Vai exibir a velocidade atual após uma aceleração
