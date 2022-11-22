"use strict"
class Calculadora {
	constructor() {
		this.consola = "";
		this.memoria = "0";
		document.addEventListener('keydown', function (event) {
			switch (event.key) {
				case "1": {
					this.numeros(1);
					break;
				}
				case "2": {
					this.numeros(2);
					break;
				}
				case "3": {
					this.numeros(3);
					break;
				}
				case "4": {
					this.numeros(4);
					break;
				}
				case "5": {
					this.numeros(5);
					break;
				}
				case "6": {
					this.numeros(6);
					break;
				}
				case "7": {
					this.numeros(7);
					break;
				}
				case "8": {
					this.numeros(8);
					break;
				}
				case "9": {
					this.numeros(9);
					break;
				}
				case "0": {
					this.numeros(0);
					break;
				}
				case "+": {
					this.botonSuma();
					break;
				}
				case "-": {
					this.botonResta();
					break;
				}
				case "/": {
					this.botonDivision();
					break;
				}
				case "*": {
					this.botonMultiplicar();
					break;
				}
				case "o": {
					this.borrarTodo();
					break;
				}
				case "c": {
					this.borrarTodo();
					break;
				}
				case "r": {
					this.raiz();
					break;
				}
				case "%": {
					this.porcentaje();
					break;
				}
				case ".": {
					this.botonDec();
					break;
				}
				case "m": {
					this.mMostrar();
					break;
				}
				case "M": {
					this.mMas();
					break;
				}
				case "n": {
					this.nResta();
					break;
				}
				case "?": {
					this.cambioSigno();
					break;
				}
				case "=": {
					this.calcular();
					break;
				}
			}
		}.bind(this));
	}

	numeros(num) {
		var a = new Number(num);
		this.consola+=a;
		this.pintar();
	}


	mMas() {
		this.memoria += "+" + document.querySelector('input[name="consola"]').value;
		this.resetear();
	}
	nResta() {
		this.memoria += "-" + document.querySelector('input[name="consola"]').value;
		this.resetear();
	}
	mMostrar() {
		document.querySelector('input[name="consola"]').value = eval(this.memoria);
		this.memoria = "";
	}

	botonDec() {
		this.consola += ".";
		this.pintar();
	}

	botonSuma() {
		this.consola += "+";
		this.pintar();
	}
	botonResta() {
		this.consola += "-";
		this.pintar();
	}
	botonMultiplicar() {
		this.consola += "*";
		this.pintar();
	}
	botonDivision() {
		this.consola += "/";
		this.pintar();
	}

	resetear(){
		this.consola = "";
		document.querySelector('input[name="consola"]').value = this.consola;
	}

	botonPorcentaje() {

		var D = this.consola.substring(0, 1);
		var operando = this.consola.substring(1, 2);
		var X = this.consola.substring(2, 3);
		var porcentaje = D * X / 100;
		this.borrarTodo();
		this.consola += D;
		this.consola += operando;
		this.consola += porcentaje;
		this.pintar();
	}

	raiz() {
		var aux = eval(this.consola);
		aux = Math.sqrt(10, aux);
		this.consola = aux;
		this.memoria = this.consola;
		this.pintar();
	}

	cambioSigno() {
		if ("+" == this.consola.substring(0, 1)) {
			this.consola = "-" + this.consola.substring(1, this.consola.length);
		} else if ("-" == this.consola.substring(0, 1)) {
			this.consola = "+" + this.consola.substring(1, this.consola.length);
		} else
			this.consola = "+" + this.consola.substring(0, this.consola.length);
		this.memoria = this.consola;
		this.pintar();
	}

	pintar() {
		document.querySelector('input[name="consola"]').value = this.consola;
	}

	borrarTodo() {
		this.consola = "";
		this.pintar();
	}

	calcular() {
		try {
			document.querySelector('input[name="consola"]').value = eval(this.consola);
			this.consola = document.querySelector('input[name="consola"]').value;
		}
		catch (err) {
			document.querySelector('input[name="consola"]').value = "Syntax Error";
			this.consola = "";
		}
	}
}
var calculadora = new Calculadora();  