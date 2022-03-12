let num = [5, 8, 9, 1, 4, 4, 8, 4, 3, 1, 54, 4, 8, 4, 5, 4, 0, 2, 2, 4, 5, 4, 8, 6, 5, 4, 6, 5, 4, 8, 96, 7, 6, 2, 1, 6, 546, 54, 654, 635, 465, 465, 4231, 68, 435, 16354, 684, 654, 321, 684, 65, 13, 54, 684, 654, 3541, 684, 654, 654, 654, 96];
num.sort();


let nomes = {'homem':"Julio", 'mulher':'Ana'};

for (let index = 0; index < num.length; index++) {    
    console.log(num[index])
}


for (const key in num) {  
    console.log('KEY: ' + num[Number(key)]);
}


for (const type in nomes) {
   console.log(type + ' has ' + nomes[type])
}


console.log(num.indexOf(654));
console.log(num[num.indexOf(654)]);


console.log(`The first value of vetor is ${num[0]}`);
console.log(``);