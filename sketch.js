var box
function setup() {
  
  createCanvas(400,400);
  //canvas.backroundColor("yellow")
  box=createSprite(200,200,50,50)
  background('black')
}

function draw(){
  //canvas.backroundColor("yellow")
  //var canvas = document.getElementById("canvas1");
  //var ctx = canvas.getContext('2d');
  //background('yellow');

  if (keyIsDown(RIGHT_ARROW)){
    box.position.x= box.position.x+5
    //ctx.fillStyle="red"
    //ctx.fillRect(0,0,canvas.width,canvas.height);
    //canvas.backroundColor("red")
    background('red')
  }

  if (keyIsDown(LEFT_ARROW)){
    box.position.x= box.position.x-5
    //ctx.fillStyle="yellow"
    //ctx.fillRect(0,0,canvas.width,canvas.height);
    //canvas.backroundColor="Yellow"
    background('yellow')
  }

  if (keyIsDown(DOWN_ARROW)){
    box.position.y= box.position.y+5
    background('blue')
  }  
  if (keyIsDown(UP_ARROW)){
    box.position.y= box.position.y-5
    background('green')
  } 
  if (keyIsDown(32)){
    //box.position.y= box.position.y-5
    background('black')
  } 

drawSprites()

}
