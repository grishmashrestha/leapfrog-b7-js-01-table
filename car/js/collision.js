function collide(){
  
  var detect= function(block,car){
    console.log("car="+car.Top);
  console.log("block="+block.Top);
  // debugger  
  if(((block.Left1<=car.Left+30) && (car.Left<=block.Left1+50))&&((block.Top)+50>=car.Top)&&((block.Top)<=car.Top)) {
    // alert("over"); 
   console.log("car="+car.Top);
  console.log("block="+block.Top);  
    // debugger
    clearInterval(moveId);
  }
  if(((block .Left2<=car.Left+30) && (car.Left<=block.Left2+50))&&((block.Top)+50>=car.Top)&&((block.Top)<=car.Top)) {
    // alert("over");
       console.log("car="+car.Top);
  console.log("block="+block.Top);  
  // debugger
  clearInterval(moveId);
  }

  if(((block.Left1<=bullet.Left) && (bullet.Left<=block.Left1+50))&&((block.Top)+50>=bullet.Top)&&((block.Top)<=bullet.Top)) {
    // alert("over"); 
   console.log("car="+car.Top);
  console.log("block="+block.Top);
  console.log("enemy down");  
    // debugger
    clearInterval(moveId);
  }

  if(((block.Left2<=bullet.Left) && (bullet.Left<=block.Left2+50))&&((block.Top)+50>=bullet.Top)&&((block.Top)<=bullet.Top)) {
    // alert("over"); 
   console.log("car="+car.Top);
  console.log("block="+block.Top);  
    // debugger
    clearInterval(moveId);
  console.log("enemy down");  
  }
  console.log("car="+car.Top);
  console.log("block="+block.Top);
}
this.detect=detect;
}