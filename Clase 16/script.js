function test_arreglo(){
    /*arreglo.push(10);
    arreglo.push(20);
    arreglo.push(30);
    arreglo.push(40);
    arreglo.push(50);
    arreglo.push(60);
    arreglo.push(70);
    arreglo.push(80);
    arreglo.push(90);
    arreglo.push(parseInt(100));
    */
   console.clear();
   
   for(let i=0;i<arreglo.length;i++){
       console.log('Loading...',arreglo[i])
    if(arreglo[i]==100){
        console.log('Loading Completed')
        console.log('Deployment in Progress')
    }
};
console.log('Deployment Completed')
};
let arreglo=[];

function cagarNotas(){
    for(let i=0;i<3;i++){
        arreglo[parseInt(i)]=prompt("Ingrese la Nota del Alumno")
    }

notaBaja(arreglo);
notaAlta(arreglo);
promedio(arreglo)

};
function notaBaja(arreglo){
    let minimo;
    for (let i=0;i<arreglo.length;i++){
        if(arreglo[i]<arreglo[i+1]){
            minimo=arreglo[i];
        }
    }
    console.log("La nota mas baja es: ",minimo);
};
function notaAlta(arreglo){
    let maximo;
    for (let i=0;i<arreglo.length;i++){
        if(arreglo[i+1]>arreglo[i]){
            maximo=arreglo[i+1];
        }
    }
    console.log('La nota mas alta es: ',maximo);
};
function promedio(arreglo){
    let suma=arreglo[0];
    let cantidaNotas=arreglo.length;
    let promedio;
    for(let i=1;i<arreglo.length;i++){
        suma=parseInt(suma)+parseInt(arreglo[i]);
    }
    promedio=parseFloat(suma/arreglo.length)
    console.log('El promedio de notas fue: ',promedio);
};