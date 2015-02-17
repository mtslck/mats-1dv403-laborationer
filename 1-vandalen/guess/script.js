"use strict";

window.onload = function(){
	var secret = Math.floor(Math.random() * 100 + 1);
	var previousGuesses = new Array();

	var guess = function(number){
		console.log("Det hemliga talet: " + secret);
		console.log("Du gissade: " + number);

		var result = [false];

		// Validera data.
		number = parseInt(number);
		if (isNaN(number) || number < 1 || number > 100) {
			result[1] = "Ett heltal i det slutna intervallet mellan 1 och 100 måste anges.";
		}
		else {
			// Gammal gissning?
			if (previousGuesses.indexOf(number) !== -1)	{
				result[1] = "Du har redan gissat på " + number + ".";
			}
			else {
				// Spara gissningen.
				previousGuesses.push(number);

				// Är gissningen lägre (antas), högre eller korrekt?
				result[1] = "Det hemliga talet är mindre!";
				if (number < secret) {
					result[1] = "Det hemliga talet är större!";
				}
				else if (number === secret) {
					result[0] = true;
					result[1] = "Grattis du vann! Det hemliga talet var " + secret +
					            " och du behövde " + previousGuesses.length + " gissningar för att hitta det.";
				}

				// Om sista gissningen är fel avsluta och visa det hemliga talet.
				if (previousGuesses.length === 7 && result[0] !== true) {
					result[0] = true;
					result[1] += " Du har inga gissningar kvar. Det hemliga talet var " + secret + ".";
				}
			}
		}

		return result;
	};
	
	// ------------------------------------------------------------------------------
	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	// ------------------------------------------------------------------------------

	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault();              // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];         // Skriver ut texten från arrayen som skapats i funktionen.

		if(answer[0] === true){          // Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	});
};