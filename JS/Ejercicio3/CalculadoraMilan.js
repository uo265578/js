"use strict"
class Calculadora {
	constructor () {
		this.consola="";
		this.memoria="0";
	}

	numeros(num) {
		var a = new Number(num);
		this.consola+=a;
		this.pintar();
	}
	  
    	
	mMas(){
		this.memoria+="+" + document.getElementById('consola').value;
		this.resetear();
	}
	botonMemResta(){
		this.memoria+="-" + document.getElementById('consola').value;
		this.resetear();
	}
	mMostrar(){
		document.getElementById('consola').value = eval(this.memoria);
		this.memoria="";
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

	raiz(){
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
	
	pintar(){
        document.getElementById("consola").value = this.consola;
    }
	
	borrarTodo(){
		this.consola="";
		this.pintar();
	}
	
	calcular(){
		try { 
			document.getElementById("consola").value = eval(this.consola);
			this.consola = document.getElementById("consola").value;
        }
        catch(err) {
            document.getElementById("consola").value = "Syntax Error";
			this.consola="";
        }  
	}
}
var calculadora = new Calculadora();  