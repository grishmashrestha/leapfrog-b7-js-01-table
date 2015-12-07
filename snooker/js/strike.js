function Strike(){
	
	this.hitTest=function(box){
		for (var j = box.length - 1; j >= 0; j--) {      
      for (var i= 0;  i<= box.length-1; i++) {
        if(i!=j){
					if(box[i].left <(box[j].left + box[j].width)&&(box[i].left + box[i].width) > box[j].left&&box[i].top<(box[j].top + box[j].height)&&(box[i].height + box[i].top)>box[j].top) {		
						box[j].dx=-2;
						box[j].dy=1;
						box[i].dx=-box[i].dx;
						box[i].dy=-box[i].dy;
					}
				}
			}
		}
	}
}
	
	
	
	
	
	
	
