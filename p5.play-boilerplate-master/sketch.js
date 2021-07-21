var iss,spacecraft,hasDocked = false,back,issimg;
var spacecraft1,spacecraft2,spacecraft3,spacecraft4;

function preload(){
   back = loadImage("images/spacebg.jpg")
  spacecraft1 = loadImage("images/spacecraft1.png")
   spacecraft2 = loadImage("images/spacecraft2.png")
  spacecraft3 = loadImage("images/spacecraft3.png")
   spacecraft4 = loadImage("images/spacecraft4.png")
   issimg = loadImage("images/iss.png")
}

function setup() {
  createCanvas(600,350);

  iss = createSprite(130,330);
  iss.addImage(issimg)
  iss.scale = 0.25;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft1)
  spacecraft.scale = 0.15
}

function draw() {
  background(back);

  if(!hasDocked){
  spacecraft.x=spacecraft.x+random(-1,1)
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraft3);
    spacecraft.x = spacecraft.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(spacecraft4);
    spacecraft.x = spacecraft.x+10;
  }
  else if(keyDown(UP_ARROW)){
    spacecraft.addImage(spacecraft2);
    spacecraft.y = spacecraft.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraft1);
    spacecraft.y = spacecraft.y+10;
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){ 
  hasDocked = true; textSize(25); fill("white") 
  text("Docking Successful!", 200, 300); 
}

  drawSprites();
}