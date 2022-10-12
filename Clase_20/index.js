function buscar(texto){
    //alert('buscando' + ' ' + texto)
    const usuariosFiltrados = json.data.filter(u=>u.first_name.include(texto) || u.last_name.includes(texto))
    
    user(usuariosFiltrados);
    
}
function render(){
    //invoco la funcion nevbar.js
    //const html = 
    const parametros = {
        contenedor: 'navbar',
        tiutlo: 'mi titulo',
        fnTest: buscar
    };
    navbar(parametros);
    //console.log(json)
    

    const final = user(json.data);
    document.getElementById('users').innerHTML = final
}

render();