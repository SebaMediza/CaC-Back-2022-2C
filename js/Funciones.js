/*Primera funcion*/
function SumaNumeros(x) {
    return parseFloat(x) + 2;
}

function XmasY(x,y){
    return parseInt(x) + parseInt(y);
}

function calcular(){
    let valor1=prompt('Ingrese el valor1');
    let op=prompt('Ingrese la operacion(+,-,*,/)');
    let valor2=prompt('Ingrese el valor2');
    let result;

    switch(op){
        case '+':
            result=parseInt(valor1) + parseInt(valor2);
            console.log(result);
            break;
        case '-':
            result=parseInt(valor1) - parseInt(valor2);
            console.log(result);
            break;
        case '/':
            result=parseInt(valor1) / parseInt(valor2);
            console.log(result);
            break;
        //sdasdawdawdasdaw
        case '*':
            result=parseInt(valor1) * parseInt(valor2);
            console.log(result);
            break;
    }

}