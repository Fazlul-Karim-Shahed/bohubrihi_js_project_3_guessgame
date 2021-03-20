
// Declaring lower and upper range:
var correct_ans;
var low = 1;
var high = 10;


document.querySelector("#start").addEventListener("click", guess)



// Creating guess function:
function guess(){

    
    let count = 0;

    // Taking a random number: 
    correct_ans = Math.floor(Math.random() * (high - low + 1) ) + low;

    for(var i=0; i<3; i++){

        // Taking user input: 
        var myValue = Number(prompt(`Remaining ${3-i} times. Enter a number: `))
        

        // Checking the answer: 
        if (correct_ans == myValue){
            
            count = 0;
            break;
        }
        else if(myValue>correct_ans){
            
            window.alert(`Correct answer is smaller`)
            count++;

        }
        else if(myValue<correct_ans){

            window.alert(`Correct answer is greater`)
            count++
        }

    
    }





    // If the answer is right: 
    if(count == 0){

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
