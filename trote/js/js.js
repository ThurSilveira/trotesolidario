function calcular(){
    // vamos criar duas variaveis
    // JS as variaveis nao possuem tipo
    // let variavel
    let mascote, homenagem, kitAvulso, suplementoAvulso, sangueAdicional, arroz5Avulso, arroz1Avulso, feijao2Avulso, feijao1Avulso, macarrao, oleo
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
    //recuperar a soma sangue adicional
    sangueAdicional = document.getElementById("sangueAdicional").value
    // recuperar a soma arroz 5 avulso
    arroz5Avulso = document.getElementById("arroz5Avulso").value
    //recupera valor arroz 1 avulso
    arroz1Avulso = document.getElementById("arroz1Avulso").value
    //recupera valor feijao 2 avulso
    feijao2Avulso = document.getElementById("feijao2Avulso").value
    //recupera valor feijao 1
    feijao1Avulso = document.getElementById("feijao1Avulso").value
    // recupera maccarao
    macarrao = document.getElementById("macarrao").value
    // recupera oleo
    oleo = document.getElementById("oleo").value
    //calcular a soma
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + (30 * Number(kitAvulso)) + (15 * Number(suplementoAvulso)) + (20 * Number(sangueAdicional)) + (5 * Number(arroz5Avulso)) + (Number(arroz1Avulso)) + (2 * Number(feijao2Avulso)) + (Number(feijao1Avulso)) + (0.5 * Number(macarrao)) + (Number (oleo))
    // retorna o valor ao html
    //template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}