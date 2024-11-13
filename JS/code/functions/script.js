/* functions -- reusability,modularity - we divide the whole code into multiple snippets which we can use again and again --these are called functions */
/* function  is called " first class citizen" in JS */
/* simple function */
/* function function_name (param1, param2....)
{
    //function definition
} 
    function_name(argum1,argum2) // function call

*/
/* simple function*/
function display ()
{
    console.log("hi to functions")
}
display();
/* a function can return values*/
function display2 ()
{
    return "hi to functions"
}
let k= display2()
console.log(k)
/* a function can take values as parameters */
function sum (a,b)
{
    console.log(a+b)
}
sum(5,5); //
sum("raj", 4)

/* js can work with any no.of parameters in functions */
sum(5) //it calls sum and assigns a =5 and b=undefined ==>5+undeined=NaN
/* we can also works with default parameters*/
function sum3(a,b=5)
{
console.log(a+b)
}
sum3(3)
/* create a function to return taxiFare which accepts no_of_kilometers and price per kilometer as parameters. In case of price per kilometer absence, default charge is ₹40 */
function myFunction(a, b=40) {
	// Function returns the product of a and b
	return a * b
}
let x = myFunction(4)
console.log("₹" + x)
/* we can manage no.of parameters by rest operator */
/* rest operator is used to accept values in the form of array as they are rest of values
rest operator is denoted by three dots and always rest operator should be the last parameter*/
/* spread operator is used to spread the values. it is also denoted by three dots */
function sum5 (a,...p)
{
    let arr=[2,5,...p,6,7]//[2,5,"shekhar","geetha","seetha"]
    console.log(p,arr)
 
}
sum5("raj", "shekhar", "geetha", "seetha")
/* a function also be considered as variable */
function myFun ()
{
    console.log("simple function")
}
console.log(myFun)
// we can also write as function expression
let myFun2 = function ()
{
        console.log("simple function 2")
}
console.log(myFun2)
myFun2()


function collect (fruit1, fruit2, ...fruits)
{
    const newfruits = [...fruits, "banana"];
    console.log(newfruits)
}
collect("apple","mango","papaya","guava")

function test ( ...b)
{
    console.log(b.length)//[[2,5,7],8,6,3]
    const k=[...b[0],6]
}
test([2,5,7],8,6,3)





// define a function which takes two parameters and subtract them and print in console
function sub (a, b)
{
    console.log(a - b);
}
//convert the above function into function expression
let sub2 = function (a, b)
{
    console.log(a-b)
}
/* we can write function expressions in more simple, modern way called arrow functions */
let sub3 = (a, b) => console.log(a - b);
function myFunction2(a, b = 40) {
	// Function returns the product of a and b
	return a * b
}
let myFunction3 = (a, b = 40) =>  a * b 

// callback functions
// callback function is a function which is passed as a argument to another function which is then called by receiver function
let mad = () => console.log("Mad");
console.log(mad)
let bad = () => console.log("Bad");
console.log(bad)
let test1 = (x, y) =>
{
  x()
    y();
}
test1(mad, bad)

function test2 (a,b,test3)
{ 
    let x = test3(a);
    let y = test3(b);
    console.log(x+y)
}
let square = (k) => k * k;
test2(2, 3, square)

/* create a function which prints sqaures of all elements in a array 
eg: input:2,3 ==> [4,9]
input:2,3,4==>[4,9,16]
*/
function squares (fun,...arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        console.log(fun(arr[i]))
    }
}
let square2 = p => p * p;
squares(square2,5,6,7)


/* closure */
function outer ()
{
    var a = 20;
    function inner ()
    {
        a++;
        console.log(a);
    }
    return inner;
}
let result = outer();
console.log(result)
result() //21
result() //22
result() //23

























































/* write a function sum which takes two numbers and returns their sum */
function sum2(a, b) {
	return a + b
}
let res = sum2(5, 6)
console.log(res)








