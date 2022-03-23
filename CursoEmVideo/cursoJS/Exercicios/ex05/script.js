let numero = window.document.querySelector('input#numero')
let btn_analisar = window.document.querySelector('input#btn_analisar')
let btn_analisar_lista = window.document.querySelector('input#btn_analisar_lista')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, list) {  
    if (list.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value)) {
        if (inLista(Number(numero.value), valores)) {
            console.log('Pode adicionar')
            valores.push(numero.value)
        } else {
            console.log('Não pode adicionar, porque já está na lista.')
        }
    } else {
        console.log('Não pode adicionar, porque não é um número válido.')
    }
}