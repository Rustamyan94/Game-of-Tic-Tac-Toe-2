let player = "O";

function changePlayer(span) {
    if(span.innerHTML !== "X" && span.innerHTML !== "O") {
        if(player === "O") {
            player = "X";
            span.setAttribute("class", "playerX")
        }else {
            player = "O"
            span.removeAttribute("class")
        };
        span.innerHTML = player;
    }else {
        alert("Not a legal mover, try again")
    }
    if(span11.innerHTML === player && span12.innerHTML === player && span13.innerHTML === player) {
        alert("Congratulations, winner is " + player + ", try again")
        location.reload()
    }
    else if(span21.innerHTML === player && span22.innerHTML === player && span23.innerHTML === player) {
        alert("Congratulations, winner is " + player + ", try again")
        location.reload()
    }
    else if(span31.innerHTML === player && span32.innerHTML === player && span33.innerHTML === player) {
        alert("Congratulations, winner is " + player + ", try again")
        location.reload()
    }
    else if(span11.innerHTML === player && span21.innerHTML === player && span31.innerHTML === player) {
        alert("Congratulations, winner is " + player + ", try again")
        location.reload()
    }
    else if(span12.innerHTML === player && span22.innerHTML === player && span32.innerHTML === player) {
        alert("Congratulations, winner is " + player + ", try again")
        location.reload()
    }
    else if(span13.innerHTML === player && span23.innerHTML === player && span33.innerHTML === player) {
        alert("Congratulations, winner is " + player + ", try again")
        location.reload()
    }
    else if(span11.innerHTML === player && span22.innerHTML === player && span33.innerHTML === player) {
        alert("Congratulations, winner is " + player + ", try again")
        location.reload()
    }
    else if(span13.innerHTML === player && span22.innerHTML === player && span31.innerHTML === player) {
        alert("Congratulations, winner is " + player + ", try again")
        location.reload()
    }
    else if(span11.innerHTML != "" && span12.innerHTML != "" && span12.innerHTML != "" && span21.innerHTML != "" && span22.innerHTML != "" && span23.innerHTML != "" && span31.innerHTML != "" && span32.innerHTML != "" && span33.innerHTML != "") {
        alert("There is no winner, try again")
        location.reload()
    }
};

let span11 = document.querySelector("#span11");
let span12 = document.querySelector("#span12");
let span13 = document.querySelector("#span13");
let span21 = document.querySelector("#span21");
let span22 = document.querySelector("#span22");
let span23 = document.querySelector("#span23");
let span31 = document.querySelector("#span31");
let span32 = document.querySelector("#span32");
let span33 = document.querySelector("#span33");

span11.onclick = function () { 
    changePlayer(span11);
}
span12.onclick = function () { 
    changePlayer(span12);
}
span13.onclick = function () { 
    changePlayer(span13);
}
span21.onclick = function () { 
    changePlayer(span21);
}
span22.onclick = function () { 
    changePlayer(span22);
}
span23.onclick = function () { 
    changePlayer(span23);
}
span31.onclick = function () { 
    changePlayer(span31);
}
span32.onclick = function () { 
    changePlayer(span32);
}
span33.onclick = function () { 
    changePlayer(span33);
}
