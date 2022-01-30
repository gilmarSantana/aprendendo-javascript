const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
    console.log("cerveja")
} else {
    console.log("suco")
}

const bebida = idadeCliente >= idadeMinima ? "cerveja" : "suco";

console.log("A bebida vai ser", bebida);