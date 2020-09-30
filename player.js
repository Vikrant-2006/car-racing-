class Player{
constructor(){
this.index=null;
this.distance=0;
this.name=null;
this.rank=null;
}

getCount(){
    var playercountRef = database.ref('playercount');
    playercountRef.on("value",(data)=>{
        playercount = data.val()
    } )
}
updateCount(count){
    database.ref('/').update({
        playercount:count
    })
    }
    update(){
var playerindex = "players/player"+this.index
database.ref(playerindex).set({
    name:this.name,
    distance:this.distance
})
    }

    static getplayerinfo(){
        var playerinfoRef=database.ref('players');
        playerinfoRef.on("value",(data)=>{
            allplayers=data.val();
        })
    }

    getcaratend(){
        database.ref('caratend').on("value",(data)=>{
            this.rank=data.val();

        })
    }
    static updatecaratend(rank){
        database.ref('/').update({
            caratend:rank
        })
    }
}