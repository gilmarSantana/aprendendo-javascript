Tipos de dados no JavaScript
    -number
    -string
    -boolean
    -null
    -undefined
    -object
    -function

=========================================================================================
CONVERSÃO DE TIPOS

Converter para INTEIRO
Number.parseInt(variavel)

Converter para FLOAT
Number.parseFloat(variavel)

Converter para STRING
variavel.toString()
=========================================================================================
FORMATANDO STRINGS
variavel.length // retorna quantos caracteres a string tem
variavel.toUpperCase() // modifica a string para letras maiusculas
variavel.toLowerCase() // modifica a string para letras minusculas
=========================================================================================
FORMATANDO NUMEROS
var n1 = 1545.5
n1.toFixed(2) // 1545.50
n1.toFixed(2).replace('.', ',') // 1545,50
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // R$ 1,545.50
=========================================================================================
OPERADORES

O operador + serve para concatenação quando os dados são strings, e para soma quando os dados são number.

Temos operadores: {
    aritmeticos: [
        5 + 2 = 7, // Soma
        5 - 2 = 3, // Subtração
        5 * 2 = 10, // Multiplicação
        5 / 2 = 2.5, // Divisão
        5 % 2 = 1, // Módulo|Resto da divisão
        5 ** 2 = 25 // Potência | 5 * 5
    ],
    atribuição: [
        simples: [
            var a = 3; // = é recebe/atribui
        ]
    ],
    relacionais: [
        5 > 2, // Maior que
        7 < 2, // Menor que
        8 >= 8, // Maior ou igual que
        9 <= 4, // Menor ou igual que 
        5 == 5, // Igual a (só o valor)
        5 === '5' // Identico a (o valor e o tipo)
        4 != 4 // Diferente de
        4 !== '4' // Desidentico a
    ],
    lógicos: [
        ! // Negação (not)
        && // Conjunção (e)
        || // Disjunção (ou)
    ],
    ternário: [
        teste ? true : false
}

Ordem de precedencia dos operadores
(),
**,
*, /, %, 
+, -

=========================================================================================

Podemos selecionar elementos do DOM das seguintes formas:
    - por marca/tagname
        getElementsByTagName('tagname')[];
    - por ID
        getElementById('id');
    - por nome
        getElementsByName('name')[];
    - por classe
        getElementsByClassName('className')[];
    - por seletor
        querySelector('div#id'),
        querySelectorall()