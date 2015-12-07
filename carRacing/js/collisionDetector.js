function CollisionDetector(){

  this.check = function(baddie,player){
    x1 = player.getLeft();
    y1 = player.getTop();
    wd1 = player.getWd();
    ht1 = player.getHt();

    x2 = baddie.getLeft();
    y2 = baddie.getTop();
    wd2 = baddie.getWd();
    ht2 = baddie.getHt();

    // algorithm for collision detection

    if ((x1 < x2 + wd2 && x1 + wd1 > x2 && y1 < y2 + ht2 && ht1 + y1 > y2) || 
     (x2 < x1 + wd1 && x2 + wd2 > x1 && y2 < y1 + ht1 && ht2 + y2 > y1)){
      console.log('kaboom');
      alert('kaboom!! oh no!');
      clearInterval(mainIntervalId);
    }
  }
}