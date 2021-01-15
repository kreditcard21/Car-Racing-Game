class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=0;
        this.rank=null;
    }
    getCount(){
        var countref=database.ref('playercount');
        countref.on("value", (data)=>{
            playercount=data.val();
        })
        console.log(playercount);
    }
    updateCount(count){
       var ref= database.ref('/')
       ref.update({
            'playercount':count
        })
    }

    update(){
        var field = "Players/player"+ this.index;
        database.ref(field).set({
            name:this.name,
            distance:this.distance
        })
    }
    
    static getplayerinfo(){
        var playerinforef = database.ref('Players');
        playerinforef.on("value", (data)=>{
            allplayers=data.val();
        })
        
    }

    getcarsatend(){
        var ref=database.ref('carsatend');
        ref.on("value", (data)=>{
            this.rank=data.val();

        })
    }

    updatecarsatend(rank){
        var ref=database.ref('/');
        ref.update({
            'carsatend':rank
        })
    }
}