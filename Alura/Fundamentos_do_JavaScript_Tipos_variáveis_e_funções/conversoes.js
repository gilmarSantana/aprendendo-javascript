// conversão implicita

const numero = 456;
const numeroTexto = "456";

console.log(typeof(numero));
console.log(typeof(numeroTexto));
console.log(numero + numeroTexto);

/// conversão explicita
console.log(numero + Number(numeroTexto));
console.log(String(numero) + Number(numeroTexto));