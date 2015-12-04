function navi_bar(activeState){
	var ul = document.createElement('UL');
	ul.style.height = '200px';
	ul.style.display = 'inline-table';
	ul.style.marginLeft = 'auto';

	for (var i = 0; i < slides.length; i++) {
      var li = document.createElement('li');
	  li.style.float='left';
      li.style.width='50px';
      li.style.height='50px';
      if(i==0){
      li.style.backgroundColor ='yellow';	
      }
      else
      	li.style.backgroundColor ='red';
      
	  li.style.display= 'inline';
      li.style.marginLeft = '5px';
      li.style['border-radius'] ='10px';
      li.setAttribute('onclick','onclicking('+i+')');
      ul.appendChild(li);
      console.log('li has been appended');
  }

	var myid = document.getElementById('navDiv');
	myid.appendChild(ul);
    console.log('myid has been appended thank you');
}
  




function navichange(position,length){
    var navbar = document.getElementById("navDiv");
    var navul = navbar.children[0];
    var navli = navul.children;
    console.log('navichange funciton called with ', position);

    
 	
 	 for (var i = 0; i < length; i++) {
      if (i == (position)) {
        navli[position].style.backgroundColor = 'yellow';
      }
      else{
      	navli[i].style.backgroundColor = 'red';	
      }
     

      
  }

}  

