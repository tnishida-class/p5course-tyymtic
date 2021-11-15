// テキスト「アニメーションの基本」
let x, y, vx, vy ,vz;
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight, windowsized);
  x = width / 2;
  y = height / 2;
  z = size / 2;
  vx = 8;
  vy = 8;
  vz = 8;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, z);
  x += vx;
  y += vy;
  z += vz;

  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax);

  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y > height){ vy = -1 * vy; }
  if(z > 20){ vz = -1 * vz; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  z = constrain(z, 0, size);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight, windowsized);
}
