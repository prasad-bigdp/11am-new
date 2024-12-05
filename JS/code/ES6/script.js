//var can redeclare,reassign,hoisting. var is a function scoped variable
console.log(a)
var a = 10;
var a = 20;
a = 25;
function fun ()
{
    if (true)
    {
        var k = 30;
    }
    console.log(k)
}
// let and const cannot do redeclare and Hoisting
// let can reassign and const cannot
// let and const are block scoped variable
// console.log(p) //error
let p = 10;
const q = 20
// q = 25
function fun() {
	if (true) {
		let k = 30
	}
	console.log(k) //error
}

// template literals

let cost = 25;
console.log(`the cost is ${cost}`)
console.log(`good
morning
everyone`)

//functions
function sum (a, b, c=5)
{
    // if (c == 'undefined')
    // {
    //     c = 5;
    // }
    console.log(a+b+c)
}
sum(5, 6) //16
sum(2, 3, 4) //9
//function expression - arrow function
// var newfun=function()
// {
//     console.log("hello world")
// }
const newfun = () => console.log("hello world")
let arr=[1,2,3]
let newVal = arr.map((v) => v * 2)
console.log(newVal);


//rest and spread
function sum2 (a, ...b)
{
    console.log(a, b)
    const c = ["x", "y", ...b] //["x","y",6,7,8,9]
    console.log(c)
}
sum2(5, 6, 7, 8, 9)

//Array destructure

let arr2 = ["vani", "rani", "mani", "phani"];
// let x1 = arr[0];
// let x2 = arr[1];
// let x3 = arr[2];
// let x4 = arr[3]
let [x1, ...x2] = arr2;
console.log(x1, x2);



let arr3 = [5, 4, 3];
let [y1, ...y2] = arr3;
console.log(y1, y2)

//object destructuring
let obj = {
    name: "PRASAD",
    job:"Full stack developer"
}
console.log(obj.job)
let { name,job } = obj;
console.log(job)


































