function calcular(){
    // vamos criar duas variaveis
    // JS as variaveis nao possuem tipo
    // let variavel
    let mascote, homenagem, kit, suplemento, sangue, arroz5, arroz1, feijao2, feijao1, macarrao, oleo, soma, equipes
    // recupera o valor do mascote digitado pelo usuario
    mascote = Number(document.getElementById ("mascote").value)
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = Number(document.getElementById("homenagem").value)
    //recupera a qtnd de litros de leite
    leite = Number(document.getElementById("leite").value)
    //recuperar a soma avulsa de kits alimentação
    kit = Number(document.getElementById("kit").value)
    //recuperar a soma suplemento avulso
    suplemento = Number(document.getElementById("suplemento").value)
    //recuperar a soma sangue adicional
    sangue = Number(document.getElementById("sangue").value)
    // recuperar a soma arroz 5 avulso
    arroz5 = Number(document.getElementById("arroz5").value)
    //recupera valor arroz 1 avulso
    arroz1 = Number(document.getElementById("arroz1").value)
    //recupera valor feijao 2 avulso
    feijao2 = Number(document.getElementById("feijao2").value)
    //recupera valor feijao 1
    feijao1 = Number(document.getElementById("feijao1").value)
    // recupera maccarao
    macarrao = Number(document.getElementById("macarrao").value)
    // recupera oleo
    oleo = Number(document.getElementById("oleo").value)
    //calcular a soma
    soma = mascote + homenagem + (2 * leite)  + (15 * suplemento) + (20 * sangue) + (5 * arroz5) + arroz1 + (2 * feijao2) + feijao1 + (0.5 * macarrao) + oleo
    // retorna o valor ao html
    //template string
    equipes = document.getElementById("equipes").value
    if (equipes == "Laranja"){
        if (kit >= 106){
            soma = soma + 5000 + ((kit-106) * 30)
        }
        else if (kit >= 85){
            soma = soma + 4000 + ((kit-85) * 30)
        }
        else if (kit >= 53){
            soma = soma + 2500 + ((kit-53) * 30)
        }
        else if (kit >= 21){
            soma = soma + 1000 + ((kit-21) * 30)
        }
    }

    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}
