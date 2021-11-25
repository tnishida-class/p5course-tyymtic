// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      console.log(i,j);
      rect(size*i, size*j,25,25);

      if ((i+j)%2) {
        noFill();

      } else {
        fill(100,100,100);
      }
    }
}

for(let i = 0; i < 9; i++){
  for(let j = 0; j < 9; j++){
    ellipse(size*i-12.5, size*j-12.5,20);

    if (0<i,j<3 && (i+j+1)%2) {
    fill(255,0,0);
  }else if(0<i,j<5){
    noFill();
  }else if(0<i,j<8 && (i+j+1)%2){
    fill(0,0,0);
  }else{
    noFill();
  }



  }
}

}
