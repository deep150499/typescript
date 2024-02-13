// Baisc Types

let lastname: string;
let meaningOfLife: number;
let isLoading : boolean;
let album: any;
let song : string | number;


lastname = 'Samantha';
meaningOfLife = 12;
isLoading = true;
album = true;
song = 'Songs'

const sum = (a:number,b:string) => {
    return a+b;
}

let postId : string | number;
let isActive : number | boolean | string;

// functions

let subtract = function (c:number,d:number):number{
    return c - d
}

type mathFunction = (e:number,f:number) => number

interface scienceFunction {
    (x:number,y:number):number
}

let multiply: mathFunction = function (c,d) {
    return c*d;
}

