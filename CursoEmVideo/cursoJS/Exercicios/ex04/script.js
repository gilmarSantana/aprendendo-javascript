function gerarTabuada() {
    let numero = window.document.querySelector('input#numero')
    let area_tabuada = window.document.querySelector('select#area_tabuada')


    if (numero.value.length <= 0) {
        alert('Não é impossível gerar a tabuada com o número informado.');
        return
    }

    let dividendo = Number(numero.value)

    area_tabuada.innerHTML = ''
    for (let index = 1; index <= 10; index++) {
        let item = document.createElement('option')
        item.innerText =  `${dividendo} X ${index} = ${index * dividendo}`
        item.value = `tab${index}`
        area_tabuada.appendChild(item)
    }

}