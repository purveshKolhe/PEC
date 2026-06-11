let array = ["", "", "", 
             "", "", "", 
             "", "", ""];
let turn1 = "X";
let turn2 = "O";

let turn = 0;

var x;

function reset() {
if (turn % 2 == 0) {
    x = turn1;
}
else {
    x = turn2;
} 
}

function check() {
    if (array[0] == array[1] && array[1] == array[2] && array[0] != "" && array[2] == "X") {
        alert("Player X wins!");
    }
    else if (array[0] == array[1] && array[1] == array[2] && array[0] != "" && array[2] == "O") {
        alert("Player O wins!");
    }
    else if (array[3] == array[4] && array[4] == array[5] && array[3] != "" && array[5] == "X") {
        alert("Player X wins!");
    }
    else if (array[3] == array[4] && array[4] == array[5] && array[3] != "" && array[5] == "O") {
        alert("Player O wins!");
    }
    else if (array[6] == array[7] && array[7] == array[8] && array[6] != "" && array[8] == "X") {
        alert("Player X wins!");
    }
    else if (array[6] == array[7] && array[7] == array[8] && array[6] != "" && array[8] == "O") {
        alert("Player O wins!");
    }
    else if (array[0] == array[3] && array[3] == array[6] && array[0] != "" && array[6] == "X") {
        alert("Player X wins!");
    }
    else if (array[0] == array[3] && array[3] == array[6] && array[0] != "" && array[6] == "O") {
        alert("Player O wins!");
    }
    else if (array[1] == array[4] && array[4] == array[7] && array[1] != "" && array[7] == "X") {
        alert("Player X wins!");
    }
    else if (array[1] == array[4] && array[4] == array[7] && array[1] != "" && array[7] == "O") {
        alert("Player O wins!");
    }
    else if (array[2] == array[5] && array[5] == array[8] && array[2] != "" && array[8] == "X") {
        alert("Player X wins!");
    }
    else if (array[2] == array[5] && array[5] == array[8] && array[2] != "" && array[8] == "O") {
        alert("Player O wins!");
    }
    else if (array[0] == array[4] && array[4] == array[8] && array[0] != "" && array[8] == "X") {
        alert("Player X wins!");
    }
    else if (array[0] == array[4] && array[4] == array[8] && array[0] != "" && array[8] == "O") {
        alert("Player O wins!");
    }
    else if (array[2] == array[4] && array[4] == array[6] && array[2] != "" && array[6] == "X") {
        alert("Player X wins!");
    }
    else if (array[2] == array[4] && array[4] == array[6] && array[2] != "" && array[6] == "O") {
        alert("Player O wins!");
    }
    else if (turn == 9) {
        alert("It's a tie!");
    }
}

function tick1() {
    reset();
    document.getElementsByClassName("cell1")[0].innerHTML = x;
    turn++;
    array[0] = x;
    check();
    
}
function tick2() {
    reset();
    document.getElementsByClassName("cell2")[0].innerHTML = x;
    turn++;
    array[1] = x;
    check();
}
function tick3() {
    reset();
    document.getElementsByClassName("cell3")[0].innerHTML = x;
    turn++;
    array[2] = x;
    check();
}
function tick4() {
    reset();
    document.getElementsByClassName("cell4")[0].innerHTML = x;
    turn++;
    array[3] = x;  
    check();
}
function tick5() {
    reset();
    document.getElementsByClassName("cell5")[0].innerHTML = x;
    turn++;
    array[4] = x;
    check();
    
}
function tick6() {
    reset();
    document.getElementsByClassName("cell6")[0].innerHTML = x;
    turn++;
    array[5] = x;
    check();
}
function tick7() {
    reset();
    document.getElementsByClassName("cell7")[0].innerHTML = x;
    turn++;
    array[6] = x;
    check();
}
function tick8() {
    reset();
    document.getElementsByClassName("cell8")[0].innerHTML = x;
    turn++;
    array[7] = x;
    check();
}
function tick9() {
    reset();
    document.getElementsByClassName("cell9")[0].innerHTML = x;
    turn++;
    array[8] = x;
    check();
}

