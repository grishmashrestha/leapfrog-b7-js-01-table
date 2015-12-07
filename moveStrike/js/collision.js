function Strike(){
	
	
	
	this.hittest=function(block,pulsar){
//		console.log(block.width);
//		console.log(pulsar.top);
//		alert('imside hittest')
		if(pulsar.left==block.left+100){
			clearInterval(gameId);
		}
		if(pulsar.left+20==block.left){
			clearInterval(gameId);
		}
	}
}