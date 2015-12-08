function Animate(element){

    var slide=function(css_property,finposvalue,time_intvl){
    var fps=40;
    var intrvl=1000/fps;
    var count=0;
    // debugger
   
      rate=(finposvalue - curposvalue)*50/(time_intvl);
    var shiftleft = function(){
       element.style[css_property] =curposvalue + (rate*count)+'px';
       count++;
       if(count>time_intvl/50)
       {
          console.log('curposvalue= '+ curposvalue);
          console.log('finposvalue= '+ finposvalue);
          console.log('time_intvl= '+ time_intvl);
          curposvalue = parseInt(element.style[css_property]);
          clearInterval(IntervalId);
       }
     
    }
    var IntervalId=setInterval(shiftleft,50);
    //25 is for 40 FPS

    var finish=function(){
 clearInterval(IntervalId); 
}

}


this.slide= slide;
this.finish=finish;
    // this.prev=prev;
  }
  


    

      
 

