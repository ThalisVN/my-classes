// Cadeia de protótipo
Object.prototype.attr0 = '0';
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' };
const filho = { __proto__: pai, attr3: 'C' };

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // "0 A B C"

// Objeto base Carro
const Carro = {
    velI: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velI + delta <= this.velMax) {
            this.velI += delta;
        } else {
            this.velI = this.velMax;
        }
    },
    status() {
        return `${this.velI} Km/h de ${this.velMax} Km/h`;
    }
};

// Ferrari e Volvo, com protótipos herdados de Carro
const ferrari = {
    modelo: 'F40',
    velMax: 324, // Sobrescreve velMax do protótipo
    status() {
        return `${this.modelo}: ${super.status()}`; // Usa super para chamar o método do protótipo
    }
};

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
};

// Ajusta os protótipos
Object.setPrototypeOf(ferrari, Carro)
Object.setPrototypeOf(volvo, Carro)

console.log(ferrari)
volvo.acelerarMais(100)
console.log(volvo.status())
