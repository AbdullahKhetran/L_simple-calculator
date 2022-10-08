let num1;
let num2;
// num1 and num2 will be initilized when user has given input
let answer;

// declaring radio buttons to later confirm if they are checked by user
let btn_a = document.getElementById("btn_a");
let btn_s = document.getElementById("btn_s");
let btn_m = document.getElementById("btn_m");
let btn_d = document.getElementById("btn_d");


// functions to calculate answer
function add() {
    answer = num1 + num2;
}
function sub() {
    answer = num1 - num2;
}
function mul() {
    answer = num1 * num2;
}
function div() {
    answer = num1 / num2;
}

let buttons = [btn_a, btn_s, btn_m, btn_d];
let index;
// will be using this array in loop to identify which button is checked by user

function calculate() {
    // console.log("calculate button is clicked")

    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    // console.log(num1);
    // console.log(num2);

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked) {
            index = i;
            break;
        }
    }
    // console.log(index);

    // now let's call the right function according to user selection of radio button
    if (index == 0) {
        // console.log("additon function to be performed");
        add();
    } else if (index == 1) {
        // console.log("subtraction function to be performed");
        sub();
    } else if (index == 2) {
        // console.log("multiplication function to be performed");
        mul();
    } else if (index == 3) {
        // console.log("divison function to be performed");
        div();
    }
    // console.log(answer);
    document.getElementById("answer").innerText = answer.toFixed(2); // changing html to display answer
}

let calcBtn = document.getElementById("calcBtn");
calcBtn.addEventListener("click", calculate);

function append() {
    document.getElementById("answer").innerText = "";
}
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", append);