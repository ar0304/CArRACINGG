class Player{
    constructor(){
        this.index = null;
        this.distance = 0
        this.name = null;
        this.rank = 0

    }
    getCount(){
      var playerCountref = database.ref('playerCount')
      playerCountref.on("value",(data)=>{
          playerCount = data.val()
      })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,distance:this.distance
        })
    }
    static getplayerinfo(){
        var playerinforef = database.ref('players')
        playerinforef.on("value",(data)=>{
            allPlayers = data.val()
        })
    }
    getCarsAtEnd(){
        database.ref('carsatend').on("value",(data)=>{
            this.rank = data.val()
        })
    }
    static updateCarsAtEnd(rank){
        database.ref('/').update({
            carsatend: rank
        })
    }
}
