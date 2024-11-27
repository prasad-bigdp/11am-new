
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
for (let i = 1; i <= 1000; i++)
{
    setTimeout(function ()
    {
     console.log("helloo"+i)   
    }, 1)
    console.log("hi"+i)
}






