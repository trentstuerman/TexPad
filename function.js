//Define Savefile Array
//3 is the first element, as there exist three initial lines

const saveFile = [3]

//"Render LaTeX" Button On Click

document.getElementById("renderButton").onclick = function(){

    if (document.getElementById("userInput").value == "texpad"){
        let cookieClicker = document.createElement("iframe");
        cookieClicker.setAttribute("src", "https://trentstuerman.github.io/TexPad/");
        cookieClicker.style.width = `${document.getElementById("lineNumber").value}px`;
        cookieClicker.style.height = `${document.getElementById("lineNumber").value}px`;
        document.getElementById("cc").appendChild(cookieClicker);
    }

    //let userInput be the string typed by the user

    let userInput = document.getElementById("userInput").value;

    //let newLog be some paragraph element; no attributes yet

    let newLog = document.createElement("p");

    //set this newLog to be the input of the user.

    newLog.textContent = `${userInput}`;

    //put the most recent userInput into the save file

    saveFile.splice(Number(document.getElementById("lineNumber").value),1,userInput);

    //send the newLog object into the input log division

    document.getElementById("log").appendChild(newLog);

    //replace line element with user input

    document.getElementById("line" + document.getElementById("lineNumber").value).textContent = "$$" + userInput + "$$";

    //render typeset

    MathJax.typeset();

    //increase desired line input by 1 automatically

    document.getElementById("lineNumber").value = 

    Number(document.getElementById("lineNumber").value) + 1;

}

//This section determines what happens when a new line is added

let tally = 3;

document.getElementById("addLine").onclick = function(){

    tally = tally + 1;

    //splice number of lines into saveFile

    saveFile.splice(0,1,tally);

    //all the rest

    let newElement = document.createElement("p");
    newElement.id = "line" + tally;
    newElement.textContent = "$\\text{Line " + tally + "}$";
    document.getElementById("main").appendChild(newElement);
    MathJax.typeset();

}

//Exit confirmation

function exitBuffer(){
    return "Are you sure you want to exit?"
}

//Input Log

let oddeven = 1;
let oddevenhead = 0;
let oddevenfoot = 0;

document.getElementById("toggleLog").onclick = function(){
    oddeven = oddeven + 1;
    if ((oddeven % 2) == 0){
        document.getElementById("log").style.display = "inline";

    }
    else if ((oddeven % 2) == 1){
        document.getElementById("log").style.display = "none";
    }
}

document.getElementById("toggleFooter").onclick = function(){
    oddevenfoot = oddevenfoot + 1;
    if ((oddevenfoot % 2) == 0){
        document.getElementById("footer").style.display = "revert";

    }
    else if ((oddevenfoot % 2) == 1){
        document.getElementById("footer").style.display = "none";
    }
}

document.getElementById("toggleHeader").onclick = function(){
    oddevenhead = oddevenhead + 1;
    if ((oddevenhead % 2) == 0){
        document.getElementById("header").style.display = "revert";

    }
    else if ((oddevenhead % 2) == 1){
        document.getElementById("header").style.display = "none";
    }
}

let oddevencenter = 1;

document.getElementById("toggleControlCenter").onclick = function(){
    oddevencenter = oddevencenter + 1;
    if ((oddevencenter % 2) == 0){
        document.getElementById("controlCenter").style.display = "revert";

    }
    else if ((oddevencenter % 2) == 1){
        document.getElementById("controlCenter").style.display = "none";
    }
}

let inputWidth = 400;

document.getElementById("addLength").onclick = function(){
    inputWidth = inputWidth + 100;
    document.getElementById("userInput").style.width = String(inputWidth + 100) + `px`;
}

document.getElementById("subtractLength").onclick = function(){
    inputWidth = inputWidth - 100;
    document.getElementById("userInput").style.width = String(inputWidth - 100) + `px`;
}
  
//dark

let oddevendark = 0;

document.getElementById("darkMode").onclick = function(){
    oddevendark = oddevendark + 1;
    if (oddevendark % 2 == 1){
        document.getElementById("link").setAttribute("href", "dark.css");
        document.getElementById("indexicon").setAttribute("href", "favicondark.png");
        document.getElementById("darkMode").textContent = "$\\text{Classic Mode}$";
        MathJax.typeset();
    }
    else if (oddevendark % 2 == 0){
        document.getElementById("link").setAttribute("href", "light.css");
        document.getElementById("darkMode").textContent = "$\\text{Dark Mode}$";
        document.getElementById("indexicon").setAttribute("href", "favicon.png");
        MathJax.typeset();
    }
}

let oddevensticky = 0;

document.getElementById("stickyHeader").onclick = function(){
    oddevensticky = oddevensticky + 1;
    if (oddevensticky % 2 == 0){
        document.getElementById("header").style.position = "sticky";
    }
    else if (oddevensticky % 2 == 1){
        document.getElementById("header").style.position = "static";
    }
}