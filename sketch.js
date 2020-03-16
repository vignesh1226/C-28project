const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,390,1200,20);
    ground1 = new Ground(600,200,300,20);
   
    ball1 = new Ball(100,100);

    box1 = new Box(600,360,40,40);
    box2 = new Box(620,360,40,40);
    box3 = new Box(640,360,40,40);
    box4 = new Box(610,340,40,40);
    box5 = new Box(630,340,40,40);
    box6 = new Box(620,320,40,40);

    box7 = new Box(500,180,40,40);
    box8 = new Box(520,180,40,40);
    box9 = new Box(510,160,40,40);
    box10 = new Box(600,180,40,40);
    box11 = new Box(620,180,40,40);
    box12 = new Box(610,160,40,40);
    box13 = new Box(700,180,40,40);
    box14 = new Box(720,180,40,40);
    box15 = new Box(710,160,40,40);
   
    chain = new Slingshot(ball1.body,{x:100,y:100});
}

function draw(){
    background(255);
    Engine.update(engine);

    strokeWeight(4);

    ball1.display();

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

    ground.display();
    ground1.display();
    
    chain.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}