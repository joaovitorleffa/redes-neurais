var y, valor, soma=0, i;

var twoOrN = parseInt(prompt("Deseja informar mais de duas entradas e dois pesos?\n1-Sim\n2-Não"));

if (twoOrN === 2) {
    var x0 = parseInt(prompt("Informe a primeira entrada"));
    var p0 = parseInt(prompt("Informe o primeiro peso"));
    var x1 = parseInt(prompt("Informe a segunda entrada"));
    var p1 = parseInt(prompt("Informe o segundo peso"));
    var opcao = parseInt(prompt("1- Limite Rápido\n2- Função Rampa\n3- Função Sigmóide"));
    soma = ((x0 * p0) + (x1 * p1));
    alert(soma);
} else {
    var numeroEntradasEPesos = parseInt(prompt("Informe o número de entradas e pesos que deseja informar:"));
    var peso = [];
    var entrada = [];
    var resultado = [];
    var tamanho = [];
    soma;

    for (i=0; i < numeroEntradasEPesos; i++) {
        entrada[i] = parseInt(prompt("Informe a Entrada"));
        peso[i] = parseInt(prompt("Informe o peso"));
        resultado[i] = (entrada[i] * peso[i]);
        soma += resultado[i];
    }

var opcao = parseInt(prompt("1- Limite Rápido\n2- Função Rampa\n3- Função Sigmóide"));

switch (opcao) {
    case 1: alert(getLimiteRapido(soma));
        break;
    case 2: alert(getFuncaoRampa(soma));
        break;
    case 3: alert(getFuncaoSigmoide(soma));
}

function getLimiteRapido(soma) {
    if (soma < 0) {
        y = -1;
    } else {
        y = 1;
    }
    return y;
}

function getFuncaoRampa(soma) {
    if (soma < 0) {
        y = 0;
    } else if (soma >= 0 && soma <= 1) {
        y = soma;
    } else {
        y = 1;
    }
    return y;
}

function getFuncaoSigmoide(soma) {
    if (soma >= 0) {
        y = 1 - 1 / (1 + (soma));
    } else if (soma < 0) {
        y = -1 + 1 / (1 - (soma));
    }
    return y;
}}