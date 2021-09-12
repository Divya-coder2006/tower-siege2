const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var base1, base2;
var box1;

function preload() {
  ballImg = loadImage("polygon.png")
}

function setup() {
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);
  slingShot = new SlingShot(this.ball, { x: 100, y: 200 })

  base1 = new Ground(330, 300, 240, 10);
  box1 = new Box(250, 290, 30, 40);
  box2 = new Box(270, 290, 30, 40);
  box3 = new Box(300, 290, 30, 40);
  box4 = new Box(330, 290, 30, 40);
  box5 = new Box(360, 290, 30, 40);
  box6 = new Box(390, 290, 30, 40);
  box14 = new Box(410, 290, 30, 40);
  box7 = new Box(260, 230, 30, 40);
  box8 = new Box(290, 230, 30, 40);
  box9 = new Box(320, 230, 30, 40);
  box10 = new Box(340, 230, 30, 40);
  box11 = new Box(370, 230, 30, 40);
  box12 = new Box(392, 230, 30, 40);
  box13 = new Box(310, 200, 30, 40);
  box15 = new Box(335, 200, 30, 40);
  box16 = new Box(325, 160, 30, 40);

  base2 = new Ground(650, 180, 280, 10);
  // box17 = new Box(530,145,30,40);
  box17 = new Box(560, 145, 30, 40);
  box18 = new Box(590, 145, 30, 40);
  box19 = new Box(620, 145, 30, 40);
  box20 = new Box(650, 145, 30, 40);
  box21 = new Box(680, 145, 30, 40);
  box22 = new Box(710, 145, 30, 40);
  box23 = new Box(740, 145, 30, 40);
  box24 = new Box(770, 145, 30, 40);
  box25 = new Box(570, 115, 30, 40);
  box26 = new Box(600, 115, 30, 40);
  box27 = new Box(630, 115, 30, 40);
  box28 = new Box(660, 115, 30, 40);
  box29 = new Box(690, 115, 30, 40);
  box30 = new Box(720, 115, 30, 40);
  box31 = new Box(750, 115, 30, 40);
  box32 = new Box(600, 1, 30, 40);
  box33 = new Box(630, 1, 30, 40);
  box34 = new Box(660, 1, 30, 40);
  box35 = new Box(690, 1, 30, 40);
  box36 = new Box(780, 1, 30, 40);
  box37 = new Box(80, 1, 30, 40);
  box38 = new Box(840, 1, 30, 40);
  box39 = new Box(80, 1, 30, 40);
  box40 = new Box(1020, 115, 30, 40);
  box41 = new Box(1050, 115, 30, 40);
  box42 = new Box(580, 50, 30, 40);
  box43 = new Box(610, 50, 30, 40);
  box44 = new Box(640, 50, 30, 40);
  box45 = new Box(670, 50, 30, 40);
  box46 = new Box(700, 50, 30, 40);




  ground = new Ground(450, 400, 900, 20);



}

function draw() {
  background(0);
  Engine.update(engine);

  base1.display();
  base2.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  //box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  //box31.display();
  //box32.display();
  box33.display();
  box34.display();
  //box35.display();
  //box36.display();
  //box37.display();
  //box38.display();
  //box39.display();
  //box40.display();
  //box41.display();
  //box42.display();
  box43.display();
  box44.display();
  box45.display();
  //box46.display();



  imageMode(CENTER);
  image(ballImg, ball.position.x, ball.position.y, 40, 40);
  slingShot.display();
  textSize(20);
  fill("white");
  text("PRESS SPAC TO MOVE BACK THE PLOYGEN TO IT'S POSITION", 180, 350)

  drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(ball, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.ball);
  }
}