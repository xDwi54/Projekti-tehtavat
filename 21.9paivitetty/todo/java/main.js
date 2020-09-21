function AddLi(str) {
    var x = document.getElementById('inputti').value;
    if (x == "") {
       document.getElementById('syota').innerHTML = "Syötä tehtävä!";
    }
    else {
        document.getElementById('syota').innerHTML = "";
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(str))
        li.innerHTML += ' <button onclick="this.parentNode.remove()">X</button>';
        document.getElementById("out").appendChild(li);
        li.addEventListener("click", ()=> {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("myBtn").click();
               }
            li.classList.toggle("toggled")
        });
    }
}

