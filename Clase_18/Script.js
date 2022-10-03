let arrayPalabras=[];
function addPalabra(){
    const valuePalabra=document.getElementById('palabra').value;
    //console.log(valuePalabra);
    if(valuePalabra===''){
        alert('debe completar el campo');
        return;
    }
    arrayPalabras.push(valuePalabra);
    console.log(arrayPalabras)
    listarPalabras();
}
function listarPalabras(){
    if(arrayPalabras.length=== 0){
        alert('Array vacio');
    }
    document.getElementById('listaPalabras').innerHTML='';
    for(let unaPalabra of arrayPalabras){
        document.getElementById('listaPalabras').innerHTML+= ` ${unaPalabra} <br>`;//alt+96 
    }
    //arrayPalabras.forEach(x=>)
}

/*
const addPalabra=() => {}
addPalabra = function(){}
*/