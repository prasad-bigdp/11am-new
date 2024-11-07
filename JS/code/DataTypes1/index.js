let a = 20.25258;
console.log(typeof a) //number
console.log(a.toFixed(3)) //20.253 
console.log(a.toPrecision(4)) //20.25
a = 20;
console.log(a.toString(2)) //'10100'
console.log(Math.sqrt(16)) //4
console.log(Math.cbrt(27)) //3
console.log(Math.pow(2, 3), 2 ** 3) //8 8
console.log(Math.abs(-12)) //12
console.log(Math.max(2, 3, 5, 6, 8, 7)) //8
console.log(Math.min(5, 8, 7, 6, 2))//2
console.log(Math.ceil(-2.412)) //-2
console.log(Math.floor(2.8513)) //2
console.log(Math.round(2.612))//3
console.log(Math.floor(Math.random() * 7))// it returns a random number between 0 and 1 //OTP,captcha,passwordgeneration
a ="The time is 12'o clock";
let b = 'the gandhi said , "good night"'
let cost = 25, items = 4;
console.log(
	`the total of ${items} items with each price ${cost} is ${cost * items}`,
)
console.log(typeof a,typeof b);
a = true;
console.log(typeof a)