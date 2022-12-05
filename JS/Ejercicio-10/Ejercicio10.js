"use strict";
class Oro {
    oroPrecio() {
        var currConvAPI = "https://commodities-api.com/api/latest?access_key=0fu375wuchvbrq4enhg0t8c4o6y7527rbht8fzlwlght0gta75dfizeohlst&base=EUR&symbols=XAU";
        $.getJSON(currConvAPI, {
            tagmode: "any",
            format: "json"
        })
            .done(function (data) {
                $("table").remove();
                $("body").append("<table>   <tr><th>Moneda</th>         <th>Fecha</th>             <th>Precio</th>   </tr></table>");
                $.each(data, function (i, item) {
                    $("table").append("<tr>     <td>" + item.base + "</td>  <td>" + item.date + "</td>  <td>" + item.rates.XAU + "</td></tr>");
                });
            });
    }

    conversorOro() {
        var currConvAPI = "https://commodities-api.com/api/latest?access_key=0fu375wuchvbrq4enhg0t8c4o6y7527rbht8fzlwlght0gta75dfizeohlst&base=USD&symbols=XAU";
        $.getJSON(currConvAPI, {
            tagmode: "any",
            format: "json"
        })
            .done(function(data) {
                $("table").remove();
                $("body").append("<table>   <tr><th>Cantidad €</th>         <th>Total oro</th>    </tr></table>");
                $.each(data, function (i, item) {
                    var xau = item.rates.XAU;
                    var precio = document.querySelector('input[name="precio"]').value;
                    var cantidad = precio/xau;
                    $("table").append("<tr>     <td>" + precio + "</td>  <td>" + cantidad + "</td>  </tr>");
                });
                
            })
    }
}

var convert = new Oro();