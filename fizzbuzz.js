function fizzBuzz () { 
	for (var i = 1; i < 101; i++) { 
		if (i%15==0) { 
			$("#output").append("FizzBuzz <br>");
		}
		else if (i%3==0) { 
			$("#output").append("Fizz <br>");
		}
		else if (i%5==0) { 
			$("#output").append("Buzz <br>");
		}
		else { 
			$("#output").append(i + "<br>");
		}
	}
}

function clear () { 
	$("#output").empty();
}

$(document).on("ready", function() { 
	$("#print").on("click", fizzBuzz);
	$("#clear").on("click", clear);
});
