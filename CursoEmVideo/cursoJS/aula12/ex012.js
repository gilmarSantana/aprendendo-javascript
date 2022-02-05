var agora = new Date()

var hora = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var hora =  agora.getHours();

console.log(`Agora são ${hora}`);

if(hora >= 1 && hora <= 5){
    console.log('Boa madrugada')
}else if(hora < 12){
    console.log('Bom dia!');
}else if (hora < 18) {
    console.log('Boa tarde')
}else if (hora <= 23){
    console.log('Boa noite')
}