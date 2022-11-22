"use strict"
class CalculadoraBasica {
	constructor () {
		this.consola="";
		this.memoria="0";
		
	}
	  
    numeros(num) {
		var a = new Number(num);
		this.consola+=a;
		this.pintar();
	}
	
	mSuma(){
		this.memoria+="+" + document.querySelector('input[name="consola"]').value;
		this.resetear();
	}
	botonMemResta(){
		this.memoria+="-" + document.querySelector('input[name="consola"]').value;
		this.resetear();
	}
	mMostrar(){
		document.querySelector('input[name="consola"]').value = eval(this.memoria);
		this.memoria="";
	}

	resetear(){
		this.consola = "";
		document.querySelector('input[name="consola"]').value = this.consola;
	}
	
	botonDec(){
        this.consola+=".";
        this.pintar();
    }
	
	botonSuma(){
		this.consola+="+";
		this.pintar();
	}
	botonResta(){
		this.consola+="-";
		this.pintar();
	}
	botonMultiplicar(){
		this.consola+="*";
		this.pintar();
	}
	botonDivision(){
		this.consola+="/";
		this.pintar();
	}

	
	pintar(){
		document.querySelector('input[name="consola"]').value = this.consola;
        //document.getElementById("consola").value = this.consola;
    }
	
	
	borrarTodo(){
		this.consola="";
		this.pintar();
	}
	
	agregarDisplay(digito) {
		if ("0" == this.consola) {
            this.consola = digito;
        }
        else {
            this.consola += digito;
        }
        this.pintar();
    }
	
	limpiarDisplay() {
        this.consola = "0";
        this.pintar();
    }

    limpiarResultado() {
        this.limpiarDisplay();
        this.memoria = "";
    }

    limpiarTodo() {
        this.limpiarResultado();
        this.memoria = "";
    }
	
	calcular(){
		try { 
			document.querySelector('input[name="consola"]').value = eval(this.consola);
			this.consola = document.getElementById("consola").value;
        }
        catch(err) {
            document.querySelector('input[name="consola"]').value = "Syntax Error";
			this.consola="";
        }  
	}

}	
	class CalculadoraCientifica extends CalculadoraBasica {
		
		constructor() {
			super();
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
					case "C": {
						this.borrarTodo();
						break;
					}
					case "r": {
						this.calculoMath('raiz');
						break;
					}
					case "%": {
						this.agregarDisplay('%');
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
					case "^": {
						this.calculoMath('2');
						break;
					}
					case "y": {
						this.calculoMath('y');
						break;
					}
					case "s": {
						this.calculoMath('sin');
						break;
					}
					case "c": {
						this.calculoMath('cos');
						break;
					}
					case "t": {
						this.this.calculoMath('tan');
						break;
					}
					case "x": {
						this.calculoMath('x');
						break;
					}
					case ")": {
						this.agregarDisplay(')');
						break;
					}
					case "(": {
						this.agregarDisplay('(');
						break;
					}
					case "t": {
						this.this.calculoMath('tan');
						break;
					}

					case "<": {
						this.limpiarDisplay();
						break;
					}
					case "!": {
						this.factorial();
						break;
					}
					case "e": {
						this.calculoMath('e');
						break;
					}
					case "t": {
						this.this.calculoMath('tan');
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
	
		limpiarDisplayParte() {
			this.consola = this.consola.substring(0, this.consola.length - 1);
			this.pintar();
		}
	
		factorial() {
			var x = eval(this.consola);
			x = parseInt(x, 10);
			if (isNaN(x)) return 1;

			if (x <= 0) return 1;
			if (x > 170) return Infinity;
			var y = 1;
			for (var i = x; i > 0; i--) {
				y *= i;
			}
			this.consola = y;
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
		
		calculoMath(operador) {
        var aux = eval(this.consola);
        switch (operador) {
            case "e":
                aux = Math.exp(aux);
                break;
            case "log":
                aux = Math.log(aux);
                break;
            case "x":
                aux = Math.pow(10, aux);
                break;
            case "y":
                aux = Math.pow(aux, this.memoria);
                break;
            case "raiz":
                aux = Math.sqrt(10, aux);
                break;
            case "sin":
                aux = Math.sin(10, aux);
                break;
            case "cos":
                aux = Math.cos(10, aux);
                break;
            case "tan":
                aux = Math.tan(10, aux);
                break;
            case "2":
                aux = Math.pow(aux, 2);
                break;
        }
        this.consola = aux;
        this.memoria = this.consola;
        this.pintar();
    }
	
	
}
var calculadora = new CalculadoraCientifica();