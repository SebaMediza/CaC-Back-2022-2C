package ar.com.codoacodo.buscador;

public class MainBuscador {

	public static void main(String[] args) {
		Buscador miBuscador = new Buscador();
		miBuscador.setClaveBusqueda("Iron Man");
		miBuscador.buscar();
		Articulo[] res = miBuscador.getResultados();
		
		for (Articulo unArticulo : res) {
			unArticulo.detalle();
		}
	}
}