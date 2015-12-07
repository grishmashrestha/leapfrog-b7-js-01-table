            var start;
            var end;


           function  mousedown(){
            start = + new Date();
            }

            function mouseup(event){
                end = + new Date();
                var velocityValue = (end-start)/100; //difference subjected to velocity
                var x = event.clientX;
                var y = event.clientY;
                var coords = "X coords: " + x + ", Y coords: " + y;
                slopesValue = (450-y)/(x-50);
                boxArrays[numBox].slope = slopesValue;
                boxArrays[numBox].velocity = velocityValue;
            }
		