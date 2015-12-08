function block(){
  this.Left1;
  this.Left2;
  this.select;
  // yo change gareko cha
  this.Top=10;

  element1=document.createElement("div");
  element2=document.createElement("div");

  this.element1=element1;
  this.element2=element2;

  var create=function(){
    this.Top=-10;
    this.element1.setAttribute("class",'block');
    document.getElementsByClassName("main")[0].appendChild(this.element1);
    this.element2.setAttribute("class",'block');
    document.getElementsByClassName("main")[0].appendChild(this.element2);

    this.element1.style.top=(this.Top)+'px';
    this.element2.style.top=(this.Top)+'px';
    console.log(this.element1.style.top);
    console.log(this.element2.style.top);
    // debugger  
    this.select=Math.floor((Math.random() * 2) + 1);;

    if(this.select==1){
      this.Left1=((Math.random() * 200) + 0);;
      this.Left2=((Math.random() * 300) + 200);
      this.element1.style.left=this.Left1+'px';
      this.element2.style.left=this.Left2+'px';
    }

    if(this.select==2){
      this.Left1=((Math.random() * 350) + 200);;
      this.Left2=((Math.random() * 200) + 0);
      this.element1.style.left=this.Left1+'px';
      this.element2.style.left=this.Left2+'px';
    }

  // yo change gareko cha

// ==================================================================
    
// ====================================================================
  }
  var move= function(){

    this.Top=this.Top+5;
    this.element1.style.top=this.Top+'px';
    this.element2.style.top=this.Top+'px';

  }
  this.create=create;
  this.move=move;
}



