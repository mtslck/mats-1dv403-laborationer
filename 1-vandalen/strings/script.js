"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Ersätt alla a och A med #.
		var result = str.replace(/a/gi, "#");

		// Konvertera strängen till array med tecken och växla
		// mellan gemener och versaler, och tvärtom, om det
		// är en bokstav.
		result = result.split("");
		for (var i = result.length - 1; i >= 0; i = i - 1)
		{
			if (result[i] === result[i].toLocaleUpperCase()){
				result[i] = result[i].toLocaleLowerCase();
			}
			else if (result[i] === result[i].toLocaleLowerCase()){
				result[i] = result[i].toLocaleUpperCase();
			}
		}

		// Konvertera arrayen med tecken till en sträng.
		return result.join("");
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};