var tommy;
tommy=110;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
  function draw() {
    background(22, 36, 86); //an RGB color for the canvas' background

     fill(250,250,249);
     stroke(206, 250, 254);
     strokeWeight(20);
     ellipse(80,80,110,110);

     fill(255, 223, 32);
     stroke(253, 199, 69);
     strokeWeight(5);
     ellipse(220,120,10,10);
     ellipse(110,200,10,10);
     ellipse(310,180,10,10);
     ellipse(420,80,10,10);

    fill(255, 223, 32);
    stroke(253, 199, 69);
    strokeWeight(35);
     ellipse(230,427,tommy,tommy);

    fill(45,153,102);
    strokeWeight(0);
    rect(0,410,500,100);

     fill(159, 7, 18);
    stroke(12,10,9);
    strokeWeight(5);
    rect(155,340,50,100);

    fill(245, 245, 244);
    strokeWeight(0);
    rect(170,340,20,100);

    fill(159, 7, 18);
    stroke(12,10,9);
    strokeWeight(5);
    rect(255,340,50,100);

    fill(245, 245, 244);
    strokeWeight(0);
    rect(270,340,20,100);

    fill(251, 100, 182);
    stroke(253, 165, 213);
    strokeWeight(10);
    ellipse(mouseX,mouseY,30,50);

    fill(159, 7, 18);
    stroke(12,10,9);
    strokeWeight(5);
    triangle(230,250,310,340,150,340);

    fill(25, 60, 184);
    stroke(255, 223, 32);
    strokeWeight(1);
    rect(202,300,55,30);

    fill(255, 223, 32);
    strokeWeight(0);
    textSize(18);
    textFont("Georgia");
    textStyle('italic');
    text('Circus',205,320);

    fill(67,32,4);
    strokeWeight(0);
    rect(50,370,50,50);

    fill(67,32,4);
    strokeWeight(0);
    rect(400,190,45,230);

    fill(45,153,102);
     stroke(13,84,43);
     strokeWeight(20);
     ellipse(420,200,140,140);

  }
  function mousePressed(argument) {
    if (tommy>=110) {tommy=0;} else {tommy=tommy+120;}
    // body...
  }


  
