var bullet;
var wall;
var weight,speed;
var thickness;
function setup() {
  createCanvas(1600,400);
   thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(50,200,30,10);
  weight=random(30,52);
  speed=random(223,321);
   bullet.velocityX=speed;
  
}

function draw() {
  background("black"); 
 wall.shapeColor=color(80,80,80); 
 bullet,shapeColor=color("white");
 if(collided(bullet,wall)){
   bullet.velocityX=0;
   bullet.x=wall.x-(bullet.width/2+wall.width/2);
   var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(deformation<10) {
     bullet.shapeColor="green";
   }


   if(deformation>10){
     bullet.shapeColor="red";
   }
   

 }
 console.log(speed);
 console.log(weight);
  drawSprites();
}
function collided(lbullet,lwall)
{
  var bulletRightEdge=lbullet.x+lbullet.width;
  var wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}
