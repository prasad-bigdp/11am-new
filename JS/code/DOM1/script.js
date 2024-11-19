console.log(document)

// const ele = document.getElementsByTagName('h1');
// console.log(ele[0])
// const ele = document.getElementsByClassName("myHead");
// console.log(ele[0])

// const ele = document.getElementById("myHead2")
// console.log(ele)
// const ele = document.querySelectorAll('h1');
// console.log(ele)
const ele = document.querySelector('.box>h2');
console.log(ele.textContent)
ele.textContent =  "Bye Everyone"
console.log(ele)
let c=0
function fun ()
{
    const myPara = document.getElementById("para")
    console.log(myPara.textContent)
    c++;
    myPara.textContent = c;
}




