function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {

    }
}

var fighters = ['ken', 'ryo', 'ehonda', 'dhalsim', 'm bison', 'jack', 'akuma']
var userPlayer = prompt("Select any one player to play... " + fighters)
userPlayer = userPlayer.toLocaleLowerCase()
if (!fighters.includes(userPlayer)) {
    alert("please enter correct player name")
} else {
    var randomNumber = Math.floor(Math.random() * fighters.length)
    var cpuPlayer = fighters[randomNumber]
    console.log("******Street Fighter***********")
    sleepFor(2000)
    console.log(userPlayer + " vs " + cpuPlayer)
    console.log("**********")

    var Player1 = {
        name: userPlayer,
        health: 100
    }
    var Player2 = {
        name: cpuPlayer,
        health: 100
    }

    var moves = {
        punch: 10,
        kick: 15,
        jump: 0,
        specialMove: 30
    }
    while (Player1.health >= 0 && Player2.health >= 0) {
        var userMoves = prompt("Which move you want? " + "Kick, Punch, Jump, SpecialMove")
        var userMoveValue = moves[userMoves]

        //Specialmove method not working.
        for (var i = 0; i < moves.length; i++) {
            var count = 0
            if (userMoves == "specialMove") {
                if (count == 0) {
                    count++
                } else if (!count == 0) {
                    console.log("you cannot use specialMove twice, select another moves")

                }

            }
        }


        // for cpuPlayer select random moves
        var movesList = Object.keys(moves) //object convert into array
        var moveRandomSelect = Math.floor(Math.random() * movesList.length)
        var cpuMoveSelected = movesList[moveRandomSelect] //Search in array, returns string 
        var cpuMoveVlaue = moves[cpuMoveSelected] //return a value, return number 
        var count = 0


        console.log("Player1 " + Player1.name + " move --->", userMoves)
        console.log("Player2 " + Player2.name + " move --->", cpuMoveSelected)

        Player2.health = Player2.health - userMoveValue
        console.log("Player 2 " + Player2.name + " Health: " + Player2.health)

        Player1.health = Player1.health - cpuMoveVlaue
        console.log("Player 1 " + Player1.name + " Health: " + Player1.health)


        //Game End Winner declared
        if (Player1.health <= 0 || Player2.health <= 0) {
            console.log("***********")
            console.log("Game end")
            if (Player2.health > 0) {
                console.log("Congratulations-----> Winner team is " + Player2.name)
            } else {
                console.log("Congartulations---> Winner team is " + Player1.name)
            }
            break
        }

    }
}