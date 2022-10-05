const personas = [ 
{
    dni: 1234578,
    nombre: 'Juan',
    direcciones: [
      {
        calle: 'Av. Siempre Viva', 
        localidad: {
          cp: 1236,
          nombre: 'Caba'
        }
       },
      {
        calle: 'Calle 14',
        localidad: {
          cp: 1237,
          nombre: 'Amba'
         }
       }
    ]
    },
    {
    dni: 1234578,
    nombre: 'Seba',
    direcciones: [
      {
        calle: 'Av. Siempre Viva', 
        localidad: {
          cp: 6666,
          nombre: 'Caba'
        }
       },
      {
        calle: 'Calle 14',
        localidad: {
          cp: 7777,
          nombre: 'Amba'
         }
       }
    ]
    }
]
// convertir a JSON como str
function repasoArray(){
console.log(personas);

const str = JSON.stringify(personas);
console.log(str);

//ahora "parseo" str a un objeto

const otraPersona = JSON.parse(str);
console.log(otraPersona);

//persona con el cp 1267
let existe=false;
for(let i=0;i<personas.length && !existe;i++){
    existe = personas[i].direcciones.some(dir=>dir.localidad.cp===7777);
}
console.log(existe)

let existe2=false;
existe2 = personas.every(per => per.direcciones.some(dir => dir.localidad.cp !== 1237));
console.log(existe2)

let existe3=false;

const dirs=personas.map(p=>p.direcciones);
const dirsFlat=dirs.flat();

console.log(existe3=dirsFlat.some(p=>p.localidad.cp===7777))

let test=false;
console.log(test=personas.some(p=>p.direcciones.some(p=>p.localidad.cp===7777)));

let cosa=personas.map(p=>p);
console.log(cosa)
}

function crearDivPersonas(personas){
    const divPersonas = document.getElementById('contenidoExterno');
    personas.forEach(persona => {
        divPersonas.innerHTML += crearCard(persona);
    });
}

crearDivPersonas(personas);

function crearCard (unaPersona){
    const html=`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${unaPersona.nombre}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${crearDireciones(unaPersona.direcciones)}</h6>
      <p class="card-text">${unaPersona.dni}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`
  return html;
}

function crearDireciones(direccion){
    let dirs='<ul>'
    const dires=direccion.forEach(
        p=> dirs += '<li>' + p.calle +','+ p.localidad.cp + '</li>'
    )
    return dirs + dires + '</ul>'
}