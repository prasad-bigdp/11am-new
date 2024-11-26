// function fun ()
// {
//     alert("hellooooooooo")
// }
// function fun2 ()
// {
//     console.log("hi")
// }
// document.addEventListener('keydown', function (event)
// {
//     console.log(event.key)
//     let k=event.key.toLowerCase()
//     if (['a', 'e', 'i', 'o', 'u'].includes(k))
//         alert("it is vowel")
//     else
//         alert("it is consonant")
// })
/* write a logic to print it is vowel only when user
presses a, e ,i,o,u, print consonant in other cases*/

// document.getElementById("inp").addEventListener('focus', function (event)
// {
//     console.log(event.target.value)
// })

document.getElementById('gp').addEventListener('click',()=>alert("grand parent clicked"),true)
 document.getElementById("c").addEventListener("click", () => alert("child clicked"),true)
document.getElementById("btn").addEventListener("click", () => alert("button clicked"),true)


