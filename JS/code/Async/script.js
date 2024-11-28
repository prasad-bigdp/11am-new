
// function fun ()
// {
//     console.log("helllo World")
// }
// setTimeout(fun,0)
// for (let i = 0; i <= 1000; i++)
// {
//     console.log("bye world")
// }



// setTimeout(() =>
// {
//     setTimeout(() =>
//     {
//         console.log("hi");
//     }, 0)
//     console.log("good")
// },0)
// console.log("boy")
// for (let i = 1; i <= 1000; i++)
// {
//     setTimeout(function ()
//     {
//      console.log("helloo"+i)
//     }, 1)
//     console.log("hi"+i)
// }




// function blast ()
// {
//     document.body.innerHTML=""
// }
// let timeBomb=setTimeout(blast, 5000);
// document.getElementById('btn').addEventListener('click', () =>
// {
//     clearTimeout(timeBomb)
//     clearInterval(alarm)
//     console.log("bomb diffused")
// })
// let c=0
// function fun ()
// {
//     c++
//     console.log(c)
// }
// let alarm=setInterval(fun, 1000)



let count = 15
function timer() {
	count--
	document.getElementById('count').textContent=count
}
let y= setInterval(timer, 1000)
document.getElementById("btn").addEventListener('click', () =>
{
    clearInterval(y)
    clearTimeout(x);
})
let x=setTimeout(() =>
{
    document.body.innerHTML = '';
},count*1000)


// console.log(dt)
// console.log(dt.getFullYear())
// console.log(dt.toLocaleTimeString());
setInterval(() =>
{
    let dt = new Date()
    document.getElementById("time").textContent = dt.toLocaleTimeString()
},1000)



































