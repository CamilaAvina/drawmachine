let array = [];
let backgroundColor = 200;
//let noiseOffset = 0.0;
let strokeWidth = 5;



function setup() {

  createCanvas(700, 700);
  background(backgroundColor);
  // for (let i = 1; i < 10; i++) {
  //     // for (let j = 1; j < 10; j++) {
  //     //   strokeWeight(2);
  //     //   noStroke();
  //     //   fill(random(255) - j * 10, random(255) - j * 10, random(255) - j * 20);
  //     //   circle(i * windowWidth, j * windowHeight, i * 3);
  //     // }
  //     for (let i = 0; i < 10; i++) {
  //       line(0, 0, windowWidth, i * 150);
  //       strokeWeight(2);
  //       stroke(random(255) - i * 15, random(255) - i * 10, random(255) - i * 20);
  //       line(windowWidth, windowHeight, i * 150, 0);
  //       line(0, windowHeight, i * 150, 0);
  //       line(windowWidth, 0, i * 150, 0);
  //     }


  strokeWeight(strokeWidth);
    noFill();



}


function draw() {

  stroke(5);
  strokeWeight(strokeWidth);

  //noiseOffset += 0.01;
  //strokeWidth = noise(noiseOffset) * 100;
    //background(200,50,133,);
  if (mouseIsPressed) {
     //stroke(map(mouseX, 0, 600, 0, 255, true));
  //  line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    stroke("red");
      line(mouseX, mouseY, pmouseX, pmouseY);
      //line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);
    backgroundColor -= 3;
    background("red");
    //  line(mouseX, mouseY, pmouseX, pmouseY);

    array.push([mouseX, mouseY]);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);

      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  }
    }

function keyTyped() {

  if (key === 's') {
    //save this image
    saveCanvas('Drawing Machine', 'png');
  } else if (key === 'd') {
    background(0,255,0);

    stroke(252, 198, 3);
     line(mouseX, mouseY, pmouseX, pmouseY);
  //  line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);

    //display image

    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);

      curveVertex(array[i][0], array[i][1]);
    }

    endShape();

  }
  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 255;

}
