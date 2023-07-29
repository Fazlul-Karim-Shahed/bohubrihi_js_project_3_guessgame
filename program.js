
// Declaring lower and upper range:
var correct_ans;
var low = 1;
var high = 10;

let count = 0;
let cancel = false
let invalidInput = false


document.querySelector("#start").addEventListener("click", guess)



// Creating guess function:
function guess() {




    // Taking a random number: 
    correct_ans = Math.floor(Math.random() * (high - low + 1)) + low;

    for (var i = 0; i < 3; i++) {

        // Taking user input: 
        var myValue = prompt(`Remaining ${3 - i} times. Enter a number: `)
        console.log(myValue)

        // Checking the answer: 
        if (isNaN(myValue) === false && myValue != null) {
            if (correct_ans == myValue) {

                count = 0;
                break;
            }
            else if (myValue > correct_ans) {

                window.alert(`Correct answer is smaller`)
                count++;

            }
            else if (myValue < correct_ans) {

                window.alert(`Correct answer is greater`)
                count++
            }
        }
        else if (myValue === null) {
            console.log('null val')
            cancel = true
            break
        }
        else if (isNaN(myValue)) {
            invalidInput = true
            break
        }
        else {
            window.alert(`You failed. Input must be number`)
            break
        }


    }


    // Invalid

    if (invalidInput) {
        document.getElementById("demo").style.backgroundColor = "red";

        document.getElementById("demo").innerHTML = `Looser! Input must be a number. But you have entered a invalid input. The number is ${correct_ans} <br>`

        // Creating a restart button: 
        var btn = document.createElement("button")
        btn.innerHTML = "restart";
        btn.classList.add("restart");
        btn.style.padding = "10px 15px"
        btn.style.marginLeft = "10px"
        document.getElementById("demo").appendChild(btn)
        document.querySelector(".restart").addEventListener("click", guess)
    }


    // If cancel

    else if (cancel) {
        document.getElementById("demo").style.backgroundColor = "red";

        document.getElementById("demo").innerHTML = `Looser! You have canceled the game. The number is ${correct_ans} <br>`

        // Creating a restart button: 
        var btn = document.createElement("button")
        btn.innerHTML = "restart";
        btn.classList.add("restart");
        btn.style.padding = "10px 15px"
        btn.style.marginLeft = "10px"
        document.getElementById("demo").appendChild(btn)
        document.querySelector(".restart").addEventListener("click", guess)

    }

    // If the answer is right: 
    else if (count == 0 && !cancel && !invalidInput) {

        document.getElementById("demo").style.backgroundColor = "green";
        document.getElementById("demo").innerHTML = `You win!! <br>`


        // Creating a restart button: 
        var btn = document.createElement("button")
        btn.innerHTML = "restart";
        btn.classList.add("restart");
        btn.style.padding = "10px 15px"
        btn.style.marginLeft = "10px"
        document.getElementById("demo").appendChild(btn)

        document.querySelector(".restart").addEventListener("click", guess)
    }


    // If the answer is wrong :
    else {


        document.getElementById("demo").style.backgroundColor = "red";

        document.getElementById("demo").innerHTML = `Looser! I gave you 3 chance.You couldn't once. The number is ${correct_ans} <br>`

        // Creating a restart button: 
        var btn = document.createElement("button")
        btn.innerHTML = "restart";
        btn.classList.add("restart");
        btn.style.padding = "10px 15px"
        btn.style.marginLeft = "10px"
        document.getElementById("demo").appendChild(btn)
        document.querySelector(".restart").addEventListener("click", guess)


    }



}



console.log('Cancel: ', cancel)
console.log('Invalid: ', invalidInput)
console.log('Count: ', count)