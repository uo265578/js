class Tiempo{
    constructor(ciudad){
        this.apikey = "79501f96bc300d990a1bd20eded0ccd9";
        this.ciudad = ciudad;
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
    }

    verDatos(tipoElemento, texto){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $("section").append(elemento);
    }

    verDatos(){
        $("ul").remove();
        $("section").empty();
        this.verDatos("h2", "Datos en JSON desde <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
        this.verDatos("h3", "Todo correcto");
        this.verDatos("h4", "Datos:");
        this.cargarDatos();
    }

    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(data){
                    var datos =  '<li><img alt="Imagen del tiempo" src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"></li>';
                        datos += "<li>Ciudad: "+data.name+"</li>";
                        datos += "<li>País: " + data.sys.country + "</li>";
                        datos += "<li>Latitud: " + data.coord.lat + " grados</li>";
                        datos += "<li>Longitud: " + data.coord.lon + " grados</li>";
                        datos += "<li>Temperatura: " + data.main.temp + " grados Celsius</li>";
                        datos += "<li>Temperatura máxima: " + data.main.temp_max + " grados Celsius</li>";
                        datos += "<li>Temperatura mínima: " + data.main.temp_min + " grados Celsius</li>";
                        datos += "<li>Dirección del viento: " + data.wind.deg + " grados</li>";
                        datos += "<li>Presión: " + data.main.pressure + " milibares</li>";
                        datos += "<li>Humedad: " + data.main.humidity + " %</li>";
                        datos += "<li>Velocidad del viento: " + data.wind.speed + " metros/segundo</li>";
                        datos += "<li>Descripción: " + data.weather[0].description + "</li>";
                        datos += "<li>Amanece a las: " + new Date(data.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        datos += "<li>Oscurece a las: " + new Date(data.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        datos += "<li>Visibilidad: " + data.visibility + " metros</li>";
                        datos += "<li>Nubosidad: " + data.clouds.all + " %</li></ul>";
                        datos += "<li>Hora de la medida: " + new Date(data.dt *1000).toLocaleTimeString() + "</li>";
                        datos += "<li>Fecha de la medida: " + new Date(data.dt *1000).toLocaleDateString() + "</li>";
                    
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
