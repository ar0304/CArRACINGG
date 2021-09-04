class Game{
constructor(){

}
getState(){
    var gameStateref = database.ref('gameState')
    gameStateref.on("value",function(data){
        gameState = data.val()
    })
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
start(){
    if(gameState===0){
        player = new Player()
        player.getCount()
        form= new Form()
        form.display()
    }
    car1 = createSprite(200,200)
    car1.addImage("car1",car1image) 
    car2 = createSprite(400,200)
    car2.addImage("car2",car2image)
    car3 = createSprite(600,200)
    car3.addImage("car3",car3image)
    car4 = createSprite(800,200)
    car4.addImage("car4",car4image)
    cars = [car1,car2,car3,car4]
}
play(){
    form.hide()
    Player.getplayerinfo()
    player.getCarsAtEnd()
    if(allPlayers!== undefined){
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        var index = 0
        var x = 200
        var y
        for(var plr in allPlayers){
            index = index+1
            x = x+200
            y = displayHeight-allPlayers[plr].distance
            cars[index-1].x = x
            cars[index-1].y = y
            if(index===player.index){
               stroke(10)
               fill("blue")
               ellipse(x,y,100,100)
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y
            }
        }
    }
    if(keyIsDown(UP_ARROW)&& player.index!== null){
        player.distance+= 10
        console.log(player.distance)
        player.update()
    }
    if(player.distance>3630){
        gameState = 2 
        player.rank+= 1
        Player.updateCarsAtEnd(player.rank)
    }
    drawSprites()
}
end(){
    console.log("game End")
    console.log("your rank is : "+player.rank)
}
}