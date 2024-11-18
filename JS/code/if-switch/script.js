/* if statement is used to verify a condition */
/* verify and return student status "pass" or "fail" based on condition >35 */
let marks = [5, 12, 56, 96, 45, 78];
let results=marks.map((val) =>
{
    if (val > 35)
    {
        return "Pass"
    }
    else
    {
        return "Fail"
    }
})
console.log(results);
/* create a question with its respective answer in decision statements */
console.log("1. who is the prime minister of India?");
console.log("a. Rahul Gandhi");
console.log("b. Narendra Modi");
console.log("c. Draupati Murmu");
console.log("d. Amit shah");
let ans = 'b';
if (ans == 'a')
    console.log("Wrong Answer");
else if (ans == 'b')
    console.log("Congratulations.Correct Answer.")
else if (ans == 'c')
    console.log("wrong answer")
else
    console.log("wrong answer")

let arr = [5, 8, 12, 33, 25];
/* return only 3 multiples*/
let res = arr.filter((val) => val % 3 == 0)
console.log(res)
/* switch is an alternative to if-elseif*/
switch (ans.toLowerCase())
{
    case 'a': console.log("Wrong"); break;
    case 'b': console.log("Correct"); break;  
    case 'c': console.log("Wrong"); break;
    case 'd': console.log("Wrong"); break;
    default: console.log("please enter valid input"); break;
}
/* write a basic code of js to perform addition,subtraction,multiplication,division on two number based on choice*/
















