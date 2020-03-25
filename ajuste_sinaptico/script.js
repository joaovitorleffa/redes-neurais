
var x11=1, x12=1, y1=1
var x21=1, x22=0, y2=1
var x31=0, x32=1, y3=0 
var x41=0, x42=0, y4=0
var w1=-1, w2=-1
var soma, y, c=1;

function calculaSoma(entrada1, peso1, entrada2, peso2)
{
    soma = ((entrada1 * peso1) + (entrada2 * peso2))
    return soma
}

function calculaFuncaoRampa(soma) 
{
    if (soma < 0) {
        y = 0
    } else if (soma >= 0 && soma <= 1) {
        y = soma
    } else {
        y = 1
    }
    return y
}

do{
    var err = 0;
    y = calculaFuncaoRampa(calculaSoma(x21, w1, x22, w2));
    if (y == y2) {
        console.log("Resultado esperado: "+y);
    }
    else {
        console.log("Resultado inesperado: "+y);
        w1=w1+c*(y1-y)*x21;
        w2=w2+c*(y1-y)*x22;
        err = 1; 
    }
} while (err != 0);


