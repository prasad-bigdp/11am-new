let arr = [5, 6, 7, 8];
console.log(arr)
console.log(arr[0] + arr[2]) //5+7=12
console.log(arr[8], arr[-5])// undefined undefined
//Array Methods
//length - total number of elements
console.log(arr.length) //4
//push(values) - insert value at end of array
console.log(arr.push(5, 6)) // 6
// push returns length of new array, new array is [5,6,7,8,5,6]
// Arrays are mutable and also compares the addresses
//pop - used to remove an element at the end of array. it returns removed element
console.log(arr.pop())
//unshift(values)-- same like push but works at starting of array
console.log(arr.unshift(1, 2, 3, 4))
// new array is [1,2,3,4,5,6,7,8,5,6]
//shift is used to remove 1st item
console.log(arr.shift())
// new array [2,3,4,5,6,7,8,5,6]
//splice(starting_index,deleteCount,elements to insert)
arr.splice(2, 3, 11, 12)// means deleting 3 elements from 2nd index and add 11,12 in second index
//indexOf and lastIndexOf
arr.indexOf(5) // returns index of first occurrence of 5
arr.lastIndexOf(5) //returns index of last occurrence of 5
arr.reverse()// reverse array elements
arr.sort() // sort is used to sort out values alphabetically
//ascending order
arr.sort((a, b) => a - b);
//descending order
arr.sort((a, b) => b - a)
//includes -- it checks whether array contains the element or not
arr = [5, 4, 3, 2, 1];
console.log(arr.includes(25)) //false
//concat
console.log(arr.concat([2, 3, 4, 5]))
// it won't modify original array
// iterators
// forEach - used to iterate the complete array

arr = [2, 5, 8, 9]
arr.forEach((a)=>console.log(a*a))
// use for each and print double of each value in given array
arr.forEach((a) => console.log(a * 2))
let arr2 = arr.map((a) => a * 2)
console.log(arr2)//[4,10,16,18]
// forEach or map can also take 2 parameters and second one will be index

arr=["Raj","Seetha","Geetha","Shekhar"]
// print first character of every element of given array
let x=arr.forEach(function (val,i)
{
    console.log(val.charAt(0), i)
    return val.charAt(0)
})
let y = arr.map(function (val, i) {
	console.log(val.charAt(0), i)
	return val.charAt(0)
})
console.log(x, y)
arr=[1,2,3,4]
let res = arr.map(function (num)
{
    return num%2==0
})
console.log(res) // [false,true,false,true]
let res1 = arr.filter(function (num) {
	return num % 2 == 0
})
console.log(res1)
const names = ["sonam kapoor", "Kareena Kapoor", "Avinash Agarwal", "sona bhatia"]
// string method - endsWith
let arr3 = names.filter((a) => a.toLowerCase().endsWith("kapoor"));
//some - it returns true if any of array value satisfies the condition
arr=[2,4,6,8]
let res3 = arr.some((val) => val % 2 == 0) //true
console.log(res3)
//every - it returns true if all of array value satisfies the condition
let res4 = arr.every((val) => val % 2 == 0) //true
console.log(res4)
























































