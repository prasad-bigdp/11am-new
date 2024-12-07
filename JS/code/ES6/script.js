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
function fun2() {
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




//classes
class Teacher
{
    name; salary; id; subject;
    constructor(i,n,s,sub)
    {
        this.id = i;
        this.name = n;
        this.salary = s;
        this.subject = sub;
    }
}
// this means current calling object
console.log(typeof Teacher)
// console.log(salary)
let obj3=new Teacher(25,"lata",25000,"Maths") //create one object
console.log(obj3.salary) //access the values
 
//In olden times , we have contructor function, but ES6 gives direct constructor to class
//constructors are used to assign initial values to data members

class employee
{
    eid; ename; esalary;
    constructor(i, n, s)
    {
        this.eid = i; this.ename = n; this.esalary = s;
    }
    display ()
    {
        console.log(`Ename:${this.ename} , Eid:${this.eid}, Esalary:${this.esalary}`)
    }
}
class Manager extends employee {
	teamid
    constructor(tid, i, n, s)
    {
        super(i, n, s);
        this.teamid = tid
	}
}
let obj4 = new employee(45, "Raj", 25000);
let obj5 = new employee(65, "Ragini", 15000);
let obj6 = new Manager(4152, 65, "jaya", 15000)
obj5.ename="ramani"
obj4.display();
// classes can also have inheritance
// inheritance means aquaring parent properties to child

export default obj;
export {sum,sum2,newfun,Teacher,employee,Manager}






































