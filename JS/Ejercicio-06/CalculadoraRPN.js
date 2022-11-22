"use strict"
class CalculadoraRPN {
	constructor() {
		this.pila = new Stack();
		this.consola = "";
		document.addEventListener('keydown', function(event) {
            switch (event.key){
                case "1":{
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
					this.numeros(2);
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
					this.botonSum();
                    break;
				}
				case "-": {
					this.botonDec();
                    break;
				}
				case "/": {
					this.botonDiv();
                    break;
				}
				case "*": {
					this.botonMul();
                    break;
				}
				case "Enter": {
					this.botonApilarDato();
                    break;
				}
			}
		}.bind(this));
	}

	numeros(num) {
		var a = new Number(num);
		this.consola+=a;
		this.mostrarConsola();
	}
	botonDec(){
        this.consola+=".";
        this.mostrarConsola();
    }
	botonPI(){
		this.consola+=Math.PI;
		this.mostrarConsola();
	}
	
	//OPERACIONES
	botonSum(){
		var suma = parseFloat(this.pila.pop());
		suma += parseFloat(this.pila.pop());
		this.pila.push(suma);
		this.mostrarPila();
	}
	botonSub(){
		var sustraendo = parseFloat(this.pila.pop());
		var res = parseFloat(this.pila.pop()) - sustraendo;
		this.pila.push(res);
		this.mostrarPila();
	}
	botonMul(){
		var mul = parseFloat(this.pila.pop());
		mul *= parseFloat(this.pila.pop());
		this.pila.push(mul);
		this.mostrarPila();
	}
	botonDiv(){
		var divisor = parseFloat(this.pila.pop());
		var div = parseFloat(this.pila.pop()) / divisor;
		this.pila.push(div);
		this.mostrarPila();
	}
	botonTrigonometrica(func){
		var digito = this.pop();
		if(func == 1)
			digito = Math.sin(digito);
		else if(func == 2)
			digito = Math.cos(digito);
		else if(func ==3)
			digito = Math.tan(digito);
		else if(func == 4) 
			digito = Math.asin(digito)
		else if(func == 5) 
			digito = Math.acos(digito)
		else 
			digito = Math.atan(digito)
		this.pila.push(digito);
		this.mostrarPila();
	}
	botonLog(){
		var digito = this.pop();
		digito = Math.log(digito);
		this.pila.push(digito);
		this.mostrarPila();	
	}
	
	botonApilarDato(){
		this.pila.push(this.consola);
		this.mostrarPila();
		this.consola = "";
		document.getElementById('consola').value = this.consola;
	}
	botonDesapilarDato(){
		this.pila.pop();
		this.mostrarPila();
	}
	resetear(){
		this.consola = "";
		document.getElementById('consola').value = this.consola;
	}
	resetearfull(){
		this.vaciarPila();
		this.consola = "";
		document.getElementById('consola').value = this.consola;
		document.getElementById('pila').value = this.consola;
	}
	mostrarConsola(){
		document.getElementById('consola').value = this.consola;
	}
	
	//PILA

	mostrarPila(){
		var res = " ";
		for(var i in this.pila)
		   res += " " + this.pila[i];
		document.getElementById('pila').value = res;
	}
	vaciarPila(){
		for(var i in this.pila)
			this.pila.pop();
		this.pila.pop();
	}
}
var calculadora = new CalculadoraRPN();