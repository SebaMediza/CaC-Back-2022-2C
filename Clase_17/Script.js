//Test of my staff
function aumentar(){
    const labelContador=document.getElementById('contador')
    console.clear();
    for(let i=0;i<25;i++){
        labelContador.innerHTML=i;
        console.log(i);
    }
};

const alumnos = [
    {
        edad: 20, nombre: 'Seba'
    },
    {
        edad: 21, nombre: 'Mateo' 
    },
    {
        edad: 15, nombre: 'Morena' 
    },
    {
        edad: 18, nombre: 'Joaquin' 
    }
];
let alumnosMenores = [];
/*for(let unAlumno in alumnos){
    //console.log(unAlumno);
    if(unAlumno.edad < 40){
        alumnosMenores.push(unAlumno);
    }
}*/

//FILTER
alumnosMenores=alumnos.filter(unAlumno=>unAlumno.edad<40);
//MAP
const nombres=alumnosMenores.map(unAlumno=>unAlumno.nombre);
console.log(nombres);

//SOME (old)
let alumnoViejo=[];
let existencia = false;
for(let unAlumno of alumnos){
    if(unAlumno.edad==20){
        //alumnoViejo.push(unAlumno)
        existencia=true;
        console.log(existencia)
        break;
    }
}

//SOME (new)
console.log(alumnos.some(unAlumno=>unAlumno.edad==10))

//si todos los alumnos tiene edad=35
console.log(alumnos.some(unAlumno=>unAlumno.edad!=18))
let todos35=true
for(let unAlumno of alumnos){
    if(unAlumno.edad!=35){
        todos35=false;
        break;
    }
}
console.log(todos35)

console.log(alumnos.every(unAlumno=>unAlumno.edad==35))

let edades=0;
alumnos.forEach(unAlumno=>edades+=unAlumno.edad)
console.log(edades)

//reduce
console.log(alumnos.reduce((total,alumnoActual)=>total+alumnoActual.edad,0))
