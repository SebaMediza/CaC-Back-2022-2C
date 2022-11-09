package ar.com.codoacodo.idiomas;

public class MainPersona {

	public static void main(String[] args) {
		String idioma = "Ingles";
		String nombre = "Seba";
		Persona miPersona = new Persona(nombre, idioma);
		System.out.println(miPersona);
		
		miPersona.decir(idioma, idioma);

	}

}
