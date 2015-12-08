    var imgcount=0;
    margin=0;
    var curposvalue=0;
    var value;
    var hidden=document.getElementsByClassName('hidden');
    var liid="li1";
    var caller;
    var select_img_left=function(){
      caller.finish();
      console.log('stopped');
      imgcount=imgcount-2;    
      start_slide();
    }
        var select_img_right=function(){
      finish();
      console.log('stopped');
      imgcount=imgcount;    
      start_slide();
    }


    var Animate_call=function(){
      // debugger
      if(imgcount>=5)
      {
        imgcount=0;
      }
      if(imgcount<0)
      {
        imgcount=4;
      }

        document.getElementById(liid).style.background="#c2c2c2";
        liid="li"+(imgcount+1);
        // console.log(liid);
        document.getElementById(liid).style.background="red";

      caller= new Animate(hidden[0]);
      console.log('====================');
      console.log('imgcount= '+imgcount);
      caller.slide("marginLeft",-900*imgcount,1000);
      imgcount++;
    }



