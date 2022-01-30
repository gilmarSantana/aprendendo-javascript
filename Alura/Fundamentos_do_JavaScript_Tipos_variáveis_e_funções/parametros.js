function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(4, 2))


// ordem dos parametros

function nomeIdade(nome, idade) {
    return ` Meu nome é ${nome} e minha idade é ${idade}.`
}

console.log(nomeIdade(24, 'Gilmar'))
console.log(nomeIdade('Gilmar', 24))