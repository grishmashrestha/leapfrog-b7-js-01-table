var mainDiv = document.getElementsByClassName('mainWrapper')[0];
	var child = mainDiv.children;
	var animator = new Animator(mainDiv);
	var randomx = new Array();
	var randomy = new Array();
	var movex = new Array();
	var movey = new Array();

	for (var i=0;i<=3;i++){
		randomx[i] = animator.randomGenerator(0,930);
		randomy[i] = animator.randomGenerator(0,430);
		movex[i] = animator.randomGenerator(6,12);
		movey[i] = animator.randomGenerator(6,12);
	}
	function moveY(){
	var distance;
	for(var i = 0;i<=2;i++){
		for(var j =1;j <=3;j++){
			if((i==1 && j==1) || i==2 && j<=2){
				continue;
			}
			else{
				distance = animator.calculateDistance(randomx[i],randomx[j],randomy[i],randomy[j]);
				if(distance<55){
				console.log("Collision",i,j);
				movex[i] = -(animator.randomGenerator(4,8));
				movey[i] = -(animator.randomGenerator(4,8));
	 			movex[j] = (animator.randomGenerator(4,8));
	 			movey[j] = (animator.randomGenerator(4,8));
			}
			}
		}
	}
		for(var i=0;i<=3;i++)
	{
		animator.animateBatch({left: randomx[i],top: randomy[i]},i)
		//animator.animate("left",randomx[i],i);
		//animator.animate("top",randomy[i],i);
	//child[i].style.left = randomx[i] + 'px';
	//child[i].style.top = randomy[i] + 'px';
	if(randomx[i]>=(944)){
		movex[i]=-(animator.randomGenerator(2,8));
	}
	if(randomx[i]<=0){
		movex[i]=(animator.randomGenerator(2,8));
	}
	if(randomy[i]>=(444)){
		movey[i]=-(animator.randomGenerator(2,8));
	}
	if(randomy[i]<=0){
		movey[i]=(animator.randomGenerator(2,8));	
	}
		randomx[i] += movex[i];
		randomy[i] += movey[i];
	}

}
setInterval(moveY,10);