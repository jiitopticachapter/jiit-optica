const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#displaynumber");
let string = "0";
display.value = string;

Array.from(buttons).forEach((button) => {
    button.addEventListener(
        "click",
        (event) => {
            if (event.target.value == "=") {
                string = eval(string);
                display.value = string;
            }else if(event.target.value == "AC"){
                string = "";
                display.value = string;
            }else if(event.target.value == "DE"){
                string = string.slice(0,-1);
                display.value = string;
            } else {
                string = string + event.target.value;
                display.value = string;
            }
        }
    )
})

