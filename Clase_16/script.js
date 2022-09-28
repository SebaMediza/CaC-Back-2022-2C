let arreglo=[];

function cagarNotas(){
    for(let i=0;i<3;i++){
        arreglo[parseInt(i)]=prompt("Ingrese la Nota del Alumno")
    }
    notaBaja(arreglo);
    notaAlta(arreglo);
    promedio(arreglo);
};
function notaBaja(arreglo){
    let minimo;
    for (let i=0;i<arreglo.length;i++){
        minimo=arreglo[i]
        if(minimo>arreglo[i+1]){
            minimo=arreglo[i];
        }
    }
    const lableNotaBaja=document.getElementById('notaBaja');
    lableNotaBaja.innerHTML=minimo;
};
function notaAlta(arreglo){
    let maximo;
    for (let i=0;i<arreglo.length;i++){
        if(arreglo[i+1]>arreglo[i]){
            maximo=arreglo[i+1];
        }
    }
    const lableNotaAlta=document.getElementById('notaAlta');
    lableNotaAlta.innerHTML=maximo;
};
function promedio(arreglo){
    let suma=arreglo[0];
    let promedio;
    for(let i=1;i<arreglo.length;i++){
        suma=parseInt(suma)+parseInt(arreglo[i]);
    }
    promedio=parseFloat(suma/arreglo.length)
    const lablePromedio=document.getElementById('promedio');
    lablePromedio.innerHTML=promedio;
};