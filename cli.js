#!/usr/bin/env node
var stdin = process.openStdin();

console.log(".--------------------------.");
console.log("|   CLI Calculator 1.0.0   |    \t\t Arithmatic was never so simple.")
console.log("^--------------------------^");
console.log("");
console.log("For instruction, type: \t\t\t instruct..");
console.log("For a specific functionality, type: \t help.. nameOfThatFunctionality");
console.log("To quit, type: \t\t\t\t Ctrl+C");
console.log("");
var regExpForAddition = new RegExp("^add");
var regExpForSubtraction = new RegExp("^subtract");
var regExpForMultiplication = new RegExp("^multiply");
var regExpForHelp = new RegExp("^help..");


stdin.addListener("data", function (d) {
    var userInputString = d.toString().trim();
    if (userInputString === 'instruct..') {
        instruct();
    }
    else if (regExpForAddition.test(userInputString)) {
        var entries = analyze(userInputString, 'add');
        var result = parseInt(entries[0]) + parseInt(entries[1]);
        console.log("= " + result + '\n');
    }
    else if (regExpForSubtraction.test(userInputString)) {
        var entries = analyze(userInputString, 'subtract');
        var result = parseInt(entries[0]) - parseInt(entries[1]);
        console.log("= " + result + '\n');
    }
    else if (regExpForMultiplication.test(userInputString)) {
        var entries = analyze(userInputString, 'multiply');
        var result = parseInt(entries[0]) * parseInt(entries[1]);
        console.log("= " + result + '\n');
    }
    else if (regExpForHelp.test(userInputString)) {
        var helpKeyword = findHelpKeywordFrom(userInputString);
        switch (helpKeyword) {
            case 'add':
                return console.log("add    just add two numbers a,b by add(a,b) \n");
            case 'subtract':
                return console.log("subtract   subtract two numbers a,b by subtract(a,b) \n");
            case 'multiply':
                return console.log("multiply    multiply two numbers a,b by multiply(a,b)");
            default:
                return console.log("Are you from Mars? Make sense of what you type! \n");
        }

    }
    else (console.log("ERROR:\t Type atleast something sensible, will you?!\n"));


    function instruct() {
        console.log('.------------------------------------------.----------------------.');
        console.log('|       Functionality                      |     Command          |');
        console.log('^------------------------------------------^----------------------^');
        console.log('| To add two numbers, a and b              |  add(a,b)            |');
        console.log('| To subtract two numbers, a from b        |  subtract(a,b)       |');
        console.log('| To multiply two numbers, a and b         |  multiply(a,b)       |');
        console.log('^------------------------------------------^----------------------^');
        console.log("");
    }




    function analyze(theString, operation) {
        return theString.split(operation)[1].split('(')[1].split(')')[0].split(',')
    }

    function findHelpKeywordFrom(theString) {
        return theString.split("help.. ")[1];
    }
});
