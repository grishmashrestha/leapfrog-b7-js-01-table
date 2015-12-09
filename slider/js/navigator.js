function Navigator(element) {
	this.el = element;

	this.generateNavigator = function(imageNumber) {
      
		var ul = document.createElement("ul");

		for (var i=0; i<imageNumber; i++){
			
			var li = document.createElement("li");
			var a=document.createElement("a");
			a.setAttribute("href","#");
			a.setAttribute("onclick","moveImage(\'"+i+"\')");
			li.appendChild(a);
			ul.appendChild(li);
		}

		this.el.appendChild(ul);

	}

	this.mark = function(active) {
		var ul = document.getElementsByTagName("ul")[0];
	
         
		for (var i = 0; i < ul.children.length; i++) {
			if(i==active-1)
			ul.children[i].children[0].style.backgroundColor = 'red';
		else{
			ul.children[i].children[0].style.backgroundColor = 'transparent';
		}
		}

	}
}

