// 最終課題を制作しよう

function setup() {
  createCanvas(100,100);
  background(0,128,400);
  for(let i = -10; i < 20; i++){
    if(i % 2 == 0){
      strokeWeight(2);
    }
    else{
      strokeWeight(1);
    }
    let x = i * 10 + 10;
    line(x, 0, 50, 100);
  }
  star(50, 50, 50);
}

function star(cx, cy, r){
  beginShape();
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}


let GC =['G','L','B','A','L','C','L','U','T','U','R','E'];
document.write(GC[0]);
document.write(GC[5]);


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
