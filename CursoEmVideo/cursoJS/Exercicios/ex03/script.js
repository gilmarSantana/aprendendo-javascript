function contar() {
    // Elementos
    var numero_inicial = window.document.getElementById('numero_inicial').value
    var numero_final = window.document.getElementById('numero_final').value
    var passo = window.document.getElementById('passo').value
    var resultado = window.document.getElementById('resultado')

    // Validações dos campos
    if (!numero_inicial.length > 0) {
        window.alert('O numero inicial não pode estar em branco, vamos começar do zero okay ?')
        numero_inicial = 0
    }

    if (!numero_final.length > 0) {
        window.alert('O numero final não pode estar em branco, vamos usar o número 10, apenas para você ter um resultado rsrsrsrsrs')
        numero_final = 10
    }

    if (!passo.length > 0) {
        window.alert('O numero de passos não pode estar em branco, vamos utilizar o numero um (1).')
        passo = 1
    }

    resultado.innerHTML = 'Contando...'

    let ini = Number(numero_inicial)
    let fim = Number(numero_final)
    let step = Number(passo)

    if(step <= 0) {
        step = 1
    }

    if(ini < fim) {
        // Contagem crescente
        for(let c = ini; c <= fim; c += step) {
            resultado.innerHTML += ` \u{1F449} ${c}` 
        }
    }else {
        // Contagem decrescente
        for(let c = ini; c >= fim; c -= step) {
            resultado.innerHTML += ` \u{1F449} ${c}` 
        }
    }


    resultado.innerHTML += `\u{1F3C1}`


}
