function Car() {
	this.element = document.createElement("div");

	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", className);
	}

	this.addId = function(idName) {
		this.element.setAttribute("id", idName);
	}

	this.removeClass = function(className) {
		
	}

	
}