		var car = {
			make: "VW",
			type: "Polo",
			color: "blue",
			isTurnedOn: false,
			numberOFWheels: 4,
			seats: ["seat 1", "seat 2", "seat 3", "seat 4"],
			turnOn: function () {
				this.isTurnedOn = true;
			},
			turnOff: function () {
				this.isTurnedOn = false;
			},
			fly: function () {
				alert("fly");
			},
			switchCar: function (isOn) {
				console.log("turn car " + isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				} 
				else {
					this.isTurnedOn = false;
				}
			}
		};

		var doCoolStuff = function() {
			document.getElementById("cool").className = "cool red";
		}
		

		console.log("hello friends");