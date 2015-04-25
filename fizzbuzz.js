function fizzBuzz () { 
	for (var i = 1; i < 101; i++) { 
		if (i%3==0 && i%5==0) { 
			$("#output").append("FizzBuzz");
		}
		else if (i%3==0) { 
			$("#output").append("Fizz");
		}
		else if (i%5==0) { 
			$("#output").append("Buzz");
		}
		else { 
			$("#output").append(i);
		}
	}
}

$(document).on("ready", function() { 
	$("#print").on("click", fizzBuzz);
});