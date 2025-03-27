function calcular(){
    // vamos criar duas variaveis
    // JS as variaveis nao possuem tipo
    // let variavel
    let mascote, homenagem, kitAvulso, suplementoAvulso
    // recupera o valor do mascote digitado pelo usuario
    mascote = document.getElementById ("mascote").value
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = document.getElementById("homenagem").value
    //recupera a qtnd de litros de leite
    leite = document.getElementById("leite").value
    //recuperar a soma avulsa de kits alimentação
    kitAvulso = document.getElementById("kitAvulso").value
    //recuperar a soma suplemento avulso
    suplementoAvulso = document.getElementById("suplementoAvulso").value
    //calcular a soma
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + (30 * Number(kitAvulso)) + (15 * Number(suplementoAvulso))
    // retorna o valor ao html
    //template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}