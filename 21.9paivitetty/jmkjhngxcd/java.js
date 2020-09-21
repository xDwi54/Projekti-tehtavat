function kissa() {
    var nimi = document.getElementById('nimi').value;
    var ika = document.getElementById('ika').value;
    var radios = document.getElementsByName('joku2');
    var formValid = false;
    var chekki1 = document.getElementById('joiku').checked;
    var chekki2 = document.getElementById('joiku1').checked;
    var chekki3 = document.getElementById('joiku2').checked;
    
   



    if (nimi == "") {
      document.getElementById('syota').innerHTML = "Syötä nimesi";
    }
    else {
        document.getElementById('syota').innerHTML = "";
    }
    if (ika == "") {
        document.getElementById('syota2').innerHTML = "Syötä ikäsi";
    }
    else {
        document.getElementById('syota2').innerHTML = "";
    }
 

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid){
        document.getElementById('syota3').innerHTML = "Valitse vaihtoehto!";
    }
    else {
        document.getElementById('syota3').innerHTML = "";
    }
   if(chekki1)
   {
    document.getElementById('syota4').innerHTML = 'Ensimmäinen valittu!'
   }
   else if(chekki2) {
    document.getElementById('syota4').innerHTML = 'Toinen valittu!'
   }
   else if(chekki3) {
    document.getElementById('syota4').innerHTML = 'Kolmas valittu!'
   }
   else
   {
      document.getElementById('syota4').innerHTML = 'Et valinnut!'
   }


    }
    
