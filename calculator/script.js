let body = document.getElementsByTagName("body");


const a = parseFloat(prompt("Input first value: "));
const operation = prompt("Select an operation (+, -, *, /: )", "+");
const b = parseFloat(prompt ( "Input second value: "));
let result;

function calculate(){

    if (operation == "+"){
        result = a + b;
        
    } 
    else if (operation == "-"){
        result = a-b;
        
    }
    else if (operation == "*"){
        result = a*b;
        
    }
    else {
        result = a/b;
        
    }
    alert(`${a} ${operation} ${b} = ${result}`);
}
body.onload = calculate();

