#!/usr/bin/env node
var stdin = process.openStdin();

console.log(".--------------------------.");
console.log("|      CLI Calculator      |    \t Arithmatic is simple.")
console.log("^--------------------------^");
console.log("");
console.log("For instruction, enter: \t instruct>> ");
console.log("To quit, enter: \t\t Ctrl+C")
console.log("");
var regExpForAddition = new RegExp("^add");
var regExpForSubtraction = new RegExp("^subtract");
var regExpForMultiplication = new RegExp("^multiply");


stdin.addListener("data", function (d) {
    var userInputString = d.toString().trim();
    if (userInputString === 'instruct>>') {
        instruct();
    }
    else if(regExpForAddition.test(userInputString)){
        var entries = analyze(userInputString, 'add');
        var result = parseInt(entries[0]) + parseInt(entries[1]);
        console.log("= "+ result + '\n');
    }
    else if(regExpForSubtraction.test(userInputString)){
        var entries = analyze(userInputString, 'subtract');
        var result = parseInt(entries[0]) - parseInt(entries[1]);
        console.log("= " + result + '\n'); 
    }
    else if(regExpForMultiplication.test(userInputString)){
        var entries = analyze(userInputString, 'multiply');
        var result = parseInt(entries[0]) * parseInt(entries[1]);
        console.log("= " + result + '\n'); 
    }
    else (console.log("ERROR:\t Type atleast something sensible, will you?!\n"));

    function instruct() {
        console.log('.------------------------------------------.----------------------.');
        console.log('|       Functionality                      |     Command          |');
        console.log('^------------------------------------------^----------------------^');
        console.log('| To add two numbers, a and b              |  add(a,b)            |');
        console.log('| To subtract two numbers, a from b        |  subtract(a,b)       |');
        console.log('| To multiply two numbers, a and b         |  multiply(a,b)       |');
        console.log('| To divide two numbers, a by b            |  multiply(a,b)       |');
        console.log('^------------------------------------------^----------------------^');
        console.log("");
    }



function analyze(theString, operation){
    return theString.split(operation)[1].split('(')[1].split(')')[0].split(',')
}




});
