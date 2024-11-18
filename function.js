let userInput;

document.getElementById("renderButton").onclick = function(){

    userInput = document.getElementById("userInput").value;
    let newLog = document.createElement("p");
    newLog.textContent = `${userInput}`
    document.getElementById("log").appendChild(newLog);
    document.getElementById("line" + document.getElementById("lineNumber").value).textContent = "$$" + userInput + "$$";
    MathJax.typeset();
    document.getElementById("lineNumber").value = 
    Number(document.getElementById("lineNumber").value) + 1;
}

let tally = 3;

document.getElementById("addLine").onclick = function(){
    tally = tally + 1;
    let newElement = document.createElement("p");
    newElement.id = "line" + tally;
    newElement.textContent = "$\\text{Line " + tally + "}$";
    document.getElementById("main").appendChild(newElement);
    MathJax.typeset();
}

function exitBuffer(){
    return "Are you sure you want to exit?"
}

let oddeven = 1;

document.getElementById("toggleLog").onclick = function(){
    oddeven = oddeven + 1;
    if ((oddeven % 2) == 0){
        document.getElementById("log").style.display = "inline";
        console.log(document.getElementById("log").style.display);

    }
    else if ((oddeven % 2) == 1){
        document.getElementById("log").style.display = "none";

    }

}


