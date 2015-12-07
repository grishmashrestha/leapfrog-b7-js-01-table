			function frameFunction() {
    		var x = document.getElementById("myForm").elements[0].value;
    		console.log('the value of slope is ');
    		var slopeValue = (Math.tan((Math.PI*x)/180));
    		var velocityValue = document.getElementById("myForm").elements[1].value;
    		velocityValue /=50;
    		boxArrays[numBox].slope = slopeValue;
    		boxArrays[numBox].velocity = velocityValue;
    		}

		