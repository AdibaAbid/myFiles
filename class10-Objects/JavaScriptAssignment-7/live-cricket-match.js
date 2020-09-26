//LIVE CRICKET ASSIGNMENT

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {

    }
}

var team1 = prompt("Enter the 1st Team name")
team1 = team1.toUpperCase()
var team2 = prompt("Enter the 2nd Team name")
team2 = team2.toUpperCase()
var totalOvers = prompt("Enter the Number of Overs")
var wheather = prompt("Enter Your Wheather Condition? its Foggy, Rainy or Normal?")
wheather = wheather.toLowerCase()

function toss() {
    return Math.floor(Math.random() * 2)
}

console.log("***Live Cricket Match***")
sleepFor(1000)
console.log("The Match is between two teams: Team " + team1 + " and Team " + team2)
console.log("---------------")
if (wheather == "foggy") {
    console.log("Wait What you say? Its Foggy? then we Delay Match 10s !!")
    sleepFor(10000)
    console.log("Now the Weather is Cleared, Match is starting now ")
    console.log("---------------")
} else if (wheather == "rainy") {
    console.log("Wait What you say? Its Rainy? then we Delay Match 5s !!")
    console.log("Weather Problem It's Raining!! Match Delay for 5s. Please wait untill its Normal....")
    sleepFor(5000)
    console.log("Now the Weather is Cleared, Match is starting now ")
    console.log("---------------")

}
var tossResult = toss()
sleepFor(1000)
console.log("Toss between two teams...")
sleepFor(3000)
if (tossResult == 1) {
    console.log("Toss Win By " + team2)
    console.log("The Winning Team Will Go For Bat.")
} else {
    console.log("Toss Win By " + team2)
    console.log("Losing Team " + team1 + " is going for Balling.")
}

console.log("-------------")
sleepFor(2000)
console.log(totalOvers + " Overs match started, " + team2 + " is to bat.")
console.log("-------------")

var targetScore = teamInnings(team2)

function teamInnings(teamName) {

    var playerNameForTeam1 = ["Sami", "Afridi", "Shoaib Malik", "Salman", "M.Amir", "Kamran", "Shahdaad", "Shehzaad", "Babar Azam", "Sarfaraz"]
    var score = 0
    var wickets = 0
    for (var i = 1; i <= totalOvers; i++) {
        console.log("Over #" + i + " Started")
        console.log("----------")
        for (var j = 1; j <= 6; j++) {
            var ball = Math.floor(Math.random() * 6) + 1
            switch (ball) {
                case 0:
                    sleepFor(2000)
                    wickets += +1
                    console.log("Its Out!")
                    console.log('Remaining Wickets are ' + (5 - wickets))
                    sleepFor(2000)
                    if (wickets === 5) {
                        console.log('ALL OUT')
                        break
                    }
                    break;
                case 4:
                    sleepFor(1000)
                    console.log("Its a Four!")
                    score = score + ball
                    break;
                case 6:
                    sleepFor(1000)
                    console.log("YAY!! Its a SIX!")
                    score = score + ball
                    break;
                case 1:
                    sleepFor(1000)
                    console.log("Running 1 run")
                    score = score + ball
                    break;
                case 2:
                    sleepFor(1000)
                    console.log("Running 2 runs")
                    score = score + ball
                    break;
                case 3:
                    sleepFor(2000)
                    wickets += +1
                    console.log("Its Out!")
                    console.log('Remaining Wickets are ' + (5 - wickets))
                    sleepFor(2000)
                    if (wickets === 5) {
                        console.log('ALL OUT')
                        break
                    }
                    console.log(playerNameForTeam1[--j] + " is Out ")
                    console.log(playerNameForTeam1[j + 1] + " is now playing")
                    break;

                default:
                    sleepFor(2000)
                    wickets += +1
                    console.log("Its Out!")
                    console.log('Remaining Wickets are ' + (5 - wickets))
                    sleepFor(2000)
                    if (wickets === 5) {
                        console.log('ALL OUT')
                        break
                    }
                    console.log(playerNameForTeam1[j] + " is Out ")
                    console.log(playerNameForTeam1[j + 1] + " is now playing")
                    break;

            }

            // sleepFor(2000)
        }

        if (wickets === 5) {
            console.log('ALL OUT')
            break
        }

        sleepFor(3000)
        console.log("-------------")
        console.log("Score: " + score + "/Wickets: " + wickets)
        console.log("-------------")
    }
    console.log(teamName + " has score: " + score + "/" + wickets)
    return score

}

sleepFor(2000)

console.log("-------------")
console.log("Starting the 2nd Innings for Team: " + team1)

console.log("-------------")
sleepFor(2000)

var completedScore = teamInnings(team1)



sleepFor(1000)
if (targetScore < completedScore) {
    console.log("-------------")
    console.log("CONGRATULATIONS TEAM :" + team1 + " YOU PLAYED  WELL! ")
    console.log(team1 + " has made " + completedScore + " runs.")
    console.log("Team " + team2 + " Sorry You Lose The Match...!")
} else {
    console.log("-------------")

    console.log("CONGRATULATIONS TEAM :" + team2 + " YOU PLAYED  WELL! ")
    console.log(team2 + " has made " + targetScore + " runs.")
    console.log("Team " + team1 + " Sorry You Lose The Match...!")
}