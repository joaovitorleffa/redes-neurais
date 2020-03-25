
//grupo de exemplos para treinamento supervisionado
var x11=1, x12=1, y1=1
var x21=1, x22=0, y2=1
var x31=0, x32=1, y3=0 
var x41=0, x42=0, y4=0

//pesos
var w1=-1, w2=-1

var y, soma, c=1, erro=0, totalErros=0;

do{   
    erro = 0;
   
    y = calculaFuncaoRampa(calculaSoma(x11, w1, x12, w2))
    if (y != y1) {
        ajusteSinaptico(y1, y, x11, x12)
        erro++
        totalErros++
    }
 
    y = calculaFuncaoRampa(calculaSoma(x21, w1, x22, w2))
    if (y != y2) {
        ajusteSinaptico(y1, y, x21, x22)
        erro++
        totalErros++
    }
    
    y = calculaFuncaoRampa(calculaSoma(x31, w1, x32, w2));
    if (y != y3) {
        ajusteSinaptico(y1, y, x11, x12)
        erro++
        totalErros++
    }
    
    y = calculaFuncaoRampa(calculaSoma(x41, w1, x42, w2));
    if (y != y4) {
        ajusteSinaptico(y1, y, x11, x12)
        erro++
        totalErros++
    }

} while (erro != 0);

console.log("w1= "+w1, "w2= "+w2);
console.log("Toral de erros: "+totalErros)

function calculaSoma(entrada1, peso1, entrada2, peso2)
{
    return ((entrada1 * peso1) + (entrada2 * peso2))
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

function ajusteSinaptico(y1, y, x1, x2) {
    w1=w1+c*(y1-y)*x1
    w2=w2+c*(y1-y)*x2
}