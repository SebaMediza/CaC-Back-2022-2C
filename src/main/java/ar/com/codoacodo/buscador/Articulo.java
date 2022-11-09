package ar.com.codoacodo.buscador;

public class Articulo {
//Atributos
	private String img;
	private String titulo;
	private String autor;
	private double precio;
	
//Constructor
	public Articulo(String img,String titulo,String autor,double precio) {
	this.img=img;
	this.titulo=titulo;
	this.autor=autor;
	this.precio=precio;
	}
//Metodos
	void detalle() {
		System.out.printf("Img: ",img);
		System.out.printf("Titulo: ", titulo);
		System.out.printf("Autor: ",autor);
		System.out.printf("Precio: ", precio, "$");
	}
}
