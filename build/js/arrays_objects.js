"use strict";
let stringArr = ['one', 'hey', 'two', 'bye'];
let guitar = ['play', 'soothing', 76];
let mixData = ['playground', 1999, false];
stringArr[0] = 'Ten';
stringArr.push('seven');
guitar[0] = '120';
guitar.unshift('pause');
let practice = [];
let bands = [];
bands.push('Van helen');
// tuple
let myTyple = ['name', 25, true];
let mixed = ['lastname', 67, false];
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'FirstName',
    prop2: 'lastName',
    prop3: true
};
let evh = {
    name: 'songe',
    active: false,
    album: ['play', true, 47]
};
let jp = {
    name: 'song',
    album: ['play', true, 45]
};
const greetGuitarist = (gGuitarist) => {
    if (gGuitarist.name) {
        return `Hello ${gGuitarist.name.toUpperCase()} & ${gGuitarist.album}`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(evh));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D);
// Literal types
let myName;
let userName;
userName = 'Priya';
// Functions
let add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Heelllloo");
logMsg(add(2, 3));
