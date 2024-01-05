
// Select the input box from the HTML document
let input = document.querySelector("#inputBox");

// Select all the buttons from the HTML document
let button = document.querySelectorAll("button");

// Initialize an empty string to store the input values
let string = "";

// Convert the NodeList of buttons into an array
let arr = Array.from(button);

// Loop over each button in the array
arr.forEach(button => {
    // Add an event listener to each button that triggers when the button is clicked
    button.addEventListener('click', (e) => {
        // If the button clicked is "=", evaluate the string as a JavaScript expression
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        // If the button clicked is "AC", clear the string and the input box
        else if(e.target.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        // If the button clicked is "Del", remove the last character from the string and update the input box
        else if(e.target.innerHTML == "Del"){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        // If any other button is clicked, add its value to the string and update the input box
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

