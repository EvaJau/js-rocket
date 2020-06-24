var timer = null;
var countdownNumber = 10;


var changeState = function(state) {
	document.body.className = "body-state"+state;
	clearInterval(timer);
	document.getElementById("countdown").innerHTML = countdownNumber;

	// count down
	if (state == 2) {
		countdownNumber = 10;

		timer = setInterval(function () {
			document.getElementById("countdown").innerHTML = countdownNumber;
			countdownNumber = countdownNumber - 1 ;


			if (countdownNumber > 4 && countdownNumber <= 7) {
				// woo
				document.getElementById("wo1").className = "woo show"
			} else {document.getElementById("wo1").className = "woo"};

			if (countdownNumber > 1 && countdownNumber <= 4) { // woooo
			document.getElementById("wo2").className = "woooo show" } else
			{document.getElementById("wo2").className = "woooo"};


			if (countdownNumber <= 0) {
				changeState(3)
			};
		}, 500);
	} 

	else if (state == 3) {
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random()*10);

			console.log("random number " + randomNumber)
			// success
			if (randomNumber > 3) {
				changeState(4)
			}
			// fail
			else {
				changeState(5)

			}
		}, 2000)

	}
}
