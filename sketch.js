var database,foodStock;
var dog,dogImg,doghappy;
var writeStock,errorData,addFoods;
var database;
var LastFed;


function preload(){

  dogHappy=loadImage("images/dogImg1.png")  
  dogImg=loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500)

  database=firebase.database()
 
foodStockRef=database.ref('Food')
foodStockRef.on("value",readStock);

dog=createSprite(250,250,10,10);
dog.addImage(dogImg)
dog.scale=0.5

fedTime=database.ref('fedTime')
fedTime.on("value",function(data){
 LastFed=data.val()

fedDog=createButton("feed the dog")
fedDog.position(700,95)
fedDog.mousePressed(feedDog)

addFood=createButton("Add Food")
addFood.position(400,500)
addFood.mousePressed(addFood)


});
}







function draw() {  
background(46,139,87)
fill("red")
textSize(20)
text("Food: "+foodStock,250,50)
fill(255,255,254);
textSize(15)
if(LastFed>=12){
  text("LastFed:"+LastFed%12+"PM",350,30);
}else if(LastFed==0){
text("Last Fed: 12AM",350,30)
}else{
text("Last Fed:"+"AM",350,30)
}








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
function feedDog(){
  dog.addImage(doghappy)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}
function addFoods(){
 FoodS++;
 database.ref ('/').update({
   Food:foodS
 })
}



