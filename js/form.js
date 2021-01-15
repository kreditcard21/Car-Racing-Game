class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput('Enter your name:');
        this.button=createButton('Submit');
        this.greeting=createElement('h2');

    }
    display(){
        this.title.html("Car Racing Game");
        this.title.style('color','white');
        this.title.position(130, 100);
        this.input.position(150, 150);
        this.button.position(150, 200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name=this.input.value();
            playercount += 1;
            console.log(playercount);
            player.index=playercount;
            player.updateCount(playercount);
            player.update();
            this.greeting.html("Hello "+ player.name);
            this.greeting.position(150, 150);
            this.greeting.style('color','white');
        })
        
}
hide(){
    this.input.hide();
    this.button.hide();
    this.title.hide();
    this.greeting.hide();
}

end(){
    var message=createElement('h2');
    message.html("Congratulations! " + player.name + " Your rank is " + rank);
    message.style('color', 'red');
    message.position(150, 150);
    if(player.rank>=4){
    var reset=createButton('reset');
    reset.position(displayWidth/2,20);
    reset.size(200, 50);
    reset.mousePressed(
        ()=>{
            game.updateState(0);
            player.updateCount(0);
            var Playerref=database.ref('Players');
            Playerref.remove();
            player.updatecarsatend(0);
        }
    )
    }
}
}
