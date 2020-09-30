class Game{
constructor(){

}

getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val()
    } )
}
update(state){
database.ref('/').update({
    gameState:state
})
}
async start(){
    if(gameState=== 0 ){
        player = new Player()
        var playercountRef = await database.ref('playercount').once("value")
        if(playercountRef.exists()){
            playercount=playercountRef.val()
        
        player.getCount();
        }
        form = new Form()
        form.display();
   
    }

    car1=createSprite(100,200);
    car1.addImage(c1)

    car2=createSprite(300,200);
    car2.addImage(c2)

    car3=createSprite(500,200);
    car3.addImage(c3)

    car4=createSprite(700,200);
    car4.addImage(c4)

cars=[car1,car2,car3,car4]

}

play(){
form.hide();

Player.getplayerinfo();
player.getcaratend();
//textSize(30);
//text("GAME START",120,100);
Player.getplayerinfo();

if(allplayers!== undefined){
    background(198,135,103);
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
    //var display_position=130;
    var index=0
    var x=175;
    var y;
    for(var plr in allplayers){
        index=index+1
        x=x+200
        y=displayHeight-allplayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
     if(index===player.index){
         stroke(10)
         fill("red")
         ellipse(x,y,60,60)
         cars[index-1].shapeColor="red"
         camera.position.x=displayWidth/2
         camera.position.y=cars[index-1].y
     }
     
     
    
    /*display_position+=20;
    textSize(15);
    text(allplayers[plr].name+": "+ allplayers[plr].distance,120,display_position)*/
    
}
}

if(keyIsDown(UP_ARROW )&& player.index!==null){
player.distance+=10;
player.update();
}
if(player.distance>3860){
    gameState=2
    player.rank=player.rank+1
    Player.updatecaratend(player.rank);
}
drawSprites();
}
end(){
    console.log("game ended");
    console.log(player.rank);
    alert("rank: "+player.rank);
}

}