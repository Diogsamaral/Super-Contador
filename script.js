function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    if(inicio.value.length == 0 || inicio.value == 0) {
        res.innerHTML = 'ERRO... Verifique os dados do INICIO e tente novamente!'
    } else if(fim.value == inicio.value || fim.value == 0 || fim.value.length == 0) {
        res.innerHTML = 'ERRO... Os dados de FIM não podem ser iguais ao INICIO, nem igual a 0 ou invesistente'
    } else if(passo.value.length == 0 || passo.value == 0) {
        res.innerHTML = 'ERRO... Precisamos de um valor maior ou menor que 0 no PASSO!'
    } else { 
        res.innerHTML = `Contando: `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) {
            var contador = i
            while (contador <= f) {
                res.innerHTML += `${contador} \u{1F449}`
                contador += p
            }
        } else {
            var contador = i
            while (contador >= f) {
                res.innerHTML += `${contador} \u{1F449}`
                contador -= p
            }

        }
        res.innerHTML += `\u{1F3C1}`
        
    }
    
}