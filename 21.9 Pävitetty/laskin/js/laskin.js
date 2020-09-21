		function nayt(val) { 
			document.getElementById("tulos").value+=val 
		} 
		function laske() { 
			let x = document.getElementById("tulos").value 
			let y = eval(x) 
			document.getElementById("tulos").value = y 
		} 
		function c() { document.getElementById("tulos").value = "" } 