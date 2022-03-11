contador = 1;
while(contador <= 100) {
    console.log('Runnig on port 808:' + contador);
    contador++;
}




counter = 1;
do {
    console.log('Verificando ' + counter);
    counter++
} while (counter > 20)



let numPersons = 30;
do {
    if(numPersons === 30){ 
        console.log('Atendimento iniciado');
    }else if(numPersons === 0) {
        console.log('Fila terminou');
    }else{
        console.log('- - - - - - Fila andando');
    }
    numPersons--;
}while (numPersons >= 0)