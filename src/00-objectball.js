function gameObject(){
return {
     home:{
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry":{
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }   
        },
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood":{
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
                }    
            }
        }
    }
}

const game = gameObject()

function players() {
    const homePlayers = game.home.players
    const awayPlayers = game.away.players
    return Object.assign({}, homePlayers, awayPlayers)
}

function homeTeam(){
    return game.home
}

function awayTeam(){
    return game.away
}

function awayTeamColor(){
    return game.away.colors
}

function homeTeamColor(){
    return game.home.colors
}

function allPlayers(){
    const combined  = {...awayTeam().players, ...homeTeam().players}
    return combined
}


//numPointsScpred by player

function numPointsScored(playersInput){
    return players()[playersInput].points        
}
    
//shoeSize

function shoeSize(playersInput){
    return players()[playersInput].shoe  
}

//teamColors by team name

function teamColors(teamName){
    if (teamName === "Brooklyn Nets"){
        return gameObject().home.colors
        }else if(teamName === "Charlotte Hornets"){
            return gameObject().away.colors
    } 
}

//teamNames : no parameter

function teamNames(){
    return [homeTeam().teamName, awayTeam().teamName]
}

//playerNumbers Array

const teamObject = (teamName) => {
    if (teamName === "Brooklyn Nets") {
        return homeTeam()
    } else {
        return awayTeam()
    }
}

const playerNumbers = (teamName) => {
    let playerNums = []
    const players = teamObject(teamName).players
    for (let player in players) {
        let playerNumber = players[player].number
        playerNums.push(playerNumber)
    }

    return playerNums
}

//playerStats

function playerStats(player){
    return allPlayers()[player]
}

// bigShoeRebounds

function bigShoeRebounds(){
        return `Mason Plumlee has the biggest shoe size and had ${allPlayers()["Mason Plumlee"].rebounds} rebounds.`
}

//Which player has the most points? Call the function mostPointsScored.
const totalPointsScored = () => {
    let totalPoints = []
    for (let player in allPlayers()) {
        let allPoints = allPlayers()[player].points
        totalPoints.push(allPoints)
    }
    return Math.max(totalPoints)
}

const justName = () => {
    let names = []
    for (let player in allPlayers()) {
        let justNames = allPlayers()[player]
        names.push(justNames)
    }
    return names
}

console.log(totalPointsScored())


// if ( ){

// }


// Which team has the most points? Call the function winningTeam.



// Which player has the longest name? Call the function playerWithLongestName.






// Super Bonus
// Write a function that returns true if the player with 
// the longest name had the most steals. Call the function doesLongNameStealATon.
