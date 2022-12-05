class Contador {

    cargarArchivo(fichero) {
        var mp4 = document.createElement("section")
        document.body.appendChild(mp4)
        var archivo = fichero[0];
        archivo.type.match('video.*');
        document.querySelector("body > section").innerHTML += '<video controls><source src="' + archivo.name + '"></video>';
    };

    activarContador() {
        var video = document.querySelector("body > section > video"), contador, contador = video.addTextTrack("captions", "Spanish", "es");
        contador.mode = "showing";
        contador.addCue(new VTTCue(8, 8.5, "Uno (1)"));
        contador.addCue(new VTTCue(9, 10, "Dos (2)"));
        contador.addCue(new VTTCue(13, 14, "Tres (3)"));
        contador.addCue(new VTTCue(14.5, 15.5, "Cuatro (4)"));
        contador.addCue(new VTTCue(16, 17, "Cinco (5)"));
        contador.addCue(new VTTCue(18.5, 19, "Seis (6)"));
        contador.addCue(new VTTCue(19.5, 20, "Siete (7)"));
        contador.addCue(new VTTCue(20, 21, "Ojo al gorila!"));
        contador.addCue(new VTTCue(21.5, 22.5, "Ocho (8)"));
        contador.addCue(new VTTCue(23, 23.5, "Nueve (9)"));
        contador.addCue(new VTTCue(24, 25, "Diez (10)"));
        contador.addCue(new VTTCue(25.5, 26.5, "Once (11)"));
        contador.addCue(new VTTCue(27, 28, "Doce (12)"));
        contador.addCue(new VTTCue(28.5, 29.5, "Trece (13)"));
        contador.addCue(new VTTCue(30, 31, "Catorce (14)"));
    }

    pantallaCompleta() {
        var video = document.querySelector("body > section > video");
        if (!document.mozFullScreen && !document.webkitFullScreen) {
            if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else {
                video.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else {
                document.webkitCancelFullScreen();
            }
        }
    }

    
}
var cont = new Contador();