package ar.com.codoacodo.buscador;

public class Buscador {
//Atributos
	String claveBusqueda;
	int cantidad;
	Articulo[] resultados;
//Metodos
	void buscar() {
		Articulo res1 = new Articulo();
		Articulo res2 = new Articulo();
		resultados = new Articulo[2];
		resultados[0] = res1;
		resultados[1] = res2;
		cantidad = resultados.length;
		
	}
	void setClaveBusqueda(String clave) {
		claveBusqueda = clave;
	}
	Articulo[] getResultados() {
		return resultados;		
	}
	int getTotal() {
		return cantidad;
	}
}
