// quando usar var

// var altura = 5;
// var comprimento = 7;
// var area;

// area = altura * comprimento;
// console.log(area)



// let forma = "triangulo";
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === "retangulo") {
//     area = altura * comprimento;
// } else if (forma === "triangulo") {
//     area = (altura * comprimento) / 2;
// }

// console.log(area)

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area = 9;

if (forma === "quadrado") {
    area = altura * comprimento;
} else if (forma === "triangulo") {
    area = ((altura * comprimento / 2));
    console.log(area)
}
console.log(area)