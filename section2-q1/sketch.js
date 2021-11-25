// 小手調べ
function setup(){
  for(let i = 0; i < 11; i++){
    let x = i*10;
    ellipse(50,50,x);
    noFill();
    if(i>4){
      stroke(255,0,0);
    }
    else{
      stroke(0,0,255);
    }
  }
}
