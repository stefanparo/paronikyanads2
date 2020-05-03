let time = 0;
let wave = [];
	 

function setup(){
	createCanvas(1500,650);
}

function draw() {
	  background(1);
	  translate(300,300);
	  
	  let x = 0;
	  let y = 0;
	  
	  for (let i = 0; i < 5; i++){
	  	let prevx = x;
	  	let prevy = y;
		let n = i * 2 + 1;
		let radius = 100 * (4 / (n * PI));
		x += radius * cos(n * time);
		y += radius * sin(n * time);

		stroke(355, 100);
	  	noFill();
	  	ellipse(prevx, prevy, radius * 2);

	  	fill(225);
	  	stroke(255)
	  	line(prevx, prevy, x, y);
	  	ellipse(x ,y ,8);
	  	
}
		wave.unshift(y);
		translate(200, 0);
	  	line(x - 200, y, 0, wave[0]);
	  	
	  	beginShape();
	  noFill();
	  for (let i = 0; i < wave.length; i++) {
	  	vertex(i, wave[i]);
	  	
	  }
	  endShape();

	  time += 0.05;


	  if (wave.length > 500){
	  	wave.pop();
  }
}
