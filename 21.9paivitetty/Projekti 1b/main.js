asd = -1;
function ch(){
    var formi = document.getElementById("kyselylomake");
    var koknimi = formi.kokonimi.value;
    var sposti = formi.sposti.value;
    var min = formi.ika.min;
    var max = formi.ika.max;
    var ika = formi.ika.value;
    var radiovastaus = document.getElementsByName("suositus");
    var check = document.getElementsByName("parasta");
    if (koknimi.length < 3){
        alert("Kirjoita kelvollinen nimi.");
        formi.kokonimi.focus();
        return false;
    }
    if(emailIsValid(sposti)){
    }
    else{
        alert("Anna oikea sähköpostiosoitteesi");
        formi.sposti.focus();
        return (false);
    }
    if(ika < min || ika > max){
        alert("Pistä sopiva ikä")
        formi.ika.focus()
        return false;
    }
    if(radiocheck(radiovastaus) == false){
        
    }else{
        alert("Et valinnut suositusta");
        return false;
    }
    if(boxcheck(check) == false){

    }else{
        alert("Et valinnut parasta keudassa(Voit valita monta)");
        return false;
    }
    return false;
}
function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function boxcheck(oof){
    for (var i = 0; i < oof.length; i++){
        console.log(i)
        if(oof[i].checked == true){
            asd = i;
            return false;
        }
        if(asd==-1){
            return true
        }
    }
}
function radiocheck(rad){
    if (rad[0].checked == true){
        return false;
    }
    if (rad[1].checked == true){
        return false;
    }
    if(rad[2].checked == true){
        return false;
    }
    if (!(rad[0].checked && rad[1].checked && rad[2].checked)){
        return true;
    }
}