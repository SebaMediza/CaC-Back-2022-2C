/*Primera funcion*/
function SumaNumeros(x) {
    return x + 2;
}

function XmasY(x,y){
    return x + y;
}

function calcular(){
    let valor1=prompt('Ingrese el valor1');
    let valor2=prompt('Ingrese el valor2');
    let op=prompt('Ingrese la operacion(+,-,*,/)');
    let result;

    switch(op){
        case '+':
            result=parseInt(valor1) + parseInt(valor2);
            console.log(result);
        case '-':
            result=parseInt(valor1) - parseInt(valor2);
            console.log(result);
        case '/':
            result=parseInt(valor1) / parseInt(valor2);
            console.log(result);
        case '*':
            result=parseInt(valor1) * parseInt(valor2);
            console.log(result);


    }

}