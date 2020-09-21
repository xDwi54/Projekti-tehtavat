    var i = 0;
    var numero = 0;
    function arpoa() {
        document.getElementById('arvottu').innerHTML = "Numero on arvottu";
        numero = Math.floor(Math.random() * 10);
        console.log(numero);    
    }
    function peli() {
        document.getElementById('arvottu').innerHTML = "";
        const syot = parseInt(document.getElementById('inpt').value);
        if (syot < numero) {
            document.getElementById('numon').innerHTML =  "Numero on: suurempi";
            document.getElementById('gz').innerHTML =  "";
        }
        else if (syot > numero) {
        document.getElementById('numon').innerHTML =  "Numero on: pienempi";
        document.getElementById('gz').innerHTML =  "";
        }
        else if (syot == numero) {
            document.getElementById('numon').innerHTML =  "Numero on oikein!";
            document.getElementById('gz').innerHTML =  "Onneksi olkoon voitit";
            i++;
            document.getElementById('pist').innerHTML = i;
        }
        else {
            
        }
    }