class Procesar {

    tamañoArchivos() {
        var byte = 0,
            archivos = document.getElementById("subirArchivos").files,
            numArchivos = archivos.length;
        for (var i = 0; i < numArchivos; i++) {
            byte += archivos[i].size;
        }
        var nombres = "";
        for (var i = 0; i < numArchivos; i++) {
            nombres += "Archivo[" + i + "] = " + archivos[i].name + archivos[i].size + archivos[i].type;
        }

        document.querySelector("body > section > p:nth-child(4)").innerHTML += numArchivos;
        document.querySelector("body > section > p:nth-child(5)").innerHTML += byte 
        document.querySelector("body > section > p:nth-child(6)").innerHTML += nombres;
    }



    procesarArchivos(files) {
        var archivo = files[0];
        document.querySelector("body > section > p:nth-child(9)").innerText += archivo.name;
        document.querySelector("body > section > p:nth-child(10)").innerText += archivo.size;
        document.querySelector("body > section > p:nth-child(11)").innerText += archivo.type;
        var procesar = new FileReader();
        procesar.onload = function () {
            document.querySelector("body > section > pre").innerText += procesar.result;
        }
        procesar.readAsText(archivo);
    };
}

var procesador = new Procesar();