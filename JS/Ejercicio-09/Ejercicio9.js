"use strict";
class Tiempo{
    constructor(ciudad){
        this.apikey = "79501f96bc300d990a1bd20eded0ccd9";
        this.ciudad = ciudad;
        this.codigoPais = "ES";
		this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.correcto = "¡Todo correcto! XML recibido de <a href='http://openweathermap.org/'>OpenWeatherMap</a>"
    }

    verDatos(tipoElemento, texto){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $("section").append(elemento);
    }
	
	verXML(){
        $("ul").remove();
        $("section").empty();
        this.verDatos("h2","Datos en XML desde <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
        this.verDatos("h3",this.correcto); 
        this.verDatos("h4","XML"); 
        this.verDatos("h5",""); 
        this.verDatos("h4","Datos");
        this.verDatos("p",""); 
        this.cargarDatos();
    }

    cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(data){
				$("h5").text((new XMLSerializer()).serializeToString(data));
                    //xml
					var imagen = $('weather', data).attr("icon");
                    var nDatos = $('*',data).length;
                    var ciudad = $('city',data).attr("name");
                    var pais =  $('country',data).text()
					var longitud = $('coord',data).attr("longitud");
                    var latitud = $('coord',data).attr("latitud");
					var temperatura = $('temperature',data).attr("value");
                    var temperaturaMin = $('temperature',data).attr("min");
                    var temperaturaMax  = $('temperature',data).attr("max");
					var direccionViento = $('direction',data).attr("value");
					var presion = $('pressure',data).attr("value");
					var humedad = $('humidity',data).attr("value");
					var velocidadViento = $('speed',data).attr("value");
					var descripcion = $('weather',data).attr("value");
                    var minutosZonaHoraria = new Date().getTimezoneOffset();
					var amanecer = $('sun',data).attr("rise");
					var amanecerMiliSeg1970 = Date.parse(amanecer);
                        amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
				    var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
					var oscurecer = $('sun',data).attr("set");
					var oscurecerMiliSeg1970 = Date.parse(oscurecer);
                        oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                    var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
					var visibilidad = $('visibility',data).attr("value");
					var nubosidad = $('clouds',data).attr("value");
                    var horaMedida = $('lastupdate',data).attr("value");
					var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                        horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                    var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
					
                    var datos = '<li><img alt="Imagen del tiempo" src= "http://openweathermap.org/img/w/' + imagen + '.png"></li>';
                        datos +=  "<li>Num elementos XML: " + nDatos + "</li>"
						datos += "<li>Ciudad: "+ciudad+"</li>";
                        datos += "<li>País: " + pais + "</li>";
                        datos += "<li>Latitud: " + latitud + " grados</li>";
                        datos += "<li>Longitud: " + longitud + " grados</li>";
                        datos += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                        datos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                        datos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                        datos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                        datos += "<li>Presión: " + presion + " milibares</li>";
                        datos += "<li>Humedad: " + humedad + " %</li>";
                        datos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                        datos += "<li>Descripción: " + descripcion + "</li>";
                        datos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                        datos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                        datos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                        datos += "<li>Nubosidad: " + nubosidad + " %</li>";
                        datos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                        datos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";

                        $("body").append('<ul></ul>');
                        $("ul").html(datos);
                },
            error:function(){
                $("h3").html("Ha habido un problema, disculpe las molestias"); 
                },
            complete : function(xhr, status){
                $("h2").text("OpenWeatherMap");
            }
        });
    }
}

