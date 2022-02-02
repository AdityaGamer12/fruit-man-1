var canvas;
var fruitboy
var boyrun,boystop,boyrunleft
var bg
var bar1
var bar2
var bar3
var bar4
var bar5
var bar6
var bar7
var bar8
var bar9
var bar10
var bar11
var bar12


function preload() {

boyrun= loadAnimation('images/fruit_boy-running-1.png','images/fruit_boy-running-2.png','images/fruit_boy-running-3.png',
'images/fruit_boy-running-4.png','images/fruit_boy-running-5.png','images/fruit_boy-running-6.png',)

boyrunleft= loadAnimation('images/fruit_boy-running-1-left.png','images/fruit_boy-running-2-left.png','images/fruit_boy-running-3-left.png',
'images/fruit_boy-running-4-left.png','images/fruit_boy-running-5-left.png','images/fruit_boy-running-6-left.png',)

boystop= loadAnimation('images/fruit_boy-virus-7.png',)

bg= loadImage('images/backg.png')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  fruitboy = createSprite(343,66,10,10)
  bar1 = createSprite(100,160,10,300)
  bar2 = createSprite(1000,30,2000,10)
  bar3 = createSprite(210,293,300,10)
  bar4 = createSprite(300,115,210,50)
  bar5 = createSprite(295,215,210,35)
  bar6 = createSprite(665,115,260,60)
  bar7 = createSprite(565,310,70,200)
  bar8 = createSprite(685,306,220,30)
  bar9 = createSprite(960,221,450,30)
  bar10 = createSprite(960,276,85,88)
  bar11 = createSprite(210,293,300,10)
 // bar12 = createSprite(295,215,210,35)
 // bar13 = createSprite(295,215,210,35)
 // bar14 = createSprite(295,215,210,35)
//  bar15 = createSprite(295,215,210,35)




  
  fruitboy.addAnimation("running",boyrun)
  fruitboy.addAnimation("runningleft",boyrunleft)
  fruitboy.addAnimation("stop",boystop)
  fruitboy.scale =0.2
}


function draw() {
  background(bg);

textSize(20)

  text("x" + mouseX, width/2,height/2)
  text("y" + mouseY, 750,height/2)

if(keyDown("d"))
{
  fruitboy.x=fruitboy.x+5
  console.log(fruitboy.x)
}

if(keyDown("w"))
{
  fruitboy.y=fruitboy.y-5
  console.log(fruitboy.x)
}

if(keyDown("a"))
{
  fruitboy.x=fruitboy.x-5
  console.log(fruitboy.x)
}

if(keyDown("s"))
{
  fruitboy.y=fruitboy.y+5
  console.log(fruitboy.x)
}
  
drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}