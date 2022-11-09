package ar.com.codoacodo.idiomas;

public class Persona {
	private String nombre;
	private String idioma;

	public Persona(String nombre, String idioma) {
		this.nombre = nombre;
		this.idioma = idioma;
	}

	public void decir(String palabra, String idioma) {

		if (idioma.equalsIgnoreCase(idioma)) {
			System.out.println(this.nombre + " dice: " + palabra);
		} else {
			System.out.println(this.nombre + " no habla ese idioma");
		}

	}
}