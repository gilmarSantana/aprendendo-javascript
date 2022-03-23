function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_formulario = window.document.getElementById("txtano")
    var res = window.document.querySelector("div#res")

    if (ano_formulario.value.length == 0) {
        window.alert("O ano de nascimento não pode estar vazio.");
    } else if (Number(ano_formulario.value) > ano) {
        window.alert("O ano inserido ainda não existe. Haha boa tentativa ser do futuro.")
    } else {
        var sexo = window.document.getElementsByName("radsex")
        var idade = ano - Number(ano_formulario.value)

        var genero = ""

        var img = window.document.createElement("img")
        img.setAttribute("id", "foto")

        if (sexo[0].checked) {
            genero = "masculino"

            if (idade >= 0 && idade < 10) {
                // Criança   
                img.setAttribute('src', './img/menino.jpg')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', './img/jovi.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', './img/adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './img/idoso.jpg')
            }
        } else if (sexo[1].checked) {
            genero = "feminino"
            if (idade >= 0 && idade < 10) {
                // Criança  
                img.setAttribute('src', './img/menina.jpg')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', './img/jova.jpg')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', './img/adulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './img/idosa.jpg')
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `O usuário é do sexo ${genero} e tem ${idade} anos.`
        res.appendChild(img)

    }

}