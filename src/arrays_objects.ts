let stringArr = ['one','hey','two','bye'];

let guitar = ['play','soothing',76];

let mixData = ['playground',1999,false];

stringArr[0] = 'Ten';
stringArr.push('seven');

guitar[0] = '120';
guitar.unshift('pause');

let practice = [];
let bands : string[] = [];
bands.push('Van helen');

// tuple
let myTyple : [string,number,boolean] = ['name',25,true];

let mixed = ['lastname',67,false];

let myObj : object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
    prop1: 'FirstName',
    prop2: 'lastName',
    prop3 : true
}

interface guitarist {
    name? : string,
    active ?: boolean,
    album : (string | boolean | number)[]
}

let evh : guitarist = {
    name : 'songe',
    active : false,
    album : ['play',true,47]
}

let jp : guitarist = {
    name : 'song',
    album : ['play',true,45]
}



const greetGuitarist = (gGuitarist : guitarist) => {
    if(gGuitarist.name){
        return `Hello ${gGuitarist.name.toUpperCase()} & ${gGuitarist.album}`
    }
    return 'Hello!'
}

console.log(greetGuitarist(evh));


// Enums

enum Grade{
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.D);

// type Aliases 

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface paino {
    name : string,
    age : stringOrNumber,
    album : stringOrNumberArray
}

// Literal types
let myName : 'John';

let userName : 'Riddhi' | 'Priya' | 'Marry';
userName = 'Priya';

// Functions

let add = (a:number,b:number):number => {
    return a+b;
}

const logMsg = (message:any):void => {
    console.log(message)
}

logMsg("Heelllloo");
logMsg(add(2,3));