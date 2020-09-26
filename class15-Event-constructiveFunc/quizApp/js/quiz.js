var questions = [{ "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?", "correct_answer": "Apple", "incorrect_answers": ["Microsoft", "Atari", "Commodore"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What does CPU stand for?", "correct_answer": "Central Processing Unit", "incorrect_answers": ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What does the &quot;MP&quot; stand for in MP3?", "correct_answer": "Moving Picture", "incorrect_answers": ["Music Player", "Multi Pass", "Micro Point"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "According to the International System of Units, how many bytes are in a kilobyte of RAM?", "correct_answer": "1000", "incorrect_answers": ["512", "1024", "500"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What amount of bits commonly equals one byte?", "correct_answer": "8", "incorrect_answers": ["1", "2", "64"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "Which computer hardware device provides an interface for all other connected devices to communicate?", "correct_answer": "Motherboard", "incorrect_answers": ["Central Processing Unit", "Hard Disk Drive", "Random Access Memory"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "What does the Prt Sc button do?", "correct_answer": "Captures what&#039;s on the screen and copies it to your clipboard", "incorrect_answers": ["Nothing", "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos", "Closes all windows"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "The C programming language was created by this American computer scientist. ", "correct_answer": "Dennis Ritchie", "incorrect_answers": ["Tim Berners Lee", "al-Khw\u0101rizm\u012b", "Willis Ware"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "How long is an IPv6 address?", "correct_answer": "128 bits", "incorrect_answers": ["32 bits", "64 bits", "128 bytes"] }, { "category": "Science: Computers", "type": "multiple", "difficulty": "easy", "question": "In computing, what does LAN stand for?", "correct_answer": "Local Area Network", "incorrect_answers": ["Long Antenna Node", "Light Access Node", "Land Address Navigation"] }]



generateQuiz()

function generateQuiz() {

    var questionElement = document.getElementById("questions")

    for (var i = 0; i < questions.length; i++) {
        var questionItem = document.createElement("LI")
        var title = document.createElement("H3")
        title.innerHTML = questions[i].question
            //li->h3
        questionItem.appendChild(title)
        var options = questions[i].incorrect_answers
        options.push(questions[i].correct_answer)


        // **** Shuffling Array Options ****
        var arrayShuffle = function(arr) {
            var newPos, temp;
            for (var k = arr.length - 1; k > 0; k--) {
                newPos = Math.floor(Math.random() * (k + 1))
                temp = arr[k]
                arr[k] = arr[newPos]
                arr[newPos] = temp
            }
            return arr
        }
        var newArray = arrayShuffle(options)
            // debugger
            // console.log(newArray)

        // **** Option-Print ****
        for (var j = 0; j < options.length; j++) {
            var radio = document.createElement("Input")
            radio.setAttribute("type", "radio")
            radio.setAttribute("id", "q" + i)
            radio.setAttribute("name", i)

            radio.value = options[j]
            questionItem.appendChild(radio)

            var valueItem = document.createElement("SPAN")
            valueItem.innerHTML = options[j]
            questionItem.appendChild(valueItem)

            var breaker = document.createElement("BR")
            questionItem.appendChild(breaker)
        }
        //ol-->li
        questionElement.appendChild(questionItem)
    }

}

// **** On submit action ****

function onSubmit() {

    var score = 0
    for (var j = 0; j < questions.length; j++) {

        var optionValue = document.getElementsByName(j)
        for (var i = 0; i < optionValue.length; i++) {
            // debugger
            var radio = optionValue[i]
                // debugger
                // console.log(optionValue.value)
            if (radio.checked) {
                if (radio.value == questions[j].correct_answer) {
                    score++
                }
            }

        }


    }

    // **** Modal-Popup-Data ****

    var percentage = score * 100 / 10
    var span = document.getElementsByClassName("text-warning")
    var resultShow = document.getElementsByClassName("result")[0]
    resultShow.innerHTML = "Your Total Score Out of 10 is " + score + " and you got " + percentage + "%"
    span.innerHTML = percentage + "%"
    console.log("Total scores-->" + score)
}