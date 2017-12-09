		let letterGuessed =[];
		let wins = 0;
		let loses = 0;
		let guessesLeft = 10;
		let alphabetArr = ["a", "b", "c", "d", "e", "f", 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		let randomLetter = alphabetArr[Math.floor(Math.random()*alphabetArr.length)];
		let correctLetter = randomLetter;
		let reset = document.getElementById('guessesLeft');
		let letterGuessedArr = letterGuessed.length[0];

		
		window.addEventListener('keyup', function(event){
			let userGuess = event.key;
			console.log(userGuess);
			letterGuessed.push(userGuess);
			console.log(letterGuessed);

			document.getElementById('guessesSoFar').innerHTML = "[" + letterGuessed + "]";

			if (userGuess == correctLetter){

				wins++;
				document.getElementById('wins').innerHTML = wins;
				document.getElementById('guessesLeft').innerHTML = guessesLeft;
				guessesLeft = 10;
				correctLetter = alphabetArr[Math.floor(Math.random()*alphabetArr.length)];

			} else if (userGuess !== correctLetter){
				
				guessesLeft--;
				document.getElementById('guessesLeft').innerHTML = guessesLeft;

			}

			if (guessesLeft <=0){
				document.getElementById('guessesLeft').innerHTML= guessesLeft;
				guessesLeft = 10;
				loses++;
				document.getElementById('loses').innerHTML = loses;
				document.getElementById('guessesSoFar').innerHTML = "[" + letterGuessed.splice(0) + "]";
				// call a function that picks new letter, resets guessesLeft to 10. 
			}
			return guessesLeft;
		})

		

		
