function subtrairHoras(hora1, hora2) {
    // Divida as horas em componentes (horas, minutos, segundos)
    const [h1, m1, s1] = hora1.split(':').map(Number);
    const [h2, m2, s2] = hora2.split(':').map(Number);

    // Converta tudo para segundos
    const totalSegundos1 = h1 * 3600 + m1 * 60 + (s1 || 0);
    const totalSegundos2 = h2 * 3600 + m2 * 60 + (s2 || 0);

    // Subtraia as horas em segundos
    let diferencaSegundos = totalSegundos1 - totalSegundos2;

    // Calcule os componentes (horas, minutos, segundos)
    const horas = Math.floor(diferencaSegundos / 3600);
    diferencaSegundos %= 3600;
    const minutos = Math.floor(diferencaSegundos / 60);
    const segundos = diferencaSegundos % 60;

    // Formate a saída para "hh:mm:ss"
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// Exemplo de uso
const hora1 = "97:30:00";
const hora2 = "11:35:00";

console.log(subtrairHoras(hora1, hora2)); 
