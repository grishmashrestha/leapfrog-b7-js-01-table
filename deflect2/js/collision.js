function collision(){

  var detect=function(b){

  // console.log(b[1].Top);
   // debugger;
     for (var j = b.length - 1; j >= 0; j--) {
      
      for (var i= 0;  i< b.length-1; i++) {
        if(i!=j){
          if((Math.abs(b[j].Left-b[i].Left)<=50) && (Math.abs(b[j].Top-b[i].Top)<=50)){
         
          // console.log("box x= "+b[i].dx+" "+"box y="+b[i].dy);
          // console.log("box x= "+b[j].dx+" "+"box y="+b[j].dy);
          // console.log("box Top= "+b[i].Top+" "+"box Left="+b[i].Left);   
          // console.log("box Top= "+b[j].Top+" "+"box Left="+b[j].Left);
           if((b[i].dx==0 || b[j].dx==0)&&(b[0].dx!=0))
           {
            b[i].dx=2;
            b[i].dy=5;
            b[j].dx=2;
            b[j].dy=5;
           }
          if(b[i].Left<=0)
          {
            b[i].Left=0;
          }

          if(b[j].Left<=0)
          {
           b[j].Left=0; 
          }

          if(b[i].Left>=450)
          {
            b[i].Left=450;
          }

          if(b[j].Left>=450)
          {
            b[j].Left=450;
          }

          if(b[i].Top<=0)
          {
            b[i].Top=0;
          }

          if(b[j].Top<=0)
          {
            b[j].Top=0;
          }

          if(b[i].Top>=450)
          {
            b[i].Top=450;
          }

          if(b[j].Top>=450)
          {
           b[j].Top=450; 
          }
          if(b[i].Left<b[j].Left && b[i].Left>0+100)
          {  
          b[i].Left=b[i].Left-5;
          b[i].Top=b[i].Top-5;
          }
          if(b[i].Left>b[j].Left && b[i].Left<500-100)
          {
          b[i].Left=b[i].Left+5;
          b[i].Top=b[i].Top+5;
          }
          if(b[i].Left>b[j].Left && b[j].Left>0+100)
          {  
          b[j].Left=b[j].Left-5;
          b[j].Top=b[j].Top-5;
          }
          if(b[i].Left<b[j].Left && b[j].Left<500-100)
          {
           b[j].Left=b[j].Left+5;
          b[j].Top=b[j].Top+5;
          }

          b[j].dy=-b[j].dy;
          b[i].dy=-b[i].dy;
          b[j].dx=-b[j].dx;
          b[i].dx=-b[i].dx;
          
          // console.log("COLLISION OCCURED=============================");
          // console.log("box x= "+b[i].dx+" "+"box y="+b[i].dy);
          // console.log("box x= "+b[j].dx+" "+"box y="+b[j].dy);
          // console.log("box Top= "+b[i].Top+" "+"box Left="+b[i].Left);   
          // console.log("box Top= "+b[j].Top+" "+"box Left="+b[j].Left);
          // console.log("box x= "+b[j].dx+" "+"box y="+b[j].dy);
        }
        }
        };

    };

}

this.detect=detect;
}