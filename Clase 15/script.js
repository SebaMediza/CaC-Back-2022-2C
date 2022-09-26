function Sumar(){
    const lableContador = document.getElementById('contador');
    let valorDelLableContador = lableContador.innerHTML;
    parseInt(valorDelLableContador++);
    lableContador.innerHTML=valorDelLableContador;
    imprimirLable(valorDelLableContador);
}

function Restar(){
    const lableContador = document.getElementById('contador');
    let valorDelLableContador = lableContador.innerHTML;
    parseInt(valorDelLableContador--);
    lableContador.innerHTML=valorDelLableContador;
    imprimirLable(valorDelLableContador); 
}

function getLable(){
    const lableContador = document.getElementById('contador');
    let valorDelLableContador = lableContador.innerHTML;
    return valorDelLableContador
}

function imprimirLable(valorDelLableContador){
    const lableParidad = document.getElementById('paridad');
    if(!esPar(valorDelLableContador)){
        lableParidad.innerHTML = 'Par';
    }else{
        lableParidad.innerHTML = 'Impar';
    }
}

function actualizarTexto(id, nuevoValor){
    const lableParidad = document.getElementById(id);
    lableParidad.innerHTML = nuevoValor;
}

function esPar(valorDelLableContador){
    return valorDelLableContador % 2;
}

function test(){
    console.log(parseInt(Math.pow(-8,3))); 
}
