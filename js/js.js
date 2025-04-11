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
    soma = mascote + homenagem 
    // retorna o valor ao html
    //template string
    equipes = document.getElementById("equipes").value
    if (equipes == "Laranja"){
        if (kit >= 106 && suplemento >= 53){
            soma = soma + 5000 + ((kit-106) * 30) + ((suplemento-53) * 15) 
        }
        else if (kit >= 85 && suplemento >= 42){
            soma = soma + 4000 + ((kit-85) * 30) + ((suplemento-42) * 15) 
        }
        else if (kit >= 53 && suplemento >= 27){
            soma = soma + 2500 + ((kit-53) * 30) + ((suplemento-27) * 15) 
        }
        else if (kit >= 21 && suplemento >= 11){
            soma = soma + 1000 + ((kit-21) * 30) + ((suplemento-11) * 15) 
        }
        if (sangue >= 53){
            soma = soma + 2500 + ((sangue-53) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    } 
    else if (equipes == "Preto"){
        if (kit >= 104 && suplemento >= 52){
            soma = soma + 5000 + ((kit-104) * 30) + ((suplemento-52) * 15) 
        }
        else if (kit >= 83 && suplemento >= 42){
            soma = soma + 4000 + ((kit-83) * 30) + ((suplemento-42) * 15) 
        }
        else if (kit >= 52 && suplemento >= 26){
            soma = soma + 2500 + ((kit-52) * 30) + ((suplemento-26) * 15) 
        }
        else if (kit >= 21 && suplemento >= 10){
            soma = soma + 1000 + ((kit-21) * 30) + ((suplemento-10) * 15) 
        }
        if (sangue >= 52){
            soma = soma + 2500 + ((sangue-52) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
        
    }
    else if (equipes == "Roxo"){
        if (kit >= 105 && suplemento >= 53){
            soma = soma + 5000 + ((kit-105) * 30) + ((suplemento-53) * 15) 
        }
        else if (kit >= 84 && suplemento >= 44){
            soma = soma + 4000 + ((kit-84) * 30) + ((suplemento-44) * 15) 
        }
        else if (kit >= 53 && suplemento >= 27){
            soma = soma + 2500 + ((kit-53) * 30) + ((suplemento-27) * 15) 
        }
        else if (kit >= 21 && suplemento >= 11){
            soma = soma + 1000 + ((kit-21) * 30) + ((suplemento-11) * 15) 
        }
        if (sangue >= 53){
            soma = soma + 2500 + ((sangue-53) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }
    else if (equipes == "Verde"){
        if (kit >= 89 && suplemento >= 45){
            soma = soma + 5000 + ((kit-89) * 30) + ((suplemento-45) * 15) 
        }
        else if (kit >= 71 && suplemento >= 36){
            soma = soma + 4000 + ((kit-71) * 30) + ((suplemento-36) * 15) 
        }
        else if (kit >= 45 && suplemento >= 23){
            soma = soma + 2500 + ((kit-45) * 30) + ((suplemento-23) * 15) 
        }
        else if (kit >= 18 && suplemento >= 9){
            soma = soma + 1000 + ((kit-18) * 30) + ((suplemento-9) * 15) 
        }
        if (sangue >= 45){
            soma = soma + 2500 + ((sangue-45) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }
    else {
        if (kit >= 92 && suplemento >= 46){
            soma = soma + 5000 + ((kit-92) * 30) + ((suplemento-46) * 15) 
        }
        else if (kit >= 74 && suplemento >= 37){
            soma = soma + 4000 + ((kit-74) * 30) + ((suplemento-37) * 15) 
        }
        else if (kit >= 46 && suplemento >= 23){
            soma = soma + 2500 + ((kit-46) * 30) + ((suplemento-23) * 15) 
        }
        else if (kit >= 18 && suplemento >= 9){
            soma = soma + 1000 + ((kit-21) * 18) + ((suplemento-9) * 15) 
        }
        if (sangue >= 46){
            soma = soma + 2500 + ((sangue-46) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }       
    
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}
