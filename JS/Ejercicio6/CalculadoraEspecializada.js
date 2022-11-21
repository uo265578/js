"use strict"
class Stack {
	constructor(){
        this.pila=[];

    }

    push(element){
        this.pila.push(element);
        return this.pila;
    }

    pop(){
       return this.pila.pop();
    }

    peek(){
        return this.pila[this.pila.length-1];
    }

    get(n){
        return this.pila[n];
    }

    size(){
        return this.pila.length;
    }

    clear(){
        this.pila=[];
    }

    isEmpty() 
    { 
        return this.pila.length==0;
    } 

}

class CalculadoraCientifica extends CalculadoraRPN {
	calculoTotal() {
        var calculo = 0.0;
        for(var element of this.pila.pila) {
            calculo += parseFloat(element);
        }
        this.pila.push(calculo);
        this.mostrarPila();
    }

    calculoPrecio() {
        if(this.pila.size() >=1) {
            var result = parseFloat(this.pila.pop());
            var precio = result * 0.29666;
            this.pila.push(precio + "€");
            this.mostrarPila();
        }
        
    }
}
var calculadora = new CalculadoraCientifica();  