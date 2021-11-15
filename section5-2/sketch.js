// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(300, 100);
  background(200);
  fill(0);
  regularPolygon(7, 50, 40, 40);
}

function regularPolygon(n, cx, cy, r){
  beginShape();
  for(var i = 0; i < n; i++){
    let theta = TWO_PI * i * 1 / n;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
