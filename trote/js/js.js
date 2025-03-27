function calcular(){
    // vamos criar duas variaveis
    // JS as variaveis nao possuem tipo
    // let variavel
    let mascote, homenagem 
    // recupera o valor do mascote digitado pelo usuario
    mascote = document.getElementById ("mascote").value
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = document.getElementById("homenagem").value
    let soma = Number(mascote) + Number(homenagem) 
    // retorna o valor ao html
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}