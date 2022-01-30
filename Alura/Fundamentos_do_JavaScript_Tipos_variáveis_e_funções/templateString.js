const nome = "Gilmar";
const idade = 2022 - 1997;
const cidadeNascimento = "São Paulo";

const apresentacaoNormal = "Meu nome é " + nome + ", tenho " + idade +
    " anos e nasci na cidade de " + cidadeNascimento + ".";
console.log(apresentacaoNormal);

const apresentacaoTemplateString = `Meu nome é ${nome}, tenho ${idade} anos e nasci na cidade de ${cidadeNascimento}.`;
console.log(apresentacaoTemplateString);