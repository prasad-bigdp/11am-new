//loops are used to iterate certain statements again and again.loops executes its body until the condition becomes false
//we have two types of loops i.e., entry control loops and
/*exit control loops
Eg: while,dowhile */
// let x = 20;
// while (x <= 30)
// {
//     console.log(x);
//     x++;
// }
// do
// {
//     console.log(x);
//     x++;
// } while (x <= 30);
let arr=[5,8,3,4,7,9,6]
// using standard for print the values of array
// for (let i = arr.length-1; i >=0; i--)
// {
//     console.log(arr[i])
// }
// try using standard for and print array values in reverse
/*for of*/
for (let i of arr)
{
    console.log(i)
}
for (let i in arr) {
	console.log(i)
}



