class Game{
    constructor(){
        
    }
    getState(){
        var gameref=database.ref('gamestate');
        gameref.on("value", (data)=>{
            gamestate = data.val();
        })
    }
    updateState(state){
        var gameref = database.ref('/')
        gameref.update({
            'gamestate': state
        });
    }
    
    start(){
        form=new Form();
        form.display();
        player=new Player();
        player.getCount();
        car1=createSprite(200, 200);
        car2=createSprite(100, 100);
        car3=createSprite(300, 200);
        car4=createSprite(500, 200);
        cars = [car1, car2, car3, car4];
        car1.addImage(car1img);
        car2.addImage(car2img);
        car3.addImage(car3img);
        car4.addImage(car4img);

    }
    
    play(){
        form.hide();
        Player.getplayerinfo();
        player.getcarsatend();

        background(groundimg);
        image(trackimg, 0, -displayHeight*4, displayWidth, displayHeight*5);
        // displaying player names
        //if(allplayers!==undefined){
            //var displayposition=130;
            //for(var p in allplayers){
                /*if(p === "player"+player.index){
                    fill("red");
                
                }
                else{
                    fill("black");
                }
                displayposition+=20;
        textSize(20);
        text(allplayers[p].name, 120, displayposition);

            }
            */
        if(allplayers!==undefined){
            var index=0;
            var x=200;
            var y;
            for(var p in allplayers){
                console.log(p);
                console.log(cars);
                index=index+1;
                x=x+250;
                y=displayHeight-allplayers[p].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                    fill('red');
                    ellipse(x, y+70, 60, 60);

                }

            }

        
        if(keyDown(UP_ARROW)){
            player.distance+=20;
            player.update();
        }
        if(player.distance>4480){
            gamestate=2;
            console.log(player.rank);
            player.rank=player.rank+1;
            player.updatecarsatend(player.rank);
            rank=player.rank;

        }
        }
        drawSprites();
    }
    end(){
        form.end();
        
    }


}
