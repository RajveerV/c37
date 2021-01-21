class Game{
    constructor(){}

    getState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide()
        textSize(30)
        text("GAME-START",400,150)
        Player.getPlayerInfo()
        if(allplayers!==undefined){
            var dp=200 
            
            for (var p in allplayers){
                dp=dp+50
                if (p==="player"+player.index){
                    fill ("yellow")
                }
                else{
                    fill ("blue")
                }
                textSize(15)
                text(allplayers[p].name+": "+allplayers[p].distance,420,dp)
            }

        }
        if (keyDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+13
            player.update()
        }
    }
}