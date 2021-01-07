var database,foodStock;
var dog,dogImg,doghappy;
var Lastfed,writeStock,errorData,addFoods;


function preload(){

  dogHappy=loadImage("images/dogImg1.png")  
  dogImg=loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500)


dog=createSprite(250,250,10,10);
dog.addImage(dogImg)
dog.scale=0.5

database=firebase.database()
fedTime=database.ref('feedTime')
fedTimeRef.on("value",function(data){
lastFed=data.val()






});
feed=createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);

}







function draw() {  
background(46,139,87)
fill("red")
textSize(20)










  drawSprites();
}
function readStock(data){
  foodStock=data.val()
}
function writeStock(x){
if(x<=0){
  x=0
}else{
x=x-1;

}

  database.ref('/').update({
    Food:x
  })
}
function errorData(){
  console.error("error,readingData");
}




